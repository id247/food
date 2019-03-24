import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import createStore from './store';
import Recipes from './components/Recipes';
import Layout from './components/Layout';
import Recipe from './pages/Recipe';
import Home from './pages/Home';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/recipe/:recipeId" component={Recipe} />
              <Route component={() => <div>404</div>} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
