const express = require('express');
const app = express();
app.use(express.json());


const dotenv = require('dotenv');
dotenv.config();


// const cors = require('cors');
// app.use(cors);


const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Connection Successfull"))
.catch((err) => console.log("Mongo not connected" + err));



const StudentRoute = require("./Routes/Student")
const AttendanceRoute = require("./Routes/Attendance")
app.use('/api/student', StudentRoute)
app.use('/api/attendance', AttendanceRoute)



app.listen(8000, ()=>{
    console.log("Server is run at port 8000");
})