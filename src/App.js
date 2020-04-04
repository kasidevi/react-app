import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


//import HomePage from "./components/HomePage";
//import Page1 from "./components/Page1";
//import { Page, DivWrapper } from "./components/Page1"
import "./App.css";

import TailWindPractice1 from "./components/TailWindPractice1";

import { CarList } from './components/CarsList/index.js';
import './components/CarsList/carlist.css';
import { TodoList } from './components/TodoList/todolist.js';
import './components/TodoList/todolist.css';
import { FormComponent } from './components/FormComponents/FormComponent.js';
import './components/FormComponents/FormComponent.css';
import { CountriesDashboardApp } from './components/CountriesDashboardApp/CountriesDashboardApp.js';
import CountryDetails from './components/CountryDetails/CountryDetails.js';
import './components/CountriesDashboardApp/CountriesDashboardApp.css';
import EmojiGame from './components/EmojiGame/index.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTheme: true, changeThemeToBody: 'light', changeThemeLight: 'light-color' };
  }
  onChangeTheme = () => {
    if (this.state.selectedTheme) {
      this.setState({ changeThemeToBody: 'dark' });
      this.setState({ changeThemeLight: 'light-dark' });
      this.setState({ selectedTheme: false });
    }
    else {
      this.setState({ changeThemeToBody: 'light' });
      this.setState({ changeThemeLight: 'light-color' });
      this.setState({ selectedTheme: true });
    }
  }
  render() {
    return (
      <Router  basename={process.env.PUBLIC_URL}> 
   <div>
        <nav>
          <ul>
            <li>
              <Link to="/CarsList">CarList</Link>
            </li>
        
            <li>
              <Link to="/TodoList">todolist</Link>
            </li>
            
            <li>
              <Link to="/FormComponents">Form Component</Link>
            </li>
            <li>
              <Link to="/CountriesDashboardApp">Countries DashboardApp</Link>
            </li>
            <li>
            <Link to="/EmojiGame">Emoji Game</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         <Switch>
   
         {/* <Route exact path="/page-1">
         <Page1 />
         </Route>
           
         <Route path="/TailWindPractice1">
           <TailWindPractice1 />
         </Route>
       
          <Route path="/">
           <HomePage />
         </Route>
        
       <Page>
        hlo
        <DivWrapper>
        hiii
        </DivWrapper>
         </Page>*/}
         
           <Route path="/CarsList">
            <CarList />
          </Route>
          
          <Route path="/TodoList">
            <TodoList />
          </Route>
          <Route path="/FormComponents">
            <FormComponent />
          </Route>
          
            <Route path="/CountriesDashboardApp">
            <CountriesDashboardApp onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme} changeThemeToBody={this.state.changeThemeToBody} changeThemeLight={this.state.changeThemeLight}/>
          </Route>
                  
        <Route path="/country-dashboard-app/details/:id">
        <CountryDetails onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme} changeThemeToBody={this.state.changeThemeToBody} changeThemeLight={this.state.changeThemeLight} />
        </Route>
        <Route path="/EmojiGame">
        <EmojiGame />
        </Route>
           
        </Switch>
     
      </div>
    </Router>
    );
  }
}
export default App;
