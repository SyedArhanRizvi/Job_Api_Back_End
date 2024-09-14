import multer from "multer";
import { v4 as uuidv4 } from 'uuid';
import path from 'path'

const jobsPhotoStorage = multer.diskStorage({
    destination : "uploads/",
    filename : (req, file, callBack) =>{
        const uniqueString = uuidv4();
        const extName = path.extname(file.originalname);
        const filename = req.body.name + "-" + uniqueString + extName;
        callBack(null, filename);
    }
});

const uploadPhotos = multer({storage: jobsPhotoStorage});

export default uploadPhotos;