import React, { useContext } from "react";
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext';

const Footer = () => {
    const { user } = useContext(AppContext);

    const isIndex = true;

    return (
        <footer className="App-footer">
            <p>Copyright ©{getFullYear()} - {getFooterCopy(isIndex)}</p>
            {user.isLoggedIn && (
                <p>
                    <a href="/contact">Contact Us</a>
                </p>
            )}
        </footer>
    );
};

export default Footer;
