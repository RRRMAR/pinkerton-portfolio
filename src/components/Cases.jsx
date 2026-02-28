import React from 'react';
import './Cases.css';

const Cases = () => {
    return (
        <section id="cases" className="section bg-darker">
            <div className="container">
                <h2 className="section-title">Major Cases & Operations</h2>

                <div className="cases-timeline">

                    <div className="case-card card">
                        <div className="case-content">
                            <span className="case-year">1861</span>
                            <h3>The Baltimore Plot</h3>
                            <p>
                                Infiltrated secessionist circles to uncover a sophisticated plot led by a Corsican barber
                                to assassinate President-elect Abraham Lincoln. The execution of the "Night Train" plan,
                                where Lincoln was disguised, was a masterpiece of 19th-century security, successfully
                                delivering him to Washington D.C.
                            </p>
                        </div>
                        <div className="case-image case-lincoln"></div>
                    </div>

                    <div className="case-card card reverse">
                        <div className="case-content">
                            <span className="case-year">1861–1865</span>
                            <h3>Civil War Intelligence</h3>
                            <p>
                                Operating as Major E.J. Allen, Pinkerton established the first systematic military
                                intelligence unit in U.S. history. While deploying agents behind enemy lines was a
                                tactical success, reliance on unvetted data led to strategic failures that reinforced
                                Gen. McClellan's innate caution.
                            </p>
                        </div>
                        <div className="case-image case-civilwar"></div>
                    </div>

                    <div className="case-card card">
                        <div className="case-content">
                            <span className="case-year">1866–1875</span>
                            <h3>The War Against Outlaws</h3>
                            <p>
                                Dismantled the Reno Gang, perpetrators of the first peacetime train robbery. However,
                                the pursuit of the James-Younger Gang ended in disaster when a Pinkerton explosive raid
                                on the James family farm killed Jesse James’s young half-brother, causing a massive PR nightmare.
                            </p>
                        </div>
                        <div className="case-image case-outlaws"></div>
                    </div>

                    <div className="case-card card reverse">
                        <div className="case-content">
                            <span className="case-year">1873–1877</span>
                            <h3>The Molly Maguires</h3>
                            <p>
                                Agent James McParland spent nearly three years deep-undercover infiltrating the Ancient
                                Order of Hibernians in the Pennsylvania coal fields. The ensuing trials crushed the
                                miner's union, cementing Pinkerton's reputation as a tool for industrial titans against labor.
                            </p>
                        </div>
                        <div className="case-image case-molly"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Cases;
