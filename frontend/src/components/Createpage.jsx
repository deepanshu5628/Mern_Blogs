import usePostrender from "../hooks/usePostrender";
import "./css/Createpage.css";
// import {useState} from "react";
// import {useNavigate} from "react-router-dom"
// import { toast } from 'react-toastify';
function Createpage(){
    let{formdata,setformdata,inputhandler,formhandler}=usePostrender();
    return <div className="Createpage">
        <h1>Create New Post:</h1>
        <form onSubmit={formhandler}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" placeholder="enter title.. " name="title" value={formdata.title} onChange={inputhandler} />
            <br />
            <br />
            <label htmlFor="description">Description:  </label>
            <textarea name="description" id="description" cols="30" rows="7" value={formdata.description} onChange={inputhandler}></textarea>
            <br />
            <button >Create</button>
            </form>
    </div>
}

export default Createpage;