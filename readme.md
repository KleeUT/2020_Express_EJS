# Express + EJS web server
This is a small web server using Express to serve file and EJS to template them. 

The goal here is to provide a small sample of how to get started.  

# Build
1. Install [Node JS](https://nodejs.org/en/) (Either LTS or current will be fine). 
2. Copy the code base down either with git or by downloading the zip. 
3. In a command line navigate to this directory.
4. Run `npm install`

# Runnning

1. Run `npm start`
2. open http://localhost:8080

# Developing

## Server
The web server is running in the `server.js` file. 
This uses [Express JS](https://expressjs.com/) to handle web requests. 

This handles the data and passes it through to the view layer described below.

Changes made to `server.js` will requre you to stop the command line process and start it again.

## View Layer

The web pages which are displayed. These take the data passed from the server and render them into html. 

These are located in the `views` directory.  They use [EJS](https://ejs.co/) in order to render dynamic data into html.

When these are modified refresh the browser to view them.

## Static files

These are the `.css` and `.js` files that are sent down to the client.  They are kept in the `public` directory.  Currently there is only a `.css` file in there used for basic styling of the outputted view. 

# More information

This is mostly raw code. More information on learning Node JS, Express JS and EJS can be found in this tutorial on YouTube https://www.youtube.com/playlist?list=PLJlrbbAG08uODIwuT3Ov0ytukd14AlBZx