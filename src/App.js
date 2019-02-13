import React, { Component } from 'react';
import './App.css';
import {Switch, Route, NavLink, Link} from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <nav className="header__nav">
            <ul className="menu">
              <li className="menu__item">
                <NavLink exact to="/" className="menu__link" activeClassName="is-active">Home</NavLink>
              </li>
              <li className="menu__item">
                <NavLink to="/blog" className="menu__link" activeClassName="is-active">Blog</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        
        <main className="app__main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
