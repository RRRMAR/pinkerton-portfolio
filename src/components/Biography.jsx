import React, { useEffect, useRef } from 'react';
import { MapPin, Briefcase, Anchor } from 'lucide-react';
import './Biography.css';

const Biography = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="biography" className="section bg-darker" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">The Crucible of Reform</h2>

                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <MapPin size={24} />
                        </div>
                        <div className="timeline-content card">
                            <span className="timeline-date">1819</span>
                            <h3>Birth in the Gorbals</h3>
                            <p>
                                Born in Glasgow, Scotland, in a working-class district. His father, a police
                                sergeant, instilled a complicated respect for order. Early entry into
                                labor developed his self-reliance.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <Briefcase size={24} />
                        </div>
                        <div className="timeline-content card">
                            <span className="timeline-date">1838–1842</span>
                            <h3>Chartist Radicalization</h3>
                            <p>
                                As a cooper, Pinkerton engaged deeply with political radicalism. He became a
                                militant leader in the Chartist movement, fighting for working-class political
                                rights, developing an understanding of secret societies and covert organization.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <Anchor size={24} />
                        </div>
                        <div className="timeline-content card">
                            <span className="timeline-date">1842</span>
                            <h3>Escape to the United States</h3>
                            <p>
                                Following a state crackdown, a warrant was issued for his arrest. He fled
                                Scotland for America, surviving a shipwreck off Nova Scotia before
                                settling in the Chicago area—a forced reinvention that introduced him
                                to the American frontier.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Biography;
