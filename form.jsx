import React from 'react';
import ReactDOM from 'react-dom';
import UserTable from "./table.jsx";
import UserDetails from "./userDetails.jsx";
import Count from "./count.jsx";
import axios from 'axios';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userName: '', age: '', renderChild: false, address: 'default address', count: 0, userData: []};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.updateCount = this.updateCount.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value
        this.setState({
              [name]: value,
        });
        
    }

    handleSubmit(event) {
        alert('submitted data: ' + this.state.userName)
        event.preventDefault();
    }

    handleAddressChange(childData) {
        this.setState({
            address: childData
        })
    }

    updateCount() {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
        if (this.state.count != nextProps.count) {
            this.setState({
                count: nextProps.count
            })
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        if (this.state === nextState) {
            return false;
        }
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    mount() {
        // ReactDOM.render(<UserTable data={this.state} actions={this.handleAddressChange} id="remove"/>, document.getElementById('remove'))
        ReactDOM.render(<Count data={this.state} />, document.getElementById('remove'))
    }
    unmount() {
        console.log('unmoun', ReactDOM)
        ReactDOM.unmountComponentAtNode(document.getElementById('remove'));
    }

    render() {
        console.log('render method')
        return (
            <div>
                <h3>{this.state.address}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
                    </label><br/>
                    <label>
                        Age: 
                        <input type="text" name="age" value={this.state.age} onChange={this.handleChange} />
                    </label><br/>
                    <span>{this.state.address}</span><br/>
                    <input type="submit" value="Submit" />
                    <div id ="remove"></div>
                    <button onClick={this.updateCount}>{this.state.count}</button><br/>
                    {/* <span id="remove">Element to be removed unmount</span><br/> */}
                    <button onClick={this.mount.bind(this)}> mount</button><br/>
                    <button onClick={this.unmount.bind(this)}> Unmount</button><br/>
                    <UserTable data={this.state} actions={this.handleAddressChange} />
                    <UserDetails data={this.state} />
                    
                </form>
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount')
        // fetch('http://localhost:3000/api')
        //     .then(function(response) {
        //         return response.json();
        //     }).then(function(data) {
        //         console.log('-dataaaaaaaaaaaaaa', data);  
        //     })

        axios.get('http://localhost:3000/api')
        .then(json => {
            console.log(json)
            this.setState({userData: json.data})
            console.log('API respnoseeeeeeeeeeeeee', this.state.userData)
        })
    }

    

    
    
}

                // You parse the data into a useable format using `.json()`
export default UserForm;