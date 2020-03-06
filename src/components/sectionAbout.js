import React, {Component} from 'react';
import myPhoto from '../assets/photo.png'
import {FaRegDotCircle} from 'react-icons/fa'

export default class SectionAbout extends Component {
    render() {
        return (
            <section className="about">
                <h3 className="about__heading">
                    About Me
                </h3>
                <div className="about__container">
                    <div className="about__content">
                        <div className="content">
                            <p className="content__text">Im Jędrzej, aspiring junior front-end developer. Over the past
                                year I have been learning to create websites and web applications. I can with no doubt
                                say that it has become my passion.</p>
                            <p className="content__text">I finished the "JavaScript Developer: React" bootcamp at <a
                                target="_blank" href='https://coderslab.pl'>Coders Lab</a>. After several hundred hours
                                of my own work and a completed course, I decided to look for a job as a junior front-end
                                developer.</p>
                            <p className="content__text">Here are a few technologies I've been working with
                                recently:</p>
                            <ul className="content__skills">
                                <li className="content__skills-skill">HTML & (S)CSS</li>
                                <li className="content__skills-skill">JavaScirpt (ES6+)</li>
                                <li className="content__skills-skill">React</li>
                                <li className="content__skills-skill">TypeScript</li>
                            </ul>
                        </div>
                    </div>
                    <div className="about__photo">
                        <a className="photo__link" target="_blank" href='https://github.com/JRzankowski'>
                            <img src={myPhoto} className='img' alt='My photo'/>

                        </a>

                    </div>
                </div>

            </section>

        );
    }
}
