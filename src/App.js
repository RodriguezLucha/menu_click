import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

class Cats extends Component {
  render(){
    return (
      <div className="cats">
        Cats
      </div>
    );
  } 
}
class Dogs extends Component {
  render(){
    return (
      <div className="dogs">
        Dogs
      </div>
    );
  } 
}
class Footer extends Component {
  render(){
    return (
      <div className="footer">
        Footer
      </div>
    );
  } 
}

class Menu extends Component {

  constructor(props){
    super(props);

    this.state = {
      shown: false
    }
  }

  toggleMenu() {
    this.setState({ shown: !this.state.shown });
  }

  clickedMenuBox(e) {
    e.stopPropagation();
  }

  getMenu() {
    if(!this.state.shown){
      return;
    }

    return (
      <div className="menu_box" onClick={(e)=>this.clickedMenuBox(e)}>
        <ul>
          <li><Link to="/home" onClick={() => this.toggleMenu()} >Home</Link></li>
          <li><Link to="/dogs">Dogs</Link></li>
          <li><Link to="/cats">Cats</Link></li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="menu">
        <div className="burger" onClick={() => this.toggleMenu()}>
          <i className="fas fa-bars"></i>
          {this.getMenu()}
        </div>
      </div>
    )
  }
}



export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter : 0
    }
  }

  appClicked(e) {
    console.log('target:', e.target);
    console.log('currentTarget:', e.currentTarget);
    
  }

  render() {
    return (
      <div className="app" onClick={(e) => this.appClicked(e)}>
        <Router>
            <Menu/>
            <Switch>
              <Route path="/dogs">
                <Dogs/>
              </Route>
              <Route path="/cats">
                <Cats/>
              </Route>
            </Switch>
            <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
