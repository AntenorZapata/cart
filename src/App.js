import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Products from './pages/Products';
import About from './pages/About';
import './App.scss';

class App extends Component {
  render() {
    return (
      <section className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/details' component={Details} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/about' component={About} />
        </Switch>
      </section>
    );
  }
}

export default App;
