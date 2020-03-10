import React, {Component} from 'react';
import SectionWorkProject from "./sectionWorkProject";
import projectsData from "./projects"
import weatherAppPhoto from '../assets/weather-app-min.png'
import projectPhoto from '../assets/gerenq-pw.png'
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
                        />
                    })
                }
            </section>

        );
    }
}
