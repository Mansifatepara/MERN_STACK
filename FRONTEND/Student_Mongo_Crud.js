const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const student = require('./StudentSchema');
const cors = require('cors');

const connectionString = "mongodb+srv://mansifatepara:Mansi208@cluster0.d6cae.mongodb.net/School";

mongoose.connect(connectionString).then(()=>{
    console.log('Connected with cloud database');

    const app = express();
        // Enable CORS
        app.use(cors());

    app.use(bodyParser.urlencoded());


    //getAll
    app.get('/students',async (req,res)=>{
        const ans = await student.find();
        res.send(ans);
    })

    // //getByID
    app.get('/students/:id',async (req,res)=>{
        const ans = await student.findOne({id:req.params.id});
        res.send(ans);
    })

    //create
    app.post('/students',async (req,res)=>{
        stu = new student({...req.body});
        const ans = await stu.save();
        res.send(ans);
    })

    //update
    app.patch('/students/:id',async (req,res)=>{
        stu = await student.findOne({id:req.params.id});
        stu.name = req.body.name;
        stu.id = req.body.id;
        stu.email = req.body.email;
        stu.mobile = req.body.mobile;
        stu.standard=req.body.standard;
        stu.class=req.body.class;
        const ans = await stu.save();
        res.send(ans);
    })

    //delete
    app.delete('/students/:id',async (req,res)=>{
        const ans = await student.deleteOne({id:req.params.id});
        res.send(ans);
    })

    //search
    app.get('/students/search/:text',async (req,res)=>{
        const ans = await student.find({name:{$regex:req.params.text}});
        res.send(ans);
    })


    app.listen(4000,()=>{
        console.log('Server started at 4000');
    });
})