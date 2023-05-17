import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Atlanta } from './pages/atlanta';
import './app.css';

function App() {
    return (
        <Router>
            {/*<Navbar />*/}
            <Switch>
                <div className='app'>
                    <Route path='/' exact component={Atlanta} />
                    {/*<Route path='/about' component={About} />*/}
                    {/*<Route*/}
                    {/*    path='/atlanta/top_spots_in_atlanta/eastside_trail'*/}
                    {/*    component={() => <EastsideTrailContainer venues={venues}/>}*/}
                    {/*/>*/}
                    {/*<Route path='/atlanta/top_spots_in_atlanta' component={TopSpotsInAtlanta} />*/}
                    {/*<Route*/}
                    {/*    path='/atlanta/coming_soon_to_atlanta'*/}
                    {/*    component={() => <EastsideTrailContainer venues={coming_soon}/>}*/}
                    {/*/>*/}
                    {/*<Route path='/atlanta' component={Atlanta} />*/}
                </div>
            </Switch>
        </Router>
    );
}

export default App;
