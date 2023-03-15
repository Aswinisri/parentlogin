import express from "express";
import subject from "./subject.js";
import attendance from "./attendance.js";
import homework from "./homework.js";
import profile from "./profile.js";
import teachers from "./teachers.js";
import library from "./library.js";
import timetable from "./timetable.js";
import exams from "./exams.js";
import leave from "./leave.js";
import remarks from "./remarks.js";
import meeting from "./meeting.js";
import gallery from "./gallery.js";
import fees from "./fees.js";
import sports from "./sports.js";
import complaint from "./complaint.js";
import event from "./event.js";
import profile from "./profile.js";
import alert from "./alert.js";
const app=express();
app.use(express.json());
app.use('/subject',subject);
app.use('/attendance',attendance);
app.use('/homework',homework);
app.use('/profile',profile);
app.use('/teachers',teachers);
app.use('/library',library);
app.use('/timetable',timetable);
app.use('/exams',exams);
app.use('/leave',leave);
app.use('/remarks',remarks);
app.use('/meeting',meeting);
app.use('/gallery',gallery);
app.use('/fees',fees);
app.use('/sports',sports);
app.use('/complaint',complaint);
app.use('/event',event);
app.use('/profile',profile);
app.use('/alert',alert);
 
const port=5000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
});
