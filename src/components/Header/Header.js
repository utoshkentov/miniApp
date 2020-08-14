import React from "react";
import {connect} from 'react-redux';
import {Link, useHistory} from "react-router-dom";

const Header = ({loggedIn}) => {
    const username = localStorage.getItem('username');
    const history = useHistory();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        history.push('/login')
    };

    return(
        <div className='container'>
            <ul className='list-group d-flex flex-row'>
                <li className='list-group-item'><Link to='/'>Blogs</Link></li>
                <li className='list-group-item'><Link to='/counter'>Counter</Link></li>
                <li className='list-group-item'><Link to='/item'>Todo</Link></li>
                <li className='list-group-item'><Link to='/posts'>Posts</Link></li>
                <li className='list-group-item' onClick={handleLogout}><Link to={(loggedIn || token) ? '/' : '/login'}>{(loggedIn || token) ? 'Logout' : 'Login'}</Link></li>
                {(loggedIn || token) && <li className='list-group-item'>{username}</li>}
            </ul>
        </div>
    )
};

const mapState = (state) => {
    return{
        loggedIn: state.auth.loggedIn
    }
};

export default connect(mapState)(Header);