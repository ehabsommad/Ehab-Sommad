import { Fragment } from "react";
import {Routes,Route,Link ,useLocation, NavLink, useNavigate} from "react-router-dom";
import "./style.css";
let NewApp = () => {
    let location = useLocation();
    let navigator= useNavigate();
    return(
    <Fragment>
        <ul>
            <li>
                <NavLink to="/first" className={(props) => props.isActive ? "active" : "inactive"}>First</NavLink>
                {/* <Link to="/first" className={location.pathname =="/first" ? "active" : "in-active"}>First</Link> */}
            </li>
            <li>
                <NavLink to="/second" className={(props) => props.isActive ? "active" : "inactive"} end>Second</NavLink>
                {/* <Link to="/second" className={location.pathname =="/second" ? "active" : "in-active"}>Second</Link> */}
            </li>
            <li>
                <NavLink to="/second/third" className={(props) => props.isActive ? "active" : "inactive"}end>Third</NavLink>
                {/* <Link to="/second/third" className={location.pathname =="/second/third" ? "active" : "in-active"}>Third</Link> */}
            </li>
            <li>
                <NavLink to="/second/third/fourth" className={(props) => props.isActive ? "active" : "inactive"} end>Fourth</NavLink>
                {/* <Link to="/second/third/fourth" className={location.pathname =="/second/third/fourth" ? "active" : "in-active"}>Fourth</Link> */}
            </li>
        </ul>
        <div>
            <button onClick={() => navigator("/First")}>First</button>
            <button onClick={() => navigator("/second/third/fourth",{replace:true})}>Fourth</button>
        </div>
        <Routes>
            <Route path="/first" element={<h4>First</h4>}/>
        </Routes>
        <Routes>
            <Route path="/second" element={<h4>Second</h4>}/>
        </Routes>
        <Routes>
            <Route path="/second/third" element={<h4>Third</h4>}/>
        </Routes>
        <Routes>
            <Route path="/second/third/fourth" element={<h4>Fourth</h4>}/>
        </Routes>
    </Fragment>
    );
}
export default NewApp;