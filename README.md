# OAuth Web Application

## Introduction

This project is a simple web application that demonstrates the OAuth authentication flow. The app allows the user to:

  1 - Go through the OAuth flow to obtain an access token.
  
  2 - Display the generated access token on the screen.
  
  3 - Retrieve and display a list of clients.
  
  4 - Create a new client using the API.

## Features

- OAuth Authentication Flow: The app guides the user through the OAuth process to authenticate and obtain an access token.
- Access Token Display: Once authenticated, the access token is displayed on the screen for further API requests.
- Client List Retrieval: The app fetches and displays a list of clients from the VCita API.
- Create New Client: A new client can be created via a POST request to the VCita API, and the client list is automatically refreshed afterward.

## Technologies
- React.js: The app is built using React for building user interfaces.
- React Router: Used to manage navigation between the login page and OAuth callback page.
- OAuth 2.0: Implements OAuth 2.0 for authenticating the user and obtaining an access token to interact with the VCita API.
- Fetch API: Handles HTTP requests (GET and POST) for interacting with the VCita API to fetch clients and create new ones.
- Firebase Hosting: The app is deployed using Firebase for hosting, with the necessary rewrites for single-page application (SPA) support.

## Installation

1- Clone the repository:

``` git clone https://github.com/AnthonyAssayah/api-web-app.git ```

2- Navigate into the project directory:

``` cd vcita-oauth-app```

3- Install the dependencies:

``` npm install ```

4- Start the development server:

``` npm start ```

5- Open your browser and go to ```http://localhost:3000```.
- Click on the "Login with VCita" button to initiate the OAuth process.
- Once you allow access, the access token will be displayed.
- The app will then list your clients.
- You can also create new clients using the provided button.
