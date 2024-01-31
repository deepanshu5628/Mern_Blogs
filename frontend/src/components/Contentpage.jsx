import useGetall from "../hooks/useGetallrender.js";
import Blogs from "./Blogs";
import "./css/Contentpage.css";
import {useEffect, useState} from "react";
import useGetallrender from "../hooks/useGetallrender.js";

function Contentpage(){
    let{allblogs,fetchblogs}=useGetallrender();
    useEffect(()=>{
        fetchblogs()
        .then(()=>console.log("successflly fetch data from backend"))
        .catch((err)=>{
            console.log(err);
            console.log("Error is fetching data from  backend");
        })
    },[]);
    return (
        <div className="Contentpage">
            {allblogs.map((blog)=>{
                return <Blogs key={blog._id} data={blog} />
            } )}
        </div>
    )
}

export default Contentpage;