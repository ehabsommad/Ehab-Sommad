const fs = require("fs");
fs.writeFile("we-start-file.txt",
"Welcom in node.js - WeStart Mern",
(error)=>{
    console.log(error)
});