import React from 'react';
import './_Nav.scss';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    checked() {
        if (document.querySelector("#nav").checked === true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }

    componentDidMount() {
        document.body.style.overflow = 'visible';
    }

    render () {
        return (

        <nav className="nav">
            <div className="nav__logo--wrapper">
                <Link to="/" className="nav__logo__text">{this.props.logo}</Link>
            </div>

            <div className="nav__list--wrapper">
                <ul className="nav__list">
                    <li className="nav__list--item"><NavLink onClick={() => window.scrollTo(0,0)} className="nav__list--link" exact to="/">{this.props.link_one}</NavLink></li>
                    <li className="nav__list--item"><NavLink onClick={() => window.scrollTo(0,0)} className="nav__list--link" to="/inventory">{this.props.link_two}</NavLink></li>
                </ul>
            </div>

        </nav>

        )
    }
}

export default Navbar;