import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group'


export default class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        };
        this._toToggole = this.toToggole.bind(this);
    }

    render() {
        return (
            <div>
                <div className={this.state.isShow ? 'show' : 'hide'}>BOSS级人物-孙悟空</div>
                <div>
                    <button onClick={this._toToggole}>召唤Boss</button>
                </div>
            </div>
        );
    }

    toToggole() {
        this.setState((state) => {
            return {
                isShow: !state.isShow
            }
        });
    }
}