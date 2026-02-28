import React from 'react';
import { Eye, Shield, Search } from 'lucide-react';
import portraitImg from '../assets/pinkerton_portrait.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background"></div>
            <div className="hero-overlay"></div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge fade-in">
                        <Shield size={16} />
                        <span>EST. 1850</span>
                    </div>

                    <h1 className="hero-title fade-in delay-1">
                        Allan Pinkerton
                    </h1>

                    <h2 className="hero-subtitle fade-in delay-2">
                        The Architect of Vigilance
                    </h2>

                    <p className="hero-description fade-in delay-3">
                        From a radical Scottish labor activist to the primary enforcer for Gilded Age
                        industrial titans. Discover the man whose "unblinking eye" shaped American
                        intelligence, created the modern surveillance state, and paved the way for the FBI.
                    </p>

                    <div className="hero-actions fade-in delay-3">
                        <a href="#biography" className="btn btn-primary">
                            <Search size={18} />
                            Uncover The Files
                        </a>
                        <div className="hero-slogan">
                            <Eye className="slogan-icon" size={20} />
                            <span>We Never Sleep</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image-wrapper fade-in delay-2">
                    <div className="hero-image-frame">
                        <img src={portraitImg} alt="Allan Pinkerton Portrait" className="hero-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
