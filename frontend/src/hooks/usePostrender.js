import {useState} from "react";
import {useNavigate} from "react-router-dom"
import { toast } from 'react-toastify';
function usePostrender(){
    const navigate=useNavigate();
    let[formdata,setformdata]=useState({
        title:"",
        description:"",
    });

    function inputhandler(event){
        let {name,value}=event.target;
        // console.log(name,value);
        setformdata({...formdata,[name]:value});
    }

    async function formhandler(event){
        event.preventDefault();
       try {
        let res=await fetch("http://localhost:3000/api/v1/",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                title:formdata.title,
                description:formdata.description,
            }),
        });
        let data=await res.json();
        toast.success(data.message);
        // console.log(data);
        setformdata({title:"",description:""});
        navigate("/");
       } catch (error) {
        res.status(500).json({
            success:false,
            message:error,
        })
       }
    };
    return {navigate,formdata,setformdata,inputhandler,formhandler};
}

export default usePostrender;