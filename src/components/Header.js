import React, {Component} from 'react';
import {IoLogoGithub, IoLogoLinkedin} from 'react-icons/io'


export default class Header extends Component {
    state={
      prevScrollPos: window.pageYOffset,
      visible: true
    };
    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll);
    }

    handleBurger = () => {
        if(document.querySelector('.mobile-menu').classList.contains('active')){
            document.querySelector('.nav__burger').firstElementChild.classList.remove('active');
            document.querySelector('.mobile-menu').classList.remove('active');
        }else{
            document.querySelector('.nav__burger').firstElementChild.classList.add('active');
            document.querySelector('.mobile-menu').classList.add('active');
        }


    };
    handleScroll = () => {
        const { prevScrollPos } = this.state;
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos;
        this.setState({
            prevScrollPos: currentScrollPos,
            visible
        });
        if(currentScrollPos>100){
            document.querySelector('.header').classList.add('smaller')
        }else{
            document.querySelector('.header').classList.remove('smaller')
        }
    };


    render() {
        return (
            <header className={this.state.visible ? 'header' : 'header hidden'}>
                <nav className="nav">
                    <div className="nav__container">
                        <a href='/'>
                            <h1 className='nav__logo' data-heading='JRz'>JRz</h1>

                        </a>
                    </div>
                    <div className="nav__container nav__container--burger-menu" >
                        <div onClick={this.handleBurger} className="nav__burger">
                            <div className="nav__burger--line"/>
                        </div>
                    </div>
                    <div className="nav__container nav__container--default-menu">
                        <div className="menu">
                            <ul className="menu__ul">
                                <li className="menu__item">
                                    <a className="menu__item--link">Start</a>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__item--link">About</a>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__item--link">Work</a>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__item--link">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav__container nav__container--socials">
                        <a target="_blank" href='https://github.com/JRzankowski'>
                            <IoLogoGithub/>
                        </a>
                        <a target="_blank"
                           href='https://www.linkedin.com/in/j%C4%99drzej-rzankowski-58508b194/'>
                            <IoLogoLinkedin/>
                        </a>
                    </div>
                </nav>
                <div className="mobile-menu">
                    <aside className="sidebar" ref={node => this.node = node}>
                        <nav className='sidebar__nav'>
                            <ul className="sidebar__ul">
                                <li className="sidebar__item">
                                    <a className='sidebar__item--link'>Start</a>
                                </li>
                                <li className="sidebar__item">
                                    <a className='sidebar__item--link'>About</a>
                                </li>
                                <li className="sidebar__item">
                                    <a className='sidebar__item--link'>Work</a>
                                </li>
                                <li className="sidebar__item">
                                    <a className='sidebar__item--link'>Contact</a>
                                </li>
                                <li className="sidebar__item sidebar__socials">
                                    <a target="_blank" href='https://github.com/JRzankowski'>
                                        <IoLogoGithub/>
                                    </a>
                                    <a target="_blank"
                                       href='https://www.linkedin.com/in/j%C4%99drzej-rzankowski-58508b194/'>
                                        <IoLogoLinkedin/>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                </div>
            </header>
        );
    }
}


