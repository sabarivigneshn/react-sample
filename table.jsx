import React from 'react';

class UserTable extends React.Component {
    constructor(props) {
        super(props)
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
                        <td>{this.props.data.userName}</td>
                        <td>{this.props.data.age}</td>
                        {/* <td><span onClick={this.props.actions("changed address")}> update address in parent </span></td> */}
                        {/* <td><input type="text" name="address" value={this.props.data.address} onChange={this.props.actions()} /></td> */}
                        <td><a onClick={() => this.props.actions('address updated')}>Click to Update Parent</a></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default UserTable;

