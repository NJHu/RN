import React, {Component} from 'react';
import PropTypes from 'prop-types'


export default class XiaojiejieItem extends Component { //cc

    static propTypes = {
        content: PropTypes.string,
        deleteItem: PropTypes.func,
        index: PropTypes.number
    };

    static defaultProps = {
        content: "123123"
    };

    constructor(props) {
        super(props);
        this._handleClick = this.handleClick.bind(this);
    };


    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }

    }

    render() {
        return (
            <div onClick={this._handleClick}>小姐姐{this.props.content}</div>
        );
    };


    handleClick() {
        console.log('撩拨了小姐姐');
        console.log(this.props.index);
        this.props.deleteItem(this.props.index)
    };
}
