import { useNavigate } from "react-router";
import "./css/Navbar.css";
function Navbar(){
    const navigate=useNavigate();
    return (
        <div className="Navbar">
            <div id="logoheading">
                <p>logo</p>
            </div>
            <div id="logoheading" onClick={()=>navigate("/")}>
                <h3><b>Twitter</b></h3>
            </div>
            <div>
                <button onClick={()=>navigate("/create")}>Create Post</button>
            </div>
        </div>
    )
}

export default Navbar;