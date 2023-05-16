import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Home from './pages';
import Atlanta from "./pages/atlanta";
import EastsideTrailContainer from './pages/eastside-trail/eastside-trail-container';
import TopSpotsInAtlanta from './pages/topSpotsInAtlanta';
import {venues} from './pages/eastside-trail/venues';
import {coming_soon} from './pages/coming_soon';

function App() {
    return (
        <Router>
            {/*<Navbar />*/}
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route
                    path='/atlanta/top_spots_in_atlanta/eastside_trail'
                    component={() => <EastsideTrailContainer venues={venues}/>}
                />
                <Route path='/atlanta/top_spots_in_atlanta' component={TopSpotsInAtlanta} />
                <Route
                    path='/atlanta/coming_soon_to_atlanta'
                    component={() => <EastsideTrailContainer venues={coming_soon}/>}
                />
                <Route path='/atlanta' component={Atlanta} />
            </Switch>
        </Router>
    );
}

export default App;
