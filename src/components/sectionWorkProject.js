import React, {Component} from 'react';
import {GoMarkGithub, GoBrowser} from 'react-icons/go'
import projectPhoto from '../assets/gerenq-pw.png'

export default class SectionWorkProject extends Component {

    render() {
        return (
                <div className="work__container">
                    <div className="project-box" style={{'backgroundImage': `url(${projectPhoto})`}}>
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
                                {this.props.technologies.map((value,index)=>{
                                    return <li key={index} className="project-box__technologies--item">{value}</li>
                                })}
                                {/*<li className="project-box__technologies--item">React</li>*/}
                                {/*<li className="project-box__technologies--item">TypeScript</li>*/}
                                {/*<li className="project-box__technologies--item">Firebase</li>*/}
                            </ul>
                            <div className="project-box__links">
                                <a className="project-box__links--link">
                                    <GoMarkGithub/>
                                </a>
                                <a className="project-box__links--link">
                                    <GoBrowser/>
                                </a>
                            </div>
                        </div>
                        <div className="project-box__img" style={{'backgroundImage': `url(${projectPhoto})`}}>
                            <div className="project-box__img--mask"/>
                        </div>
                    </div>
                </div>


        );
    }
}
