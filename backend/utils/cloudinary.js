import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,//cloud name
    api_key:process.env.API_KEY,//APIkey
    api_secret:process.env.API_SECRET // secret key
});
export default cloudinary;

