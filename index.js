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
    
]


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

    const newtodo = {
        id : todoArr[todoArr.length-1] .id+1,
        status: todoArr.status,
        task: todoArr.task,
        tags: todoarr.tags
    }

    TodoArr.push(newtodo)
    res.send(todo);
 })

 const PORT = process.env.PORT || 3000

app.listen(PORT,() => {
    console.log('yeahh server is running on this port ${PORT} ');
});