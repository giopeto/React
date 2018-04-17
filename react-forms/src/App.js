import React, { Component } from 'react';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            message: '',
            fullName: '',
            gender: ''
        };
    }

    handleChange = (event) => {
        console.log(event);
        this.setState({
            //message: event.target.value //works only for message input works for all input
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="message">message</label>
                    <input
                        type="text"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange} />
                    <br />
                    <label htmlFor="fullName">fullName</label>
                    <input
                        type="text"
                        name="fullName"
                        value={this.state.fullName}
                        onChange={this.handleChange} />
                    <br />
                    <label htmlFor="male">male</label>
                   <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange} />
                    <br />
                    <label htmlFor="female">female</label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange} />
                    <br />
                </form>

                <pre>
                    <code>
                        <p>Message: {this.state.message}</p>
                        <p>Full Name: {this.state.fullName}</p>
                        <p>Gender: {this.state.gender}</p>
                    </code>
                </pre>

            </div>
        );
    };

};

export default App;