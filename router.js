const express = require("express");
const app = express();
app.get("/student", async function(req,res){
    try{
        const student = await Promise.resolve({
            name: "sanju",
            marks:12,
        })
        res.status(200).json(student);

    }catch(error){
        res.status(500).json({
            message: "internal server error"
            
        })

    }
})

// ~~~~~~~~~~ MIDDLEWARE IN EXPRESS~~~~~~~~~~

