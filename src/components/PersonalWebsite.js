import React, {Component} from 'react';
import Header from "./Header";
import SectionStart from "./sectionStart";
import SectionAbout from "./sectionAbout";

export default class PersonalWebsite extends Component {
    render() {
        return (
            <div className='personal-website'>
                <Header/>
                    <main className='main'>
                        <SectionStart/>
                        <SectionAbout/>
                    </main>
            </div>
        );
    }
}


