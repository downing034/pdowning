import React from 'react';
import Logo from '../../images/logo-transparent.png';
import NavbarLink from './navbar-link';

export default class Navbar extends React.Component {
  state = {
    navbarClasses: 'navbar-no-color'
  }

  listenScrollEvent = e => {
    if (window.scrollY > 360) {
      this.setState({ navbarClasses: 'navbar-darken' })
    } else {
      this.setState({ navbarClasses: 'navbar-no-color' })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    const { navbarClasses } = this.state;
    return (
      <nav className={`navbar ${navbarClasses} fixed-top navbar-expand-lg`}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="logo" src={Logo}/>
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <NavbarLink href="#about" linkText="About"/>
              <NavbarLink href="#portfolio" linkText="Portfolio"/>
              <NavbarLink href="#resume" linkText="Resume"/>
            </ul>
          </div>

          <div>
            <ul className="nav navbar-nav float-right mr-auto">
              <NavbarLink href="#contact" linkText="Contact"/>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
};
