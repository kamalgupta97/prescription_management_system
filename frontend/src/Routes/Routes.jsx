import React from 'react';
import {Route, Switch} from 'react-router-dom';
import IndividualPrescription from '../Components/Individual';
import { Home } from '../Pages/Home/Home';

export const Routes = () => {
    return (
        <div>
       
         <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:id">
          <IndividualPrescription />
        </Route>
      
       
      </Switch>
            
        </div>
    )
}
