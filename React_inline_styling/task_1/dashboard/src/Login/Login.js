import React from "react";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    AppBody: {
        flex: '1',
        padding: '10px',
        paddingLeft: '20px',
        fontFamily: '"Segoe UI", sans-serif',
        margin: '10px',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
    },
    input: {
        display: 'block',
        width: '10%',
        padding: '8px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        padding: '10px 15px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    }
});

const Login = () => {
    return (
        <div className={css(styles.AppBody)}>
            <p>Login to access the full dashboard</p>
            <div className={css(styles.formGroup)}>
                <label htmlFor="email" className={css(styles.label)}>Email:</label>
                <input type="email" id="email" className={css(styles.input)} />
            </div>
            <div className={css(styles.formGroup)}>
                <label htmlFor="password" className={css(styles.label)}>Password:</label>
                <input type="password" id="password" className={css(styles.input)} />
            </div>
            <button className={css(styles.button)}>OK</button>
        </div>
    );
};

export default Login;
