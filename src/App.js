import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Issues from './Issues/Issues';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class App extends React.Component {
  state = { 
      searchValue: "",
  }

  onSearchValueUpdate = searchValue => this.setState({ searchValue });
  
  render() { 
    console.log(this.state.searchValue);
    return ( 
      <div className="App"> 
          <Header onSearchValueChange={this.onSearchValueUpdate} />
          <Router>
              <Redirect from="/" to="repositories" />
              <Route path="/repositories" render={() => <Home value={this.state.searchValue} /> } />
              <Route path="/issues/:repoFirst/:repoSecond" component={Issues} />
          </Router>
      </div>
    );
  }
}
 
export default App;
