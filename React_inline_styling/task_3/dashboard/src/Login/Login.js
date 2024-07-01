import React from "react";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    AppBody: {
        flex: '1',
        padding: '10px',
        paddingLeft: '20px',
        fontFamily: '"segoe UI", sans-serif',
        margin: '10px',
        '@media (max-width: 900px)': {
            padding: '5px',
            flexDirection: 'column',
        },
    },
    formGroup: {
        '@media (max-width: 900px)': {
        width: '10%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px',
        }
    },
    button: {
        '@media (max-width: 900px)': {
        marginTop: '10px',
        cursor: 'pointer',
        }
    },
});

const Login = () => {
    return (
        <React.Fragment>
            <div className={css(styles.AppBody)}>
                <p>Login to access the full dashboard</p>
                <div className={css(styles.formGroup)}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" />
                </div>
                <div className={css(styles.formGroup)}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" />
                </div>
                <button className={css(styles.button)}>OK</button>
            </div>
        </React.Fragment>
    );
};

export default Login;
