const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.render("hello.ejs");
});

app.listen(4000,()=>{
    console.log("Server is listening on port 3000");
})