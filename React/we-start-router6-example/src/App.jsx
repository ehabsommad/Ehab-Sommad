import { Fragment } from "react";
import { Link, NavLink, Redirect, Route, Switch, useHistory, useLocation } from "react-router-dom";
import "./style.css";

let App = () => {
    let history = useHistory();
    let location = useLocation();
    return(
    <Fragment>
        <ul>
        <li>
            <Link to="/first" className={location.pathname=='/first' ? 'active' : 'in-active'} >First</Link>
            {/* <NavLink to="/first" activeClassName="active" exact>First</NavLink> */}
        </li>
        <li>
            <Link to="/second" className={location.pathname=='/second' ? 'active' : 'in-active'}  >Second</Link>
            {/* <NavLink to="/second" activeClassName="active" exact>Second</NavLink> */}
        </li>
        <li>
            <Link to="/second/third" className={location.pathname=='/second/third' ? 'active' : 'in-active'}  >Third</Link>
            {/* <NavLink to="/second/third" activeClassName="active"exact>Third</NavLink> */}
        </li>
        <li>
        <Link to="/second/third/fourth" className={location.pathname=='/second/third/fourth' ? 'active' : 'in-active'}  >Fourth</Link>
            {/* <NavLink to="/second/third/fourth" activeClassName="active" >Fourth</NavLink> */}
        </li>
        </ul>
        <div>
            <button onClick={() => history.push("/first")}>First</button>
            <button onClick={() => history.replace("/second/third/fourth")}>Fourth</button>
        </div>
        <Switch>
        <Route path="/first">
            <h1>First element </h1>
        </Route>
        <Route path="/second/third/fourth">
            <h1>Fourth element</h1>
        </Route> 
        <Route path="/second/third">
            <h1>Third element</h1>
        </Route>              
        <Route path="/second">
            <h1>Second element</h1>
        </Route>
        <Route path="/*">
            <h1>404 - Not Found</h1>
            <Redirect to = "/first" />
        </Route>


        </Switch>
    </Fragment>
    );
}
export default App;