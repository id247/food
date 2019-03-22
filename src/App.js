import React, { Component } from 'react';
import './App.css';

const API = process.env.REACT_APP_API;

class App extends Component {
  state = {
    recipes: []
  };

  componentDidMount() {
    fetch(`${API}/search?type=recipe`)
      .then(response => response.json())
      .then(json => this.setState({ recipes: json.data }));
  }

  render() {
    return (
      <div className="App">
        {this.state.recipes.map(recipe => (
          <div key={recipe.content.id}>
            <h3>{recipe.content.name}</h3>
            <p>{recipe.content.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
