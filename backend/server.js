const express=require('express');
const app=express()
const db=require('./db')

const Todo=require('./todo')
console.log(Todo);
app.use(express.json())

app.get('/',(req,res)=>{
    res.json('GET/ is Working')
});

app.get('./tasks' , (req ,res)=>{
    Todo.find({}, (err,data)=>{
        if(err){
            console.log('ERROR:' , err);
    
        }
        else{
            res.json(data);
        }
    });
});



app.get('/tasks',(req,res)=>{
    Todo.find({} ,(err,data)=>{
        if(err){
            console.log("ERROR:" ,err);

        }else{
            res.json(data);
        }
    });
});

app.post('/tasks' ,req,res )
Todo.create({},(err,newTask)=>{
    console.log(req.body);
    if(err){
        console.log('ERROR:' ,err);
    }else{

        res.status(201).json("Creted New Todo Successfully");
    }
});







app.listen(5000,()=>{
    console.log('SERVER IS WORKING...')
});
