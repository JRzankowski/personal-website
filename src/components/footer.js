import React, {Component} from 'react';
import {IoLogoGithub, IoLogoLinkedin} from 'react-icons/io';
export default class Footer extends Component {
    render() {
        return (
            <footer  className="footer">
                <div className="footer__credits">
                    <a target="_blank"  rel="noopener noreferrer" href='https://github.com/JRzankowski'>
                       Built by Jędrzej Rzankowski
                    </a>
                </div>

            </footer>

        );
    }
}


