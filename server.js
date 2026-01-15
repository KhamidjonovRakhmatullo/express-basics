/**
 * Backend Server Side Rendering (BSSR)
 */

console.log("Backend Server Side Rendering (BSSR) started");

// ===============================
// Imports
// ===============================
const express = require("express");
const http = require("http");

// ===============================
// App Initialization
// ===============================
const app = express();

// ===============================
// 1. Request Entrance
// ===============================

// * Let coming browser request to enter public folder (CSS, images, JS)
app.use(express.static("public")); // Middleware DESIGN PATTERN

// * Convert incoming json data to object structure
app.use(express.json()); // Middleware DESIGN PATTERN > Rest API support

// * Get POSTed input data which coming from traditional form request 
app.use(express.urlencoded({extended: true})); // Middleware DESIGN PATTERN > Traditional API support


// ===============================
// 2. Session
// ===============================


// ===============================
// 3. View Engine (EJS)
// ===============================

// Direction to the folder
app.set("views", "views");
// Set EJS as the template engine
app.set("view engine", "ejs");


// ===============================
// 4. Routes
// ===============================

//post method
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({result: "Success! You have add a new item"});
});

//get method
app.get("/", function(req, res) {
    res.render("home");
});


// ---- ---- ---- ----
//Server Configuration

// Create HTTP server
const server = http.createServer(app);

// PORT 
let PORT = 3000;

// Start server
server.listen(PORT, function() {
    console.log(`Server is running on port: ${PORT}`);
});


/*
System design: Pettern "qolip"

PATTERNS:
  - ARCHITECTURE PATTERN (MVC/DI "dependency injection")
  - DESIGN PATTERN (MIDDLEWARE/DECORATORS)

FRONTEND BUILD:
  - BSSR (EJS)
  - SPA "single page application" (REACT)

API REQUEST criteria:
  - TYPE      > Traditional API | Rest API | GraphQL API
  - METHOD    > GET | POST
  - STRUCTURE > header | body

*/


/*

  FULLSTACK = restaurant

  Frontend - client
        |
  API - waiter
        |
  Backend - restaurant operations
        |
  Server - kitchen
        |
  Database - warehouse 

1. Customer places an order → Frontend
2. Waiter takes order → API
3. Kitchen prepares it → Server & Backend
4. Ingredients taken from storage → Database
5. Meal returns via waiter → API
6. Customer receives food → Frontend UI


api = application programming  interface
express = external package framework for node.js
backend is for create APIs
express() = core func
app. => object which got instance from express()

*/
