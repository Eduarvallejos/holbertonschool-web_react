import React from "react";
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    AppHeader: {
        borderBottom: '3px solid red'
    },
    AppLogo: {
        width: '200px',
        height: '200px',
        verticalAlign: 'middle',
        display: 'inline-block',
    },
    h1: {
        verticalAlign: 'middle',
        display: "inline-block",
        fontSize: '2.5em',
        marginLeft: '5px',
        color: 'red',
        fontFamily: 'Arial, Helvetica, sans-serif'
    },
});
const Header = () => {
    return (
        <header className={css(styles.AppHeader)}>
            <img src={logo} className={css(styles.AppLogo)} alt="logo" />
            <h1 className={css(styles.h1)}>School dashboard</h1>
        </header>
    );
};
export default Header;