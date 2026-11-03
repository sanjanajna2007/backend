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

// syntaxxx

app.use((req,res,next)=>{
    console.log("middle wear executes");
    next();
})

// ~~~~~application middlewere~~~~~~~~~~
app.use((req,res,next) => {
    console.log("application middlewewe");
    next();
})

//<<<<<<<<<router level middlewere>>>>>>>>.

// const express = require ("express");
const router = express.Router();
router.use((req,res,next)=> {
    console.log("router midle were");
    next();
})

app.use(express.json());
app.post("/register",(req,res)=>{
    const name=req.body.name;
    const age=req.body.age;

    console.log(name);
    console.log(age);

    res.send("registration successfully");
})

app.use(express.json());
app.use(router);

app.listen(5000,()=>{
    console.log("servver running on port 5000");
    
})

