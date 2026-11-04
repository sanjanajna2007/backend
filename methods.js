const express = require("express");
const app = express();
// app.get("/student",(req,res )=>{
//     console.log(res.query.name);
//     res.send("student details");
// })
// app.listen(5000,() => {
//     console.log("server running a port 5000");
// })

// <<<<<<<<     HTTPMETHOD     >>>>>>>>>
// read
app.get("/students/:id",(req,res) =>{
    res.status(500).send("getting students");

})
// create
app.post("/students/:id",(req,res)=>{
    console.log("student updated");
})
// complete update 
app.put("/student/:id",(req,res)=>{
    res.send("updated the students");

})
// to delete
app.delete("/students/:id",(req,res)=>{
    res.send("student is seleted");
})
