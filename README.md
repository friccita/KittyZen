# KittyZen -- my first mobile app

This is a simple mobile app that I cobbled together for fun in order to teach myself some React, React Native, and JavaScript.
It generates random quotes (from https://zenquotes.io/) and random cat images (from https://thecatapi.com/).

## Instructions

You will need an environment for compiling JavaScript and tools for testing/running a React Native application. First, install Node.js from `https://nodejs.org/en/download/` so that you can use npm for JS package installation.

Once that is done, open your terminal and install the Expo command line tool:

`npm install -g expo-cli`

Download the KittyZen git repository:

`git clone https://github.com/friccita/KittyZen.git`

Go into the KittyZen directory and start the program:

`yarn start`

This should open up a tab in your browser with an Expo UI for testing the application. On the left side of the screen, there will be a QR code. Download the Expo app on your phone, then open the app and scan the QR code. This will run a session of the KittyZen app on your phone.

(**Note:** The zenquotes.io API has a limit of 5 free quotes per 30 seconds. If you exceed this limit when using the app, an alert window will pop up telling you to wait for a minute.)

![Screenshot_KittyZen](https://user-images.githubusercontent.com/4863972/123461415-f4e28600-d59d-11eb-92d3-85585198300d.jpg)
