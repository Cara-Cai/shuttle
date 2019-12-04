import React from 'react';
import Shuttle from './Shuttle';
import './App.css';
import Shuttle3 from './Shuttle3';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
<Router>
    <div className="App">
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/shuttle">
        <Shuttle />
      </Route>
      <Route exact path="/shuttle3">
        <Shuttle3/>
      </Route>
    </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="Home">
      <h1>Welcome to Shuttle Service for NYU Shanghai!</h1>
      <h2>I'm at...</h2>
    <form>
      <label>
        <input className="input" type="" name="name" />
      </label>
   <button className="heybutton1" >select</button>
    </form>

      <h2>I'm going to...</h2>
      <form>
      <label>
        <input className="input" type="" name="name" />
      </label>
      <button className="heybutton1" >select</button>
    </form>
    <Link to="/shuttle"><button className="heybutton2" >Find a shuttle</button></Link>
<div>
<button className="heybutton3" >Scan</button>
<Link to="/shuttle3"><button className="heybutton3" >Records</button> </Link>
</div>
    </div>
  );
}


export default App;
