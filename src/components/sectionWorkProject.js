import React, {Component} from 'react';
import {GoMarkGithub, GoBrowser} from 'react-icons/go'
import Fade from 'react-reveal/Fade';
import weatherAppPhoto from '../assets/weather-app-min.png'
import odwrPhoto from '../assets/odwr-min.png'
import gerenqPhoto from '../assets/gerenq-min.png'
import chessReact from '../assets/chess-react-min.png'

export default class SectionWorkProject extends Component {

    render() {
        let photo = '';
        if (this.props.photo === 'weatherAppPhoto') {
            photo = weatherAppPhoto;
        } else if (this.props.photo === 'odwrPhoto') {
            photo = odwrPhoto;
        } else if (this.props.photo === 'gerenqPhoto') {
            photo = gerenqPhoto;
        } else {
            photo = chessReact
        }
        console.log(this.props.live)
        return (
            <Fade bottom>
                <div className="work__container">
                    <div className="project-box" style={{'backgroundImage': `url(${photo})`}}>
                        <div className="project-box__mask"/>
                        <div className="project-box__container">
                            <h4 className='project-box__heading project-title'>
                                <a href='/'>{this.props.name}</a>
                            </h4>
                            <div className="project-box__description project-description">
                                <p className='project-box__description--text'>
                                    {this.props.description}
                                </p>
                            </div>
                            <ul className="project-box__technologies">
                                {this.props.technologies.map((value, index) => {
                                    return <li key={index} className="project-box__technologies--item">{value}</li>
                                })}
                            </ul>
                            <div className="project-box__links">
                                <a className="project-box__links--link" href={this.props.github}>
                                    <GoMarkGithub/>
                                </a>
                                {this.props.live === undefined ? null :
                                    <a className="project-box__links--link" href={this.props.live}>
                                        <GoBrowser/>
                                    </a>}

                            </div>
                        </div>
                        <div className="project-box__img" style={{'backgroundImage': `url(${photo})`}}>
                            <div className="project-box__img--mask"/>
                        </div>
                    </div>
                </div>
            </Fade>


        );
    }
}
