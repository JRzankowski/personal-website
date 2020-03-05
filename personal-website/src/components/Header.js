import React, {Component} from 'react';
import Logo from "../assets/logo";


export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <nav className="nav">
                    <div className="nav__logo ">
                            <h1 data-heading='JRz'>JRz</h1>
                    </div>
                </nav>
            </header>
        );
    }
}


