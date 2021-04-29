import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Cart from './pages/Cart';
import './App.scss';

class App extends Component {
  render() {
    return (
      <section className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/details' component={Details} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </section>
    );
  }
}

export default App;
