import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';


export default class SectionContact extends Component {
    render() {
        return (
            <Fade bottom>
                <section id='contact' className="contact">
                    <h3 className="contact__heading">
                        Contact
                    </h3>
                    <div className="contact__container">
                        <div className="contact__content">
                            <p className="contact__text">
                                As I said I am looking for a job as a junior front-end developer. I am open to any
                                proposal, so if you are interested, please contact me.
                            </p>
                            <a href='mailto:j.rzankowski@gmail.com' className="contact__btn">
                                Contact
                            </a>

                        </div>
                    </div>
                </section>
            </Fade>
        );
    }
}
