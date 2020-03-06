import React, {Component} from 'react';
import Header from "./Header";
import SectionStart from "./sectionStart";

export default class PersonalWebsite extends Component {
    render() {
        return (
            <div className='personal-website'>
                <Header/>
                    <main className='main'>
                        <SectionStart/>
                    </main>
            </div>
        );
    }
}


