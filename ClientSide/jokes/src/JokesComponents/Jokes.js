import React, { Component } from 'react';
import axios from 'axios';


class Jokes extends Component {
    state = {
        jokes: []
    };


    render() {
      return (
        <div className="JokesContainer">
        
              {this.state.jokes.map(joke => (
                  <li key={ joke.id }>
                  <p>Type: { joke.type }</p>
                  <p>Setup: { joke.setup }</p>
                  <p>Punchline: { joke.punchline }</p>
                  </li>
              ))}
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
           
          });
        }
  }
  
  export default Jokes;
  
  