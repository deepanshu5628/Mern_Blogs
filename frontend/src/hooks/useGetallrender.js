import {useEffect, useState} from "react";

function useGetallrender(){
    let [allblogs,setallblogs]=useState([]);
    async function fetchblogs(){
        let res=await fetch("http://localhost:3000/api/v1",{
            method:"GET",
        });
        let data=await res.json();
        let output=data.data;
        setallblogs([...allblogs,...output]);
    }
   
    return {allblogs,setallblogs,fetchblogs};
}

export default useGetallrender;