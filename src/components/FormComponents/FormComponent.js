// import { CarList } from '../CarsList/index.js';
// import '../CarsList/carlist.css';
import { Greetings } from '../Greetings/Greetings.js';
import '../Greetings/Greetings.css'
import { FavouriteDessert } from '../FavouriteDessert/FavouriteDessert.js';
import { VisitedCities } from '../VisitedCities/VisitedCities.js';
import { YourState } from '../YourState/YourState.js';
import { DisableButton } from '../DisableButton/DisableButton.js';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from "react-router-dom";

function FormComponent() {
  return (
    <Router> 
      <div>
        <nav>
         <h2><span>
         <i class="material-icons">&#xe5c4;</i></span>Form Components</h2>
          <ul>
            <li>
              <Link to="/Greetings">Greetings</Link>
            </li>
            <li>
              <Link to="/FavouriteDessert">Favourite Dessert</Link>
            </li>
            <li>
              <Link to="/VisitedCities">Visited Cities</Link>
            </li>
            <li>
              <Link to="/YourState">Your State</Link>
            </li>
            <li>
              <Link to="/DisableButton">DisableButton</Link>
            </li>
            
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         <Switch>
        
            <Route path="/Greetings">
            <Greetings />
          </Route>
        
            <Route path="/FavouriteDessert">
            <FavouriteDessert />
          </Route>
        
            <Route path="/VisitedCities">
            <VisitedCities />
          </Route>
        
            <Route path="/YourState">
            <YourState />
          </Route>
        
            <Route path="/DisableButton">
            <DisableButton />
          </Route>
        
        </Switch>
     
      </div>
    </Router>
  );
}

export { FormComponent };
