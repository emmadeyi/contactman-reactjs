import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const Header = (props) => {
    const { branding } = props;
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
                <div className="container">
                    <Link to="/" className="navbar-brand">{branding}</Link>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link"> <i className="fa fa-home"></i>  Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact/add" className="nav-link"><i className="fa fa-plus"></i> Add</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link"><i className="fa fa-question"></i> About</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    )
}

Header.defaultProps = {
    branding: 'My App'
}

//prop validation using propTypes
Header.propTypes = {
    branding: PropTypes.string.isRequired
};
// const Header = (props) => {
//     return (
//         <div>
//             <h1>{props.branding}</h1>
//         </div>
//     )
// }
// function Header() {
//     return (
//         <div>
//             <h1>Contact Manager</h1>
//         </div>
//     )
// }

export default Header;
