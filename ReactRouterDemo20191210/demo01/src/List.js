import React, {Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (  <h2>List</h2> );
    }

    componentDidMount() {
        console.log(this.props.match.params);
        let tempId = this.props.match.params.id;
        this.setState({
            id: tempId
        })
    }
}

export default List;