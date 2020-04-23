import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import { configure } from 'mobx';
import { observable } from 'mobx';
import { observer, Provider } from 'mobx-react';

import themeStore from './stores/ThemeStore';
import "./App.css";
import CounterPage from "./components/CounterPage";
import CounterUsingMobx from "./components/CounterUsingMobx";

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

import { TodoListUsingMobx } from './components/TodoListUsingMobx';
import './components/TodoListUsingMobx/index.css';
import TodoApp from './components/TodoListWithMobx/TodoApp';
import TodoAppForAPI from './components/TodoAppForAPI';

import A from './components/ProviderConcept/A/index.js';
import GridMemoryGame from './components/GridMemoryGame';

import UsersPage from './components/UsersPage';
import stores from './stores';
//configure({ enforceActions: true });
@observer
class App extends React.Component {
  // @observable changeThemeToBody = 'light'
  // @observable selectedTheme = true
  // @observable changeThemeLight = 'light-color'

  // constructor(props) {
  //   super(props);
  //   this.state = { selectedTheme: true, changeThemeLight: 'light-color' };
  // }
  onChangeTheme = () => {
    //  alert('onChangeTheme');
    // if (this.selectedTheme) {
    //   this.changeThemeToBody = 'dark';
    //   this.selectedTheme = false;
    //   this.changeThemeLight = 'light-dark';
    //   // this.setState({ changeThemeLight: 'light-dark', selectedTheme: false });
    // }
    // else {
    //   this.changeThemeToBody = 'light';
    //   this.selectedTheme = true;
    //   this.changeThemeLight = 'light-color';

    //   //   this.setState({ changeThemeLight: 'light-color', selectedTheme: true });
    // }

    themeStore.updateTheme();
  }
  render() {
    return (
      <Provider {...stores}>
      <Router  basename={process.env.PUBLIC_URL}> 
  <div>
        <nav>
          <ul>
            <li>
              <Link to="/CarsList">CarList</Link>
            </li>

            <li>
              <Link to="/TodoList">Todolist</Link>
            </li>

            <li>
              <Link to="/ TodoListUsingMobx">Todo list using Mobx</Link>
            </li>

              <li>
              <Link to="/TodoApp">TodoApp with  Mobx version2</Link>
            </li>

              <li>
              <Link to="/TodoAppForAPI">TodoApp with  Mobx version2 for API</Link>
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

            <li>
              <Link to="/CounterUsingMobx">Counter Using Mobx</Link>
            </li>
          <li>
              <Link to="/ProviderConcept">Provider Concept in mobx</Link>
            </li>
          <li>
              <Link to="/grid-game">Grid Memory Game</Link>
            </li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/ProviderConcept">
            <A />
          </Route>

          <Route path="/CarsList">
            <CarList />
          </Route>

          {/*<Route path="/counter-page">
          <CounterPage />
        </Route>
      */}
          <Route path="/TodoList">
            <TodoList />
          </Route>

            <Route path="/ TodoListUsingMobx">
            <TodoListUsingMobx />
          </Route>

          <Route path="/TodoApp">
            <TodoApp />
          </Route>
          <Route path="/TodoAppForAPI">
            <TodoAppForAPI />
          </Route>

          <Route path="/FormComponents">
            <FormComponent />
          </Route>

            <Route path="/CountriesDashboardApp">
            <CountriesDashboardApp />
          </Route>

            <Route path="/grid-game">
            <GridMemoryGame />
          </Route>

        <Route path="/country-dashboard-app/details/:id">
        <CountryDetails onChangeTheme={this.onChangeTheme} selectedTheme={themeStore.selectedTheme} changeThemeToBody={themeStore.changeThemeToBody} changeThemeLight={themeStore.changeThemeLight} />
        </Route>
        <Route path="/EmojiGame">
        <EmojiGame />
        </Route>

        <Route path="/CounterUsingMobx">
          <CounterUsingMobx/>
        </Route>

        <Route exact path="/users" component={UsersPage}/>

        </Switch>

      </div>
    </Router>
    </Provider>
    );
  }
}
export default App;
///////
/*
  <Route path="/CountriesDashboardApp">
            <CountriesDashboardApp onChangeTheme={this.onChangeTheme} selectedTheme={themeStore.selectedTheme} changeThemeToBody={themeStore.changeThemeToBody} changeThemeLight={themeStore.changeThemeLight}/>
          </Route>
                  
        <Route path="/country-dashboard-app/details/:id">
        <CountryDetails onChangeTheme={this.onChangeTheme} selectedTheme={themeStore.selectedTheme} changeThemeToBody={themeStore.changeThemeToBody} changeThemeLight={themeStore.changeThemeLight} />
        </Route>
        */
/////////////

// import HomePage from "./components/HomePage";
// import Page1 from "./components/Page1";
// import { Page, DivWrapper } from "./components/Page1"
// import "./App.css";


// class App extends React.Component {
//   render() {
//     return (
//       <Router  basename={process.env.PUBLIC_URL}> 
//     <div>
//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/counter-page">
//             <CounterPage />
//           </Route>
//         <Route exact path="/page-1">
//         <Page1 />
//         </Route>

//         <Route path="/TailWindPractice1">
//           <TailWindPractice1 />
//         </Route>

//           <Route path="/">
//           <HomePage />
//         </Route>

//     {/*    <Page>
//         hlo
//         <DivWrapper>
//         hiii
//         </DivWrapper>
//         </Page>     */}
//         </Switch>
//         </div>
//         </Router>
//     );
//   }
// }
// export default App;

/*    <Route path="/counter-page">
          <CounterPage />
        </Route>
       <Route exact path="/page-1">
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
       </Page>     */
