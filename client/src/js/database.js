import { openDB } from "idb";

const DB_NAME = "jate";
const DB_VERSION = 1;

const initDb = async () => {
  try {
    const db = await openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains("jate")) {
          db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
        }
      },
    });
    console.log(`Database "${DB_NAME}" version ${db.version} initialized`);
    return db;
  } catch (error) {
    console.error("Failed to initialize database", error);
    throw error;
  }
};

export const putDb = async (content) => {
  console.log("PUT to the database");
  const db = await initDb();
  const tx = db.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const request = store.add({ jate: content });
  const result = await request;
  console.log("Data saved to the database", result);
};

export const getDb = async (id) => {
  console.log("GET from the database", id);
  const db = await initDb();
  const tx = db.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const request = id ? store.get(id) : store.getAll();
  const result = await request;
  console.log("Data retrieved from the database", result);
  return result;
};

initDb();
