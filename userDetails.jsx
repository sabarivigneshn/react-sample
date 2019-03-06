import React from 'react';
import TableRow from './lists.jsx'
class UserDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('deyil', this.props.data.userData)
        const tableData = this.props.data.userData;
        return (
            <div>
                <h1>UserData List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((user, i) => {
                                return (
                                    <TableRow data = {user}                                   
                                    />
                                )
                            })
                        }
                        {console.log('tddddddddddd', tableData[0])}
                    </tbody>
                </table>
               
            </div>
        );
    }
}

export default UserDetails;

