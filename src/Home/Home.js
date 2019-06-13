import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import classes from './Home.module.css';
class Home extends Component {
    state = {
        repos: [],
        oldValue: '',
    }

    componentDidUpdate() {
        console.log('didUpdate', this.props.value);
        if(this.state.oldValue !== this.props.value) {
            this.setState({ oldValue: this.props.value });
            fetch(`https://api.github.com/search/repositories?q=${this.props.value}`)
            .then(response => response.json())
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
                            <button className={classes.infoButton}>
                                <i className="fas fa-greater-than"></i>
                            </button>
                        </div>
                 </div>
                    )
                })
                this.setState({ repos })
                console.log('repos', this.state.repos);
                // console.log(this.state.repos.length)
            })
        }
    }

    render() { 
        return ( 
           
            <div className={classes.container}>
                 <p className={classes.countRepos}>{this.state.repos.length} Results found for <strong>"Search query"</strong></p>
                <div>{this.state.repos}</div>
            </div>
         );
    }
}
 
export default Home;