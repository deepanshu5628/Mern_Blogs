const mongoose=require("mongoose");

async function connectdb(){
    await mongoose.connect("mongodb://127.0.0.1:27017/blogsapp");
};

let startdb=()=>{connectdb()
.then(()=>console.log("connected to db successfully"))
.catch((err)=>console.log(err));
}
module.exports=startdb;