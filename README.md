## Text Editor

- Progressive Web Applications (PWA)

- ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

- ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

## Contents

[Description](#description)

[User Story](#user-story)

[Acceptance Criteria](#acceptance-criteria)

[Installation](#installation)

[Usage](#usage)

[Resources & Credit](#resourcescredit)

[Features](#features)

[Application Screenshot Preview](#application-screenshot-preview)

[License](#license)

## Description

- The PWA Challenge: Text Editor is an exciting project that challenges developers to create a text editor application using Progressive Web Application (PWA) principles. The goal of this challenge is to inspire developers to utilize modern web technologies to create a fast, responsive, and reliable text editor that provides a native-like user experience.

- By building a PWA text editor, developers have the opportunity to showcase their skills in using advanced web technologies, such as service workers, web app manifests, and responsive design. They can also explore new possibilities in developing a fully functional application that can work offline, be installed as an app, and deliver seamless experiences across devices.

- The challenge also encourages developers to consider important factors such as accessibility, security, and performance, and to implement best practices for optimizing the user experience. With PWAs being increasingly adopted by businesses and organizations as a way to deliver engaging and user-friendly applications, this challenge provides a valuable opportunity for developers to enhance their skills and create a compelling application that can be used by a wide range of users.

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

### Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Installation

- This text editor require a number of methods and store data to an IndexedDB database to be builded up.

- This application will require the installation of Node.js and various npm packages.

- Node Package Manager (npm) is a software manager and installer which puts the modules in place so that the node project can utilize it, and also, it manages dependency conflicts intelligently and initialized using **npm init**. The package.json will be generated and will contains all the details of the application in which the user have inputted during the npm initialization.

- This application will use the following npm packages:-

        * npm install express (express.js)
        * npm install --save-dev webpack (Webpack)
        * npm install webpack-dev-server --save-dev (webpack-dev-server)
        * npm install --save-dev webpack-pwa-manifest (WebpackPwaManifest)
        * npm install babel (Babel)
        * npm install --save-dev css-loader (CSS-loader)
        * npm install concurrently --save (run multiple commands concurrently.) (Concurrently)
        * npm npm install idb (IndexedDB)

- The required modules are bundled in the package.json file and at CLI or integrated terminal type in **npm run install**, the modules will be installed.

## Usage

- Open the PWA text editor in your web browser on your laptop, tablet, or smartphone.

- Sign in to your account or create a new one if you haven't already.

- Create a new document or open an existing one from your cloud storage.

- Start writing, using the text editor's features to format your text, add images, and more.

- Save your work regularly to ensure that it's always up to date.

- When you're done writing, close the text editor and your work will be saved automatically.

- The next time you want to work on your writing project, simply open the PWA text editor on any device and your files will be ready and waiting for you.

- By using a PWA text editor, you can enjoy the convenience of working on your writing projects from anywhere, without having to worry about software installations or file transfers.

## Resources/Credit

- University of Miami - Provided Starter Code

- Author: Martin Cespedes - [Link to my Github](https://github.com/MartinCespedes)

## Features

- Offline mode: The text editor should be able to work offline, allowing users to continue writing even when they don't have an internet connection.

- Auto-save: The text editor should automatically save changes to the user's document, ensuring that they never lose their work.

- Rich text editing: The text editor should support a range of formatting options, such as bold, italic, underline, and font size.

- Image insertion: The text editor should allow users to insert images into their document.

- Sharing: The text editor should enable users to share their document via email or social media.

- Collaboration: The text editor should allow multiple users to work on the same document simultaneously.

- Responsive design: The text editor should be designed to work seamlessly across a range of devices and screen sizes.

- Accessibility: The text editor should be designed to be accessible to users with disabilities, with features such as screen reader support and keyboard navigation.

- These are just a few possible features for a PWA text editor - there are many other features that could be added depending on the needs of the user and the specific use case.

## Application Screenshot Preview

![Preview-1](./Develop/client/src/images/JATE_1.png)

##

![Preview-2](./Develop/client/src/images/JATE_2.png)

##

![Preview-3](./Develop/client/src/images/JATE_3.png)

##

![Preview-4](./Develop/client/src/images/JATE_4.png)

##

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

Copyright (c) 2023 Martin Cespedes

This project is licensed under the terms of the MIT license.
