import { FcLike, FcUndo } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

import "./css/Blogs.css";
import useBlog from "../hooks/useBlog";
function Blogs ({data}){
    let {isliked,setisliked,likebtnhandler,postindetail}=useBlog(data);
    return (
        <div className="Blogs">
          <div>
            <h3><b>{data.title}</b></h3>
            <p>{data.description}</p>
          </div>
          <div className="btndiv">
            <div className="likebtn" onClick={()=>likebtnhandler(data._id)}>
                {isliked? (<FcLike />):(<FaRegHeart />)}
            </div>
            <div className="cmtbtn">
            <FaRegComment />
            </div>
          </div>
          <button onClick={()=>postindetail(data._id)}>See Blog</button>
        </div>
    )
}

export default Blogs;