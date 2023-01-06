const Attendance = require('../models/Attendance')

const router = require("express").Router();

// ADD CHECK IN TIME 
router.post('/', async (req, res)=>{
    const newAtd = new Attendance({
        rollnum: req.body.rollnum,
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut
    })

    try{
        const savedDate = await newAtd.save();
        res.status(201).send(savedDate);
    }catch(err){
        res.status(400).send(err)
    }
})


// ADD CHECK OUT TIME         { BY UPDATING THE PREVIOUS DATA}
router.put('/', async (req, res)=>{
    try{
        const findData = await Attendance.find({rollnum: req.body.rollnum});
        const len = findData.length;
        const lastId = (findData[len - 1]._id);
        const updateLast = await Attendance.findByIdAndUpdate(lastId, {rollnum: req.body.rollnum})
        res.status(200).send(updateLast);
    }catch(err){
        // res.status(400).send("Add Date error!!!!!!!")
        res.status(400).send(err)
    }
})

// GET LATEST DATA
router.get('/', async(req, res) => {
    try{
        const findData = await Attendance.find({rollnum: req.body.rollnum});
        const len = findData.length;
        res.status(200).send(findData[len - 1]);
    }catch(err){
        // res.status(400).send("Add Date error!!!!!!!")
        res.status(400).send(err)
    }
})


// GET ALL ATTENDANCE BY DATE
router.get('/date', async(req, res) => {
    try{
        // const findData = await Attendance.find((e) => e.createdAt.toDateString() == req.body.curDate);
        const findData = await Attendance.find({createdAt: req.body.curDate});
        // const len = findData.length;
        res.status(200).send(findData);
        // res.status(200).send(findData[len - 1].createdAt.toDateString());
    }catch(err){
        res.status(400).send("Add Date error!!!!!!!")
    }
})


module.exports = router