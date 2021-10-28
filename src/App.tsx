import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Edit from './components/Edit';
import { GlobalProvider } from './context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{maxWidth:"30rem", margin:"4rem auto"}}>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center" }}>
        <h1>React CRUD App using TS</h1>
      </div>
      <br/>
      <br/>
      <br/>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/edit/:id' component={Edit} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
} 

export default App;
