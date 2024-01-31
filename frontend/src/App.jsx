import Contentpage from "./components/Contentpage";
import Routerround from "./components/Routerround";
import Createpage from "./components/Createpage";
import Navbar from "./components/Navbar";
import Blogpage from "./components/Blogpage";
import './App.css'
import {Routes,Route} from "react-router-dom";
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Routerround/>}>
        <Route index element={<Contentpage/>}></Route>
        <Route path="/create" element={<Createpage/>}></Route>
        <Route path="/Blog" element={<Blogpage/>}></Route>
        </Route>
    </Routes>
    
    </>
  )
}

export default App
