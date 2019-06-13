import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/home';
import Moments from './pages/moments';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Header/>
                <Route exact path="/" component={Home} />
                <Route exact path="/moments" component={Moments} />
            </Router>
        );
    }
}
