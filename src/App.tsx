import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Recipes from './components/Recipes';
import Layout from './components/Layout';
import Home from './pages/Home';
import createStore from './store';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Layout>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route component={() => <div>404</div>} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </Layout>
    );
  }
}

export default App;
