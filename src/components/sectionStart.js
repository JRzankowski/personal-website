import React, {Component} from 'react';

export default class SectionStart extends Component {
    render() {
        return (
            <section className="start">
                <p className="start__text--highlight">
                    Hi, my name is
                </p>
                <h2 className="start__heading">
                    Jędrzej Rzankowski.
                </h2>
                <h2 className='start__heading start__heading--dark'>
                    I build things for the web.
                </h2>
                <p className="start__text">
                    I'm an aspiring junior front-end developer from Poland.
                </p>
                <a href='mailto:j.rzankowski@gmail.com' className="start__btn">
                    Contact
                </a>
            </section>

        );
    }
}


