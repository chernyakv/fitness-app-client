import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'react-router-dom'
import News from "../News/News";
import Motivation from "./Motivation";

const Main = () => {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={News}/>
          <Route path='/motivation/:id/news' component={Motivation}/>
        </Switch>
      </main>
    );
  }
export default Main;