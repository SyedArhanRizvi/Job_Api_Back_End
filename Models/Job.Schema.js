import mongoose from "mongoose";

const JobSchema = mongoose.Schema({
    name : {
        type : String,
    },
    details : {
        type : String,
         
    },
    salary : {
        type : Number,
         
    },
    skills : {
        type : String,
        
    },
    photo : {
        type : String,
        required : true
    }
}, {timeStamps:true});

export const JobModel = mongoose.model("JobModel", JobSchema);