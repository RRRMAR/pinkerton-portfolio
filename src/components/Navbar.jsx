import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo-container">
                    <Eye className="logo-icon" size={28} />
                    <div className="logo-text">
                        <h2>PINKERTON</h2>
                        <span>WE NEVER SLEEP</span>
                    </div>
                </a>
                <ul className="nav-links">
                    <li><a href="#biography">Origins</a></li>
                    <li><a href="#agency">The Agency</a></li>
                    <li><a href="#cases">Major Cases</a></li>
                    <li><a href="#legacy">Legacy</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
