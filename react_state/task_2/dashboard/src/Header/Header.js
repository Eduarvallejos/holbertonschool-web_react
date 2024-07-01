import React, { Component } from "react";
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

const styles = StyleSheet.create({
    AppHeader: {
        borderBottom: '3px solid red',
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        '@media (max-width: 900px)': {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        },
    },
    AppLogo: {
        width: '200px',
        height: '200px',
        verticalAlign: 'middle',
        display: 'inline-block',
        '@media (max-width: 900px)': {
            marginBottom: '10px',
        },
    },
    h1: {
        verticalAlign: 'middle',
        display: "inline-block",
        fontSize: '2.5em',
        marginLeft: '5px',
        color: 'red',
        fontFamily: 'Arial, Helvetica, sans-serif',
        '@media (max-width: 900px)': {
            fontSize: '2em',
            marginTop: '10px',
        },
    },
    logoutSection: {
        fontSize: '1.2em',
        marginLeft: '10px',
        cursor: 'pointer',
        textDecoration: 'underline',
        '@media (max-width: 900px)': {
            marginLeft: '0',
            marginTop: '10px',
        },
    },
});

class Header extends Component {
    static contextType = AppContext;

    render() {
        const { user, logOut } = this.context;
        const isLoggedIn = user.isLoggedIn;

        return (
            <header className={css(styles.AppHeader)}>
                <img src={logo} className={css(styles.AppLogo)} alt="logo" />
                <h1 className={css(styles.h1)}>School dashboard</h1>
                {isLoggedIn && (
                    <div id='logoutSection' className={css(styles.logoutSection)} onClick={logOut}>
                        "Welcome {user.email} (logout)"
                    </div>
                )}
            </header>
        );
    }
}

export default Header;
