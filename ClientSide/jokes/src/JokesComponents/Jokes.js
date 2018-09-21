import React, { Component } from 'react';
import axios from 'axios';


class Jokes extends Component {
    state = {
        jokes: []
    };


    logOutHandler = e => {
        localStorage.removeItem('jwt');
        this.props.history.push('/signin');
      }


    render() {
      return (
        <div className="JokesContainer">
         <div class="logout-btn">
           <button onClick={this.logOutHandler}>Logout</button>
         </div>
         <div className="jokes-list">
            {this.state.jokes.map(joke => (
                <li key={ joke.id }>
                <p>Type: { joke.type }</p>
                <p>Setup: { joke.setup }</p>
                <p>Punchline: { joke.punchline }</p>
                </li>
            ))}
         </div>
        </div>
      );
    }
   
    componentDidMount() {
        const token = localStorage.getItem('jwt');
        const reqOptions = {
            headers: {
                Authorization: token
            }
        };
        axios
          .get('http://localhost:3300/api/jokes', reqOptions)
          .then(res => {
              this.setState({ jokes: res.data });
          })
          .catch(err => {
              console.error('Axios Error:', err);
              this.props.history.push('/signin');
           
          });
        }

  }
  
  export default Jokes;
  
  