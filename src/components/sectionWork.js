import React, {Component} from 'react';
import SectionWorkProject from "./sectionWorkProject";
import projectsData from "./projects"

export default class SectionWork extends Component {
    render() {
        return (
            <section className="work">
                <h3 className="work__heading">
                    My Projects
                </h3>
                {
                    projectsData.projects.map((value, index) => {
                        return <SectionWorkProject photoUrl={value.photoUrl}
                                                   name={value.name}
                                                   description={value.description}
                                                   technologies={value.technologies}
                                                   key={index}
                        />
                    })

                }


            </section>

        );
    }
}
