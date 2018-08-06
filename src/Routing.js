import React from 'react';

import {
    BrowserRouter as Router, 
    Route, 
    Switch
} from 'react-router-dom';

import Home1 from './Components/Home1';
import Home2 from './Components/Home2';
import Home3 from './Components/Home3';



const Routing = () => (
    <Router>
        <Switch>
        <Route exact path="/" component={Home1}/>
        <Route path="/home2" component={Home2}/>
        <Route path="/home3" component={Home3}/>
      </Switch>
    </Router>
  )

  export default Routing