import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

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
                let modifiedResult = data.items.map(function(el) {
                    return {
                        name: el.name,
                        fullName: el.full_name,
                        description: el.description,
                        url: el.url,
                        issuesUrl: el.issues_url.split('{')[0],
                    }
                })
                console.log(modifiedResult);
                this.setState({ repos : modifiedResult })
                console.log('repos', this.state.repos);
            })
        }
    }

    render() { 
        return ( 
            <div className={classes.container}>
                 <p className={classes.countRepos}>
                    {this.state.repos.length} Results found for <strong>"Search query"</strong>
                </p>
                <div>{this.state.repos.map((elem) => {
                    return (
                        <div className={classes.repoBox}>
                            <div key={elem.results}></div>
                            <div className={classes.rectangle}></div>
                            <p className={classes.name}>{elem.name}</p>
                            <p>{elem.fullName}</p>
                            <p>{elem.description || "No description"}</p>
                            <Router>
                                <Link to="{elem.url}">{elem.url}</Link>
                            </Router>
                            <div className={classes.greaterThan}>
                            <Link to={`/issues/${encodeURIComponent(elem.fullName)}`}>
                                <i className="fas fa-greater-than"></i>
                            </Link>
                        </div>
                        </div>
                    )
                })}
                </div>
            </div>
         );
    }
}
 
export default Home;

