import React, {Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (  <h2>List Page{this.state.id}</h2> );
    }

    //-关键代码---------start
    componentDidMount() {
        console.log(this.props.match)
        let tempId = this.props.match.params.id
        this.setState({
            id: tempId
        });
    }

    //-关键艾玛---------end
}

export default List;