const express = require('express');
const student = require('../models/student');
const router = express.Router();
const insertStudent = async (obj) =>{
    const sahil = new student(obj);
    const result =await sahil.save();
    console.log(result);
    // retun (result);
}
// insertStudent({
//     name: "Harsh Tagra",
//     phone: 012345679999,
//     country: "IN"
// });
router.get("/students",async (req,res)=>{

    try{
        const Result =await student.find();
        // console.log(Result);
        res.status(200).send(Result);
    }
    catch(err){
        res.status(400).send(err)
    }
        
});
router.get("/students/:name",async (req,res)=>{
    const name = req.params.name;
    try{
        const Result =await student.find(name);
        // console.log(Result);
        res.status(200).send(Result);
    }
    catch(err){
        res.status(400).send(err)
    }
        
});
router.post("/students",async (req,res)=>{
    try{
        const data = await req.body;
        const Result = await insertStudent(data);
        // console.log(data);
        // .then(()=>{res.status(201).send(data)}).catch((err)=>{res.status(400).send(err)});
        res.send(data);
    } 
    catch(err){
        res.status(400).send(err);
    }

});
router.patch("/students/:id",async (req,res)=>{
    const _id = req.params.id;
    try{
        const Result =await student.findByIdAndUpdate(_id,req.body,{
            new: true
        });
        // console.log(Result);
        res.status(200).send(Result);
    }
    catch(err){
        res.status(400).send(err)
    }
        
});
router.delete("/students/:id",async (req,res)=>{
    const _id = req.params.id;
    try{
        const Result =await student.findByIdAndDelete(_id);
        // console.log(Result);
        res.status(200).send(Result);
    }
    catch(err){
        res.status(400).send(err)
    }
        
});

module.exports = router;