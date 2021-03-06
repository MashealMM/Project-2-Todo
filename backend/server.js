const express=require('express');
const app=express()
const db=require('./db');
const { deleteOne } = require('./todo');

const Todo=require('./todo')
console.log(Todo);
app.use(express.json())

app.get('/',(req,res)=>{
    res.json('GET/ is Working')
});

app.get('/tasks', (req,res)=>{
    Todo.find({}, (err,data)=>{
        if(err){
            console.log('ERROR:' , err); }
        else{
            res.json(data);
        }
    });
});

app.post('/tasks',(req,res)=>{
    Todo.create({},(err,newTask)=>{
        console.log( req.body);
        if(err){
            console.log('ERROR:' ,err);}
            else{

            res.status(201).json("Creted New Todo Successfully");
        }
    });
});


app.delete('/tasks/:id' , (req, res)=>{

    console.log("37:", req.params.id);
    Todo.deleteOne({_id: req.params.id }, (err, deleteObj) => {
        if (err) {

            console.log("ERROR:", err);
        } else {
            deleteObj.deletedCount === 1 ?
             res.json("Delete one todo successfully")
             : res.status(404).json("This todo is not found");

        }
    });
});
app.delete('/tasks' , (req, res)=>{

   // console.log("37:", req.params.id);
    Todo.deleteMany({isCompleted: true }, (err, deleteObj) => {
        if (err) {

            console.log("ERROR:", err);
        } else {
            console.log(deleteObj);
            deleteObj.deletedCount === 0 
            ?res.status(404).json("There ara no completed is not found")
           :res.json("Delete all completed todos successfully");
             

        }
    });
});
 
    app.put('/tasks/:id', (req,res)=>{
        Todo.updateOne({_id: req.params.id},
            {title: req.body.newTitle},
                (err,updateObj) =>{
                    if(err){
                        console.log("ERROR:",err);
                        res.status(400).json(err)
                    }
                    else{
                        console.log(updateObj);
                        updateObj.modifiedCount === 1 ?
                        res.json('Update one todo successfully')
                        :res.status(404).json('This todo is not found');
                    }

                
            });

    });

    app.put('/tasks/:id/:isCompleted', (req,res)=>{
        console.log('1123' ,req.params);
      Todo.updateOne({_id: req.params.id},
          {isCompleted: req.params.isCompleted},
                (err,updateObj) =>{
                    if(err){
                        console.log("ERROR:",err);
                        res.status(400).json(err)
                    }
                    else{
                        console.log(updateObj);
                        updateObj.modifiedCount === 1 ?
                        res.json('Update one todo successfully')
                        :res.status(404).json('This todo is not found');
                    }

                
            });

    });

 
    app.get('/filter' ,(req,res)=>{
        console.log(req.query);
        Todo.find({isCompleted: req.query.isCompleted},(err,data)=>{
            if(err){
                console.log('error' ,err);
}else{
               res.json(data);
           }
        });
    });
/*
the up endpoint is replace to these two

   app.get('/complete' ,(req,res)=>{
        Todo.find({isCompletd: true},(err,data)=>{
            if(err){
                console.log('error' ,err);
            }else{
              //  console.log(data)
                res.json(data);
            }
        });
    });
    app.get('/not_complete' ,(req,res)=>{
        Todo.find({isCompletd: false},(err,data)=>{
            if(err){
                console.log('error' ,err);
            }else{
              //  console.log(data)
                res.json(data);
            }
        });
    });*/






app.listen(5000,()=>{
    console.log('SERVER IS WORKING...')
});
