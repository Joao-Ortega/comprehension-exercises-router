import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import StrictAccess from './StrictAccess';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        username: 'joao',
        password: '12345',
      }
    }
  }
  render() {
    const { user: { username, password } } = this.state;
    return (
      <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
      <Link to="/strictaccess">Strict Access</Link>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/users/:id" 
        render={ (props) => <Users {...props} greetingsMessage="Good Morning" user={ this.state.user } /> } />
        <Route path="/about" component={ About } />
        <Route path="/strictaccess" render={ (props) => <StrictAccess {...props} username={ username } /> } />
        <Route path="/">
          { (password === '1234') ? <Redirect to="/strictaccess" /> : alert('Access Denied')}
        </Route>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
