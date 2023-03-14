<!-- REACT -->
If you have Node.js already installed skip this step; Otherwise head to https://phoenixnap.com/kb/install-node-js-npm-on-windows
And follow the steps there. I'm using node version 11.15.0 for this tutorial.

If you are using the react-buy-local-boilerplate skip this section by heading to line 96.

<!-- STARTING FROM SCRATH -->
1) Setting up a project with react
  A) Using the terminal, navigate to your desired location for your app and use the command 'npm init react-app your-app-name'
  B) Navigate into your project folder with the command 'cd your-app-name' and use the command 'code .' to open the folder in visual studio code
  C) Next copy the 'package.json' file from the react-buy-local-boilerplate folder and paste it into your project folder
    i) Open package.json and change the 'name' property from 'react-buy-local-boilerplate' to the name of your app
  D) Do the same with the 'webpack.config.js' and '.babelrc' files
  E) In VS Code, open terminal using CTRL + J and use command 'npm install' to install the dependancies
  F) Now you have the basic setup done, create 2 new folders called 'public' & 'src'
    i) You won't need to touch this folder too much. The public folder is for your react code, after being filtered down into html, css and javascript, to live. So the browser can read your project and display your app to the screen.
    ii) The src folder will be the place for all the code your write.
  G) In the src folder create a new file and call it 'index.js' and add the following code:
    i) This is your master file, all other files you write in src will eventually run through this file and be filtered into html,css and javascript and sent to a file we're about to create in the public folder.
    
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<AppRouter />, document.getElementById("root"));

    ii) With any react file you write you will first need to begin by importing react using the syntax of 'import React from "react";', import lets us grab code from either files we write ourselves or from an already installed library. In this file we're importing both libraries and a component we will write ourselves called 'AppRouter'. 
    iii) ReactDOM.render(<AppRouter />, document.getElementById("root")) This bit of code renders all of our react code and makes it readable for an internet browser. ReactDOM.render takes in 2 props, the first is what you want to be rendered to the screen. In this instance we are rendering our AppRouter component which we will set up and explain later. The second is the DOM call document.getElementById("root"), which is connecting ReactDOM to where you would like it to print the react code. In this instance we'll connect it by finding a div with the id of 'root' which we will set up next, in the public folder.

  H) In the public folder create a new file and call it 'index.html' and add the following code:

<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Boilerplate</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
  
    i) Change title from 'Boilerplate' to the name of your app
    ii) In this file we are setting up a <div> with the id of 'root' so that our 'index.js' file in the src folder can find this file and print all of our react code for the browser to read.
  I) In the src folder make 2 new folders called 'routers' & 'components'
    i) The 'routers' folder will be home to files that act as navigation.
    ii) The 'components' folder will be home to all our different components and pages.
  J) In the routers folder make a new file called 'AppRouter.js' and add the following code:
    i) This file acts as navigation for our app and sets up a link between routes and different components. (It is standard practise to capitalize the first letter of each word when naming components)

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from "../components/LandingPage";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;

    i) We start by adding our imports at the top of the file, then we set up a function called AppRouter. Because we're only returning jsx from this function we can use () instead of {}.
    ii) Inside of the function we start by setting up our <BrowserRouter>, this is used to keep our UI in sync with the URL.
    iii) <Switch> goes through the order of <Route>'s and renders the first one that's path matches the url in the internet browser.
    iv) And finally <Route> connects the url path '/' to our component 'LandingPage'

  K) In the components folder make a new file called 'LandingPage.js' and add the following code:

import React from 'react';

const LandingPage = () => (
  <div className='container'>
    <div className='row'>
      <div className='col-md-12'>
          <h1>LANDING PAGE</h1>
        </div>
    </div>
  </div>
);

export default LandingPage;

  i) This file has a function that exclusively returns some jsx, between the brackets treat this file like your inside a html <body> tag.

  L) Once again open up the terminal and enter 'npm start' to check the app runs and there are no errors
    i) If there are no errors head to 'localhost:8080' on chrome and you should see the words 'LANDING PAGE' printed on the screen.
    ii) If not open the chrome console and check for errors.
  K) Copy the 'styles' folder, which can be found in the src folder, from the react-buy-local-boilerplate project and add it to your own project.
    i) Remove the components folder in styles. (DO NOT REMOVE THE COMPONENTS FOLDER IN SRC)
    ii) Close down your 'npm start' by pressing CTRL + C then entering 'y', restart the server by once again entering 'npm start' and check for errors.


<!-- STARTING WITH THE REACT BUY LOCAL BOILERPLATE -->
1)
  A) Copy the react-buy-local-boilerplate folder and paste it in you desired location
    i) Change the folder name of the copy to your app name
  B) Open your new project folder in VS Code
  C) Inside VS Code, double click the package.json file and change the 'name' property from 'react-buy-local-boilerplate' to your project name
  D) Before we can run the app we must set up the databse. In the firebase folder, which can be found in the src folder, add a new file called 'firebase.js' then open up google chrome and head to 'https://firebase.google.com/'.
    i) Once on the firebase website, first make sure you are logged into a google account (support@system7.co.nz), then in the top right click the button that says 'Go To Console'.
    ii) You should be presented with a big button that says '+ Add Project', click that and enter your project name and click continue, this will ask you if you would like Google Analytics for your firebase project, untick this and press continue again.
    iii) Once firebase has finished installing your database, navigate to 'Realtime Database' by using the tabs on the left.
    iv) At the top there should be a button that says 'Create Database' click that and make sure 'start in locked mode' is ticked then press 'Enable'
    v) This should take you to your new database, from here click the 'rules' tab at the top of the page and under the 'edit rules' option, change both '".read": false' and '".write": false' to true. 
      eg:
      {
        "rules": {
          ".read": true,
          ".write": true
        }
      }
    vi) Click 'Publish' and dismiss the warning. This just means anyone who has access to your databse Id can change your data, this will most likely be changed later to work along side user authentication.
    vii) Navigate back to the home page by clicking 'Project Overview' in the top left, then click the '</>' button on the banner to get started with a web app database. This should bring up a prompt to name your app, name it the same as you did before, make sure 'set up Firebase Hosting for this app' is UNTICKED, and hit 'Register App'.
    viii) You should now be met with some code to add Firebase SDK to your app, copy the following code from your firebaseConfig (your should have different strings to mine):

var firebaseConfig = {
  apiKey: "AIzaSyC6XdhkYqZV0GFWQW2YEPZrTwpkA6OStIc",
  authDomain: "test-69a0b.firebaseapp.com",
  databaseURL: "https://test-69a0b.firebaseio.com",
  projectId: "test-69a0b",
  storageBucket: "test-69a0b.appspot.com",
  messagingSenderId: "856518581894",
  appId: "1:856518581894:web:2a5faace725326bd92bb07"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
    ix) Return to Visual Studio Code and create a new folder in src called 'firebase'. This will house the file for our database configuration. Create a file in this new foldler and call it 'firebase.js'.
    x) Paste your firebaseConfig code into this file and add the following to the top of this new file:

import firebase from "firebase/app";
import "firebase/database";

    xi) And this line to the bottom of the file and save: 

export default firebase.database();

  E) In VS Code, open terminal using CTRL + J and use command 'npm install' to install the dependancies
  F) Once the dependancies are installed, use the command 'npm start' to build your app and test for errors.
    i) Fix any errors that pop up
    ii) If it's finished building the app and no errors occur, on google chrome and head to 'localhost:8080'. Here you should see the landing page pop up.