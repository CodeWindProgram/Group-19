
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'; 
import Faculty from './Faculty';
import Home from "./Home";
import Dashboard from './Dashboard';
import Navbar  from './Navbar';
import Upload from './Upload';
import {Switch ,Route} from "react-router-dom";
import Progrees from './Progrees';
import Students from './Students';

const App =() => {
return(
<>

<Navbar />

<Switch>
    <Route exact path  ="/" component ={Home} />
    
    <Route exact path="/progrees" component={Progrees}/>
   
    <Route exact path ="/dashboard" component={Dashboard}/>
     <Route exact path="/upload" component={Upload}/>
    <Route exact path="/Faculty" component={Faculty}/>
    <Route exact path="/students" component={Students}/>
<Home/>
</Switch>

</>


);
  
};

export default App;