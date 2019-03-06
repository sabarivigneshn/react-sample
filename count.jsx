import React from 'react';

class Count extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('[[[[[[[[[[', this.props.data.count)
        return (
            <div>
               counterData: {this.props.data.count}
            </div>            
        );
    }
}

export default Count;

