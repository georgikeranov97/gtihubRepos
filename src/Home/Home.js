import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import classes from './Home.module.css';
class Home extends Component {
    constructor() {
        super();
        this.state = {
            repos: [],
        }
    }

    componentDidMount() {
        // fetch('https://api.github.com/repositories?since=1')
        fetch('https://api.github.com/search/repositories?q=100')
        .then(response => {
            return response.json();
        })
        .then(data => {
            let repos = data.items.map((elem) => {
                return (
                    <div className={classes.repoBox}>
                        <div key={elem.results}></div>
                        <div className={classes.rectangle}></div>
                        <p className={classes.name}>{elem.name}</p>
                        <p>{elem.full_name}</p>
                        <p>{elem.description || "No description"}</p>
                        <Router>
                             <Link to="{elem.url}">{elem.url}</Link>
                        </Router>
                       <div className={classes.greaterThan}>
                            <i class="fas fa-greater-than"></i>
                       </div>
                    </div>
                   
                )
            })
            this.setState({ repos });
            console.log('state', this.state.repos);
        })
    }

    render() { 
        return ( 
            <div className={classes.container}>
                <div>{this.state.repos}</div>
            </div>
         );
    }
}
 
export default Home;