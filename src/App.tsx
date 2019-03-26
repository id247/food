import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import createStore from './store';

const store = createStore();

const App = () => (
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

export default App;
