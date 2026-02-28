import React from 'react';
import { Eye } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-logo">
                    <Eye size={40} className="footer-icon" />
                    <div className="footer-brand">
                        <h2>PINKERTON</h2>
                        <span>NATIONAL DETECTIVE AGENCY</span>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-info">
                    <p className="footer-slogan">"We Never Sleep"</p>
                    <p className="footer-copyright">
                        &copy; {new Date().getFullYear()} Historical Portfolio Archive. All rights reserved.
                        <br />Designed for vigilance.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
