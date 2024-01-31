import { useState } from "react";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";


function useBlog(data){
  const navigate=useNavigate();

    let [isliked,setisliked]=useState(data.like);
    async function likebtnhandler(id){
      setisliked((l)=>!l);
      let res=await fetch(`http://localhost:3000/api/v1/likeunlike/${id}`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json", 
        },
        body:JSON.stringify({
          like:isliked,
        })
      });
      let data=await res.json();
      // console.log(data);
      // toast.success("liked");
    }

    async function postindetail(id){
      console.log(id);
      let res=await fetch(`http://localhost:3000/api/v1/${id}`,{
        method:"GET",
      });
      let data=await res.json();
      let postdata=data.data;
      navigate("/blog",{state:postdata});
    }
    
    return {isliked,setisliked,likebtnhandler,postindetail};
}

export default useBlog;