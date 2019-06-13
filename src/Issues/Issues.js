import React from 'react';
import classes from './Issues.module.css';

class Issues extends React.Component {
    state = { 
        issues: []
     }

    componentDidMount() {
        console.log('prop ' + this.props.match.params.repoFirst + " " + this.props.match.params.repoSecond);
        fetch(`https://api.github.com/repos/${this.props.match.params.repoFirst}/${this.props.match.params.repoSecond}/issues`)
            .then(response => response.json())
            .then(data => {
                let issuesResult = data.map((el) => {
                    return {
                        avatar: el.user.avatar_url,
                        title: el.title,
                        body: el.body,
                    }
                })
                this.setState({ issues: issuesResult })
                console.log('result = ' + this.state.issues)
            })
    }

    render() { 
        console.log("tova sa ishutata: " + this.state.issues);
        return (
            <div className={classes.issuesPage}>
                {this.state.issues.map((issue) => {
                    return (
                        <section className={classes.container}>
                            <img src={issue.avatar} alt="avatar" />
                            <p>{issue.title}</p>
                            <article>
                                {issue.body}
                            </article>
                        </section>
                    )   
                })}
            </div>
        );
    }
}
 
export default Issues;