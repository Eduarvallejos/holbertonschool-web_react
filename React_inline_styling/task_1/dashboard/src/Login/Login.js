import React from "react";
import { StyleSheet, css } from 'aphrodite';
//import './Login.css';

const styles = StyleSheet.create({
    AppBody: {
        flex: '1',
        padding: '10px',
        paddingLeft: '20px',
        fontFamily: '"segoe IU", sans-serif',
        margin: '10px'
    },
});

const Login = () => {
    return (
        <React.Fragment>
            <div className={css(styles.AppBody)}>
                <p>Login to access the full dashboard</p>
                <label htmlFor="email"> Email: </label>
                <input type="email" id="email"/>
                <label htmlFor="password"> Password: </label>
                <input type="password" id="password"/>

                <button>OK </button>
            </div>
        </React.Fragment>
    );
};

export default Login;