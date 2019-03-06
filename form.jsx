import React from 'react';
import UserTable from "./table.jsx";

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userName: '', age: '', renderChild: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateChild = false;

    }

    handleChange(event) {
        // console.log('-------------', event.target.name)
        const name = event.target.name;
        const value = event.target.value
        this.setState({
              [name]: value,
              renderChild: true
        });
        this.updateChild = true;
        
    }

    handleSubmit(event) {
        // console.log('-------------', this.state)
        alert('ssetStateubmitted data: ' + this.state.userName)
        formChild1(this.state)
        event.preventDefault();
    }

    formChild1(params) {
        this.setState({
          data : params
        })
    }
   
    render() {
        console.log('ssssssssssss', this.updateChild)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Name:
                    <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
                    </label>
                    <label>
                    Age:
                    <input type="text" name="age" value={this.state.age} onChange={this.handleChange} />
                    </label>
                    
                    <input type="submit" value="Submit" />
                </form>
                <UserTable data={this.updateChild ? this.state : []}/>
            </div>
        );
    }
    
}

export default UserForm;