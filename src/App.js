import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import Counter from "./components/Counter/Counter";
import {useHistory, Route, Switch, Redirect} from "react-router-dom";
import ItemAdd from "./components/ItemAdd/ItemAdd";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import LoginPage from "./components/Login/LoginPage";

const App = ({loggedIn}) => {
    // const token = localStorage.getItem('token');
    const history = useHistory();

    useEffect(() => {
        if (loggedIn){
            history.push('/')
        }
        else {
            history.push('/login')
        }
    }, [history, loggedIn]);

    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <Header />
                    <Counter/>
                </Route>
                <Route exact path='/item'>
                    <Header />
                    <ItemAdd/>
                </Route>
                <Route exact path='/posts'>
                    <Header />
                    <Posts/>
                </Route>
                <Route exact path='/login'>
                    <LoginPage/>
                </Route>
                <Redirect to='/login' />
            </Switch>

        </div>
    );
};

const mapState = (state) => {
    return{
        loggedIn: state.auth.loggedIn,
    }
};

export default connect(mapState)(App);
