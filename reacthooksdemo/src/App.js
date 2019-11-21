import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import List from './List'
import Home from './Home'

function App() {
    const [count, setCount] = useState(0);

    //---关键代码---------start-------
    useEffect(() => {
        console.log(`useEffect=>You clicked ${count} times`);
        return () => {
            console.log('====================')
        }
    }, [count])
    //---关键代码---------end-------

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>CLICK
            </button>
            <h1>11</h1>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route path="/" exact component={Home}/>
                <Route path="/list/" component={List}/>
            </Router>
        </div>
    )
}

export default App;