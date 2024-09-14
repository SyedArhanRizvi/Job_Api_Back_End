import { JobModel } from "../Models/Job.Schema.js";
import path from "path"
export const uploadsJobs = async (req, res) => {
    try {
    const {name, details, skills, salary} = req.body;

    const photo = req.file.path;
    
    const isDataValid =  await JobModel.create({name, details, skills, salary, photo});
       return res.status(201).json({message : "data saved" , success : true ,  isDataValid});  

    } catch (error) {
        console.log("There is some issue in you provided data plz once check ", error);
        
    }

}

export const getAllJobs = async (req, res) =>{
    const allJobs = await JobModel.find();
    const jobWithImgs = allJobs.map((job) => {
        return {
            ...job._doc,
            photo : `${req.protocol}://${req.get("host")}/public/${path.basename(job.photo)}`
        }
    })
    return res.json(jobWithImgs);
}

export const ubdateJobs = async (req, res) => {
    const {name, details, skills, salary, id} = req.body;
    console.log(id);
    
}