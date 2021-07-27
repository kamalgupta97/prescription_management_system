import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Home } from '../Pages/Home/Home';

export const Routes = () => {
    return (
        <div>
       
         <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      
       
      </Switch>
            
        </div>
    )
}
