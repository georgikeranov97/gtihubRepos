import React from 'react';

class Issues extends React.Component {
    state = { 
        issues: []
     }

    componentDidMount() {
        // vzimame id-to this.props.match.params.repoId
        // pravim zaqvkata
        console.log(this.props.match.params.repoId);
        fetch('https://api.github.com/search/repositories?q=epam')
            .then(res => res.json())
            .then(issues => this.setState({issues}))
    }

    render() { 
        return (
            <div>
                {JSON.stringify(this.state.issues)}
            </div>
        );
    }
}
 
export default Issues;