import { Link, useLocation } from 'react-router-dom';

const NavLink = (props) => {
    const location = useLocation().pathname;

    return (
        <Link 
            to={props.to} 
            className={`nav-link ${(location === props.to) ? "current-link" : ""}`}> {props.linkName} </Link>
    );
};

export default NavLink;