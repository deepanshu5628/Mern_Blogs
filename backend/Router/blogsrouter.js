const exporess=require("express");
const mongoose=require("mongoose");
const router=exporess.Router();
const wrapasync=require("../errorhandler/wrapasync");
let blogs=require("../Models/Blogs");

// get a paritular post 
router.get("/:id",wrapasync(async(req,res)=>{
    let {id}=req.params;
    let particularpost=await blogs.findById(id).populate("comments");    
    res.status(200).json({
        success:true,
        data:particularpost,
        message:"data",
    })
}));
// get all posts 
router.get("/",wrapasync(async(req,res)=>{
    // console.log("request recived in getall blogs ");
    let alldata=await blogs.find();
    res.status(200).json({
        success:true,
        message:"succeffllly sent the data",
        data:alldata,
    })
}));
// post a post 
router.post("/", wrapasync(async(req,res)=>{
    let {title,description}=req.body;
    let newpost=await blogs.create({
        title,description
    });
    res.status(200).json({
        success:true,
        message:"Blog Posted!",
        data:newpost,
    })
}));

// delte a post 
router.delete("/:id",wrapasync(async(req,res,next)=>{
    let {id}=req.params;
    console.log(id);
    let delid=await blogs.findByIdAndDelete(id);
    res.status(200).json({
        success:true,
        message:"successfylly dleted",
        data:delid,
    });
}))

// like or unlike a post 
router.post("/likeunlike/:id",wrapasync(async(req,res)=>{
    let {id}=req.params;
    let {like}=req.body;
       let updateddata= await blogs.findByIdAndUpdate(id,{
            like:!like,
        });
        res.status(200).json({
            success:true,
            data:updateddata,
         })    
}))


// commnet on a post 
let commentmodel=require("../Models/Comments");

router.post("/:id/comment",async (req,res)=>{
    let {id}=req.params;
    let{frontendcmt}=req.body;
    let addedcomment=await commentmodel.create({
        cmt:frontendcmt,
    });
    // console.log(addedcomment._id);
    let posttoedit=await blogs.findByIdAndUpdate(id,{
        $push:{comments:addedcomment._id}
    },{new:true});
    res.status(200).json({
        success :true,
        message:"Comment added",
        data:posttoedit,
    })
});

module.exports=router;