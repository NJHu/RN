import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Home from './Home'
import List from './List'
import Error from './Error'


function AppRouter() {
    return (
        <Router>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/list/123">list</Link></li>
            </ul>
            <Route path="/" exact component={Home}/>
            <Route path="/list/:id" component={List}/>
            <Route path="/error/" component={Error} />
        </Router>
    );
}

export default AppRouter;


