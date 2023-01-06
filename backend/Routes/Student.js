const Student = require('../models/Students')

const router = require("express").Router();

// GET ALL STUDENTS
router.get('/', async (req, res) => {
    try{
        const allStudents = await Student.find();
        res.status(200).send(allStudents);
    }catch(err){
        res.status(400).send("Get student error")
    }
})


// ADD STUDENT
router.post('/', async (req, res)=>{
    const newStudent = new Student({
        name: req.body.name,
        rollNum: req.body.rollNum
    })

    try{
        const savedStd = await newStudent.save();
        res.status(201).send(savedStd);
    }catch(err){
        // res.status(400).send("Add student error!!!!!!!")
        res.status(400).send(err)
    }
})


module.exports = router;