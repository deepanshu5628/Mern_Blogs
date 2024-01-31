const mongoose=require("mongoose");
const commentSchema=new mongoose.Schema({
    cmt:{
        type:String,
    },
});

const comment=mongoose.model("comment",commentSchema);
module.exports=comment;