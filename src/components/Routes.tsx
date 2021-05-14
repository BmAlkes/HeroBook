import React from 'react';
import{
  BrowserRouter as Router, Switch, Route, Redirect
}from 'react-router-dom'
import {PATHS} from './config/paths'
import Feeds from './Pages/Feeds';
import Login from './Pages/Login';

function Routes(){
  return(
   <Router>
     <Switch>
       <Route exact={true} path={PATHS.ROOT}>
         <h1>Root</h1>
       </Route>
       <Route path={PATHS.LOGIN}>
         <Login/>
       </Route>
       <Route path={PATHS.FEED}>
         <Feeds/>
       </Route>
       <Route  path={PATHS.TEST}>
         <h1>Test</h1>
       </Route>
       <Route>
         <h1>Pagina nao encontrada</h1>
       </Route>
     </Switch>
   </Router>
  )
}

export default Routes;