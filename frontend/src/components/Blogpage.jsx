import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";
import Comment from "./Comment";
import useGetallrender from "../hooks/useGetallrender";
import useBlog from "../hooks/useBlog";
function Blogpage(){
    const navigate=useNavigate();
    const location=useLocation();
    let data=location.state;
    let id=data._id;
    let {postindetail}=useBlog(id);
    // console.log(id);
    let[comment,setsomment]=useState("");
    async function commenthandler(){
        console.log("comonhadnler fuxn claeed");
        let res=await fetch(`http://localhost:3000/api/v1/${id}/comment`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                frontendcmt:comment,
            })
        });
        let da=await res.json();
        let output=data.da;
        setsomment("");
        postindetail(id);
    }
    return (
        <div className="Blogpage">
            <h2><b>{data.title}</b></h2>
            <p>{data.description}</p>
            <hr />
            <h3>Add Commments:</h3>
            <label htmlFor="commetn">Comment's</label>
            <input type="text" placeholder="comment...." id="commetn" onChange={(e)=>setsomment(e.target.value)} value={comment}/>
            <button onClick={()=>commenthandler(data._id)}>Submit</button>
            <br />
            <h3>All Commments:</h3>
            {data.comments.map((cmt)=><Comment key={cmt._id} data={cmt}/>)}

        </div>
    )
}

export default Blogpage;