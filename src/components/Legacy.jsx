import React from 'react';
import { Fingerprint, Network, Scale } from 'lucide-react';
import './Legacy.css';

const Legacy = () => {
    return (
        <section id="legacy" className="section">
            <div className="container">
                <h2 className="section-title">A Lasting Legacy</h2>

                <div className="legacy-text">
                    <p>
                        Allan Pinkerton died on July 1, 1884, while working on a project that would centralize a
                        national database of criminal records. His profound impact reverberates through the structure
                        of modern law enforcement. The methodologies he pioneered formed the bedrock of twentieth-century
                        intelligence agencies.
                    </p>
                </div>

                <div className="legacy-grid">
                    <div className="legacy-item card">
                        <Fingerprint className="legacy-icon" size={40} />
                        <h3>Birth of the FBI</h3>
                        <p>
                            Pinkerton's vision of centralized dossiers and undercover infiltration became the blueprint
                            for J. Edgar Hoover’s Federal Bureau of Investigation.
                        </p>
                    </div>

                    <div className="legacy-item card">
                        <Network className="legacy-icon" size={40} />
                        <h3>Diversity as an Asset</h3>
                        <p>
                            By hiring women and leveraging marginalized groups as spies, he recognized the unique access
                            these individuals possessed, breaking ground in investigative work.
                        </p>
                    </div>

                    <div className="legacy-item card">
                        <Scale className="legacy-icon" size={40} />
                        <h3>A Complex Morality</h3>
                        <p>
                            A figure of deep contradictions—an abolitionist who hunted slaves to safety, yet a corporate
                            enforcer who brutally crushed labor uprisings.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Legacy;
