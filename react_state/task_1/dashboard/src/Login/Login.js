import React, { Component } from "react";
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
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px',
    },
    button: {
        marginTop: '10px',
        cursor: 'pointer',
    },
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            email: '',
            password: '',
            enableSubmit: false,
        };

        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleLoginSubmit(event) {
        event.preventDefault();
        this.setState({ isLoggedIn: true });
        console.log("Login successful");
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value }, this.updateEnableSubmit);
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value }, this.updateEnableSubmit);
    }

    updateEnableSubmit() {
        const { email, password } = this.state;
        const enableSubmit = email !== '' && password !== '';
        this.setState({ enableSubmit });
    }

    render() {
        return (
            <React.Fragment>
                <div className={css(styles.AppBody)}>
                    <p>Login to access the full dashboard</p>
                    <form onSubmit={this.handleLoginSubmit}>
                        <div className={css(styles.formGroup)}>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={this.state.email}
                                onChange={this.handleChangeEmail}
                            />
                        </div>
                        <div className={css(styles.formGroup)}>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={this.state.password}
                                onChange={this.handleChangePassword}
                            />
                        </div>
                        <input
                            type="submit"
                            value="OK"
                            className={css(styles.button)}
                            disabled={!this.state.enableSubmit}
                        />
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;
