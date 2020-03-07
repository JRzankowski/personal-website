import React, {Component} from 'react';
import Header from "./Header";
import SectionStart from "./sectionStart";
import SectionAbout from "./sectionAbout";
import SectionWork from "./sectionWork";

export default class PersonalWebsite extends Component {
    render() {
        return (
            <div className='personal-website'>
                <Header/>
                    <main className='main'>
                        <SectionStart/>
                        <SectionAbout/>
                        <SectionWork/>
                    </main>
            </div>
        );
    }
}


