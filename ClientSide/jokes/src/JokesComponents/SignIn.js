import React, { Component } from 'react';
import axios from 'axios';





class SignIn extends Component {
  state = {
      username: '',
      password: '' 
  };


  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <div>
        <label>Username</label>
        <input name="username" value={this.state.username} onChange={this.handleChange} type='text' />
      </div>
      <div>
          <label>Password</label>
          <input name="password" value={this.state.password} onChange={this.handleChange} type='password' />
      </div>
      <div>
          <button type="Submit">Sign In</button>
      </div>
    </form>   
    );
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({ [name]: value})
  };


  handleSubmit = e => {
      e.preventDefault();

      axios
       .post('http://localhost:3300/api/login', this.state)
       .then(res => {
           console.log(res.data);
           localStorage.setItem('jwt', res.data.token);
           this.props.history.push('/jokes');
       })
       .catch(err => {
           console.error("Axios Error:", err);
       });
    };

  
}

export default SignIn;
