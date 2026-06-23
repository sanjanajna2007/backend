const express = require('express');
const app = express();

const todolist = [
    {
        task: "getting an api",
        rollno: 2,
        status : "processing"
    },
    {
        task: "already getting an api",
        rollno: 4,
        status : "processing"
    },
    {
        task: "what is an rest api",
        rollno: 6,
        status : "processing"
    }
    
];

app.use(express.json())

app.get('/', (req,res) =>{
    res.send("yeah new data has created");
});
 app.get('/todos', (req, res) =>{
    res.send(todolist);
 });

 app.get("/todos/:rollno", (req,res) =>{
   const todoId = req.params.id;

   const todo = Todolist.find((s) => s.rollno === todorollno);
   res.send(todo);
 });

 app.post('/todos', (req,res) => {
    const todo = req.bodyconsole.log(todo);

    if(!todo.task){
        return res.status(400).json({message:"task is required!"});
    }

    if(!todo.tags) {
        return res.status(400).json({message:"tags is required!"});
    }
    if(!todo.status) {
        return res.status(400).json({message:"status is required!"});
    }
    if(!todo.id) {
        return res.status(400).json({message:"id is required!"});
    }

    const newtodo = {
        id : todoArr[todoArr.length-1] .id+1,
        status: todoArr.status,
        task: todoArr.task,
        tags: todoarr.tags
    }

    TodoArr.push(newtodo)
    res.status(400).json(newtodo);
 })

 app.post('/todos', (req,res) => {

    const todo = req.body;
    console.log(todo);

    if(!todo.task){
        return res.status(400).json({message:"task is required!"});
    }

    if(!todo.tags){
        return res.status(400).json({message:"tags is required!"});
    }

    if(!todo.status){
        return res.status(400).json({message:"status is required!"});
    }

    if(!todo.id){
        return res.status(400).json({message:"id is required!"});
    }

    const newtodo = {
        id: todo.id,
        task: todo.task,
        tags: todo.tags,
        status: todo.status
    };

    todolist.push(newtodo);

    res.status(201).json(newtodo);

    const port = process.env.port||3000
    app.listen(port, ()=> {
        console.log("yeah server is running")
    })
});

 

