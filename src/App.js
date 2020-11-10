import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassicTeePage from './components/ClassicTeePage';
import TopNav from './components/TopNav';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className = "App">
                    <TopNav/>
                    <Switch>
                        <Route exact path = "/" component = {ClassicTeePage}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
  }
}

export default App;
