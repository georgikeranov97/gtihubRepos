import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  state = { 
      searchValue: ""
  }

  onSearchValueUpdate = searchValue => this.setState({ searchValue });
  
  render() { 
    console.log(this.state.searchValue);
    return ( 
      <div className="App"> 
          <Header onSearchValueChange={this.onSearchValueUpdate} />
          <Router>
              <Route path="/repositories" render={() => <Home value={this.state.searchValue} /> } />
          </Router>
      </div>
    );
  }
}
 
export default App;

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//             <Header />
//             <Home />
//         </div>
//     </BrowserRouter>
      
    
//   );
// }

// export default App;