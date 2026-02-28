import React from 'react';
import { Eye, ShieldCheck, Users, SearchCode } from 'lucide-react';
import './Agency.css';

const Agency = () => {
    return (
        <section id="agency" className="section">
            <div className="container">
                <h2 className="section-title">The Unblinking Eye</h2>

                <div className="agency-intro">
                    <p className="lead-text">
                        By 1850, Pinkerton recognized that the rapid expansion of railroads created a new class of crime.
                        Resigning from the Chicago police force, he established the <strong>Pinkerton National Detective Agency</strong>.
                    </p>
                </div>

                <div className="agency-grid">
                    <div className="card feature-card">
                        <div className="feature-icon">
                            <SearchCode size={32} />
                        </div>
                        <h3>National Scope</h3>
                        <p>
                            Ignored jurisdictional lines to pursue fleeing criminals across state and county borders,
                            preventing the "state-line escapes" common in the 19th century.
                        </p>
                    </div>

                    <div className="card feature-card">
                        <div className="feature-icon">
                            <Users size={32} />
                        </div>
                        <h3>Undercover Operatives</h3>
                        <p>
                            Revolutionized intelligence gathering by "worming out" secrets through deep infiltration
                            and espionage rather than relying solely on force.
                        </p>
                    </div>

                    <div className="card feature-card">
                        <div className="feature-icon">
                            <ShieldCheck size={32} />
                        </div>
                        <h3>The Rogues' Gallery</h3>
                        <p>
                            Created a centralized, national collection of criminal mugshots and descriptions,
                            enabling cross-city identification decades before digital records.
                        </p>
                    </div>

                    <div className="card feature-card standout">
                        <div className="feature-icon gold">
                            <Eye size={32} />
                        </div>
                        <h3>Female Detectives</h3>
                        <p>
                            Hired Kate Warne in 1856, establishing the first Female Detective Bureau.
                            Warne proved women could "worm out secrets" in places impossible for men to access,
                            exploiting social gender biases of the era.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Agency;
