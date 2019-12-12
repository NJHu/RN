import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {cid: 123, title: '技术胖的个人博客-1'},
                {cid: 456, title: '技术胖的个人博客-2'},
                {cid: 789, title: '技术胖的个人博客-3'},
            ]
        }
    }

    render() {
        return (
            <div>
                {/*<Redirect to="/error/"/>*/}
                <h2>Home</h2>
                <ul>
                    {this.state.list.map((item, index) => {
                        return (
                            <li key={index + item}><Link to={"/list/" + item.cid}>{item.title} + {item.cid}</Link></li>
                        );
                    })}
                    <li onClick={() => {
                        this.props.history.push('/error/')
                    }}>Go Home
                    </li>
                </ul>
            </div>
        );
    }

}

export default Home;