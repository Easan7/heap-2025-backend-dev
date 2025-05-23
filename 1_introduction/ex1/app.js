//* Exercise 1: Project Information Server

// Follow the instructions in the comments to complete the code.
//! (1) Import http from the global scope
const http = require("http");
//! (2) Create a server
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    //! (2.1) Store and retrieve your project information
    const myMessage = "Easan, Ben, Wei Choon, Jerome, Nithish";

    res.end(JSON.stringify({message: myMessage}));
});


//! (3) Starts the server on port 8000
server.listen(8000, () => {
    console.log("Server is running on port 8000");
});

//* Write your helper function here

//?
//?
//? Instructions:
//? 1. CD into this directory
//?    - cd .\1_introduction\ex1\
//? 2. Run the script
//?    - node app
//? 3. Test in the browser
//?    - http://localhost:8000
//? 4. Stop the server
//?    - Ctrl + C
