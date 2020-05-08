import React, {Component} from 'react';
import SectionWorkProject from "./sectionWorkProject";
import projectsData from "./projects"
import {GoMarkGithub} from 'react-icons/go'
export default class SectionWork extends Component {
    render() {
        return (
            <section id='projects' className="work">
                <h3 className="work__heading">
                    My Projects
                </h3>
                {
                    projectsData.projects.map((value, index) => {
                        return <SectionWorkProject photoUrl={value.photoUrl}
                                                   name={value.name}
                                                   description={value.description}
                                                   technologies={value.technologies}
                                                   photo={value.photo}
                                                   github={value.github}
                                                   live={value.live}
                                                   key={index}
                                                   status={value.status}
                        />
                    })
                }
                <p className='work__text'>
                    ... and more on my <a target="_blank"  rel="noopener noreferrer" href='https://github.com/JRzankowski' className='work__text--link'><GoMarkGithub/></a>
                </p>
            </section>
        );
    }
}
