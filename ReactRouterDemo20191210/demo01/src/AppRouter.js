import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import List from './List'
import Home from './Home'
import Error from './Error'


export default function AppRouter() {
    return (
        <div>
            {/*<Link to="/">123213</Link>*/}
            <Router>
                <Route path='/' exact component={Home}></Route>
                <Route path='/list/:id' exact component={List}></Route>
                <Route path='/error/' exact component={Error}></Route>
            </Router>
        </div>

    );
}