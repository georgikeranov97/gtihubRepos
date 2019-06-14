import React from 'react';
import classes from './Issues.module.css';
import Home from '../Home/Home';

class Issues extends React.Component {
    state = { 
        issues: []
     }

    componentDidMount() {
        console.log('prop ' + this.props.match.params.repoFirst + " " + this.props.match.params.repoSecond);
        fetch(`https://api.github.com/repos/${decodeURIComponent(this.props.match.params.repoFullName)}/issues`)
            .then(response => response.json())
            .then(data => {
                let issuesResult = data.map((el) => {
                    return {
                        avatar: el.user.avatar_url,
                        title: el.title,
                        body: el.body,
                        number: '#' + el.number,
                        userName: el.user.login,
                        label: (el.labels.length > 0) ? el.labels[0].name.split(':')[1] : '',
                        labelColor: (el.labels.length > 0) ? '#' + el.labels[0].color : '',
                    }
                })
                this.setState({ issues: issuesResult })
                console.log('result = ' + this.state.issues)
            })
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render() { 
        return (
            <React.Fragment>
           
            <div className={classes.issuesPage}>
            <div className={classes.goBackContainer}>
                <button className={classes.goBack} onClick={this.goBack}>
                    <i class="fas fa-less-than"></i>
                    <span>&nbsp; GO BACK</span>
                </button>
            </div>

            
                {this.state.issues.map((issue) => {
                    return (
                        <div className={classes.container}>
                            <img src={issue.avatar} className={classes.image} alt="avatar" />
                            <article className={classes.info}>
                                <p>{issue.title}</p>
                                <p>
                                    <span>{issue.number}</span>
                                    :opened by <strong>{issue.userName}</strong> 
                                </p>
                                <div className={classes.description}>
                                    {issue.body || 'No description'}
                                </div>
                                {issue.label.length > 0 ? 
                                    <span className={classes.labelSpan} style={{color:issue.labelColor, borderColor: issue.labelColor}} >
                                        {issue.label || ''}
                                    </span>
                                    : 
                                    <div className={classes.noLabel}></div>
                                }
                            </article>     
                        </div>
                    )   
                })}
            </div>
            </React.Fragment>
        );
    }
}
 
export default Issues;