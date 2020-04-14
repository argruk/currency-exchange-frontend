import React, {useState} from 'react';
import './App.css';
import MainWindow from "./Components/Homepage/MainWindow";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import NavBar from "./Components/Navbar";
import AddPage from "./Components/CurrencyCRUD/AddForm";
import DetailsPage from "./Components/CurrencyCRUD/Details";


function App() {
    return (
      <div className="App">
          <Router>
              <Redirect exact from="/" to="/homepage" />
              <NavBar/>
              <Switch>
                  <Route path="/homepage">
                      <MainWindow/>
                  </Route>
                  <Route path="/add">
                      <AddPage/>
                  </Route>
              </Switch>
          </Router>
      </div>
  );
}

export default App;
