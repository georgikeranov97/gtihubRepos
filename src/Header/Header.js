import React from 'react';
import classes from './Header.module.css'

const header = props => (
    <header>
        <img className={classes.image} src={require("../1.png")} alt="header pic" />
    
        <h1 className={classes.heading}>GITHUB REPO EXPLORER</h1>
        <p className={classes.description}>learning project, created by John Doe</p>
        <div className={classes.searchInput}>
            <i className="fas fa-search"></i>
            <input className={classes.inputStyle} type='search' placeholder='Search for github repo' />
        </div>
        
        <button className={classes.searchButton}>Search</button>
    </header>
)
 
export default header;