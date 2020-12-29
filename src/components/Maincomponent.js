import React from "react";

import HomeComponent from './HomeComponent';
import { Switch, Route } from 'react-router-dom'
import Certificates from "./Certificates";
import Projects from "./Projects";
import Contact from "./Contact";

function Maincomponent() {
  return (

    <Switch>
    <Route exact path='/' component={HomeComponent}/>
    <Route path='/certificates' component={Certificates}/>
    <Route path='/projects' component={Projects}/>
    <Route path='/contacts' component={Contact}/>
    </Switch>
    
  );
}
export default Maincomponent;