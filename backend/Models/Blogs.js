const mongoose=require("mongoose");
const blogsSchmea=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    like:{
        type:Boolean,
        default:false,
        required:true,
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment",
    }],  
});

let blogs=mongoose.model("blogs",blogsSchmea);
module.exports =blogs;