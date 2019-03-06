import React from 'react';

class UserTable extends React.Component {
    constructor(props) {
        super(props)
        console.log('-----props', this.props)
    }

    render() {
        console.log('dds', this.props)
        return (
            <table>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.userName}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default UserTable;

