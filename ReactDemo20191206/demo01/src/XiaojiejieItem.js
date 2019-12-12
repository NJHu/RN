import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this._handleClick = this.handleClick.bind(this);

        console.warn("--constructor");
    }

    componentWillMount() {
        console.warn("--componentWillMount");

    }

    render() {
        console.warn("--render");
        return (
            <div onClick={this._handleClick}>
                {this.props.content}
                {this.props.avname}
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true;
        }
        return false;
    }

    componentWillUpdate() {
        console.warn("--componentWillUpdate");
    }

    componentDidMount() {
        console.warn("--componentDidMount");
    }

    componentDidUpdate() {
        console.warn("--componentDidUpdate");
    }


    componentWillUnmount() {
        console.warn("--componentWillUnmount");
    }


    handleClick() {
        console.info("12312");
        this.props.deleteItem(this.props.index);
    }
}

XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number,
    avname: PropTypes.string.isRequired
};

XiaojiejieItem.defaultProps = {
    avname: "xxx"
}