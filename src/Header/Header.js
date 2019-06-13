import React from 'react';
import classes from './Header.module.css';

class Header extends React.Component {
    state = { 
        searchValue: '',
     }
    render() { 
        return ( 
            <section>
                <img className={classes.image} src={require("../Ellipse.png")} alt="header pic" />
    
                <h1 className={classes.heading}>GITHUB REPO EXPLORER</h1>
                <p className={classes.description}>learning project, created by John Doe</p>
                <div className={classes.searchInput}>
                    <i className="fas fa-search"></i>
                    <input className={classes.inputStyle} type='search' placeholder='Search for github repo' 
                        onChange={event => this.setState({ searchValue: event.target.value })}
                    />
                </div>
                
                <button className={classes.searchButton} onClick={() => this.props.onSearchValueChange(this.state.searchValue)}>Search</button>
            </section>
         );
    }
}
 
export default Header;