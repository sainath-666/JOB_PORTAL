import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["student", "recruiter"],
        required: true,
    },
    profile: {
        bio: {type: String},
        skills: {type: [String]},
        resume: {type: String},//link to resume
        resumeOriginalName: {type: String},
        company: {type: mongoose.Schema.Types.ObjectId, ref: "Company"},
        profilePhoto: {type: String,default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"},
    },
}, {timestamps: true});

export const User = mongoose.model("User", userSchema);
