import express from "express"
import uploadPhotos from "../Middleware/jobPhotoMidd.js";
import { uploadsJobs, getAllJobs, ubdateJobs } from "../Controllers/userController.js";
const UserRoutes = express.Router();

UserRoutes.get("/", (req, res) =>{
    res.send("Hello Meer Sahab")
});

UserRoutes.post("/uploadJobs", uploadPhotos.single("photo"), uploadsJobs);
UserRoutes.get("/findAllJobs", getAllJobs);
UserRoutes.put("/ubdateJob", ubdateJobs);

export default UserRoutes;