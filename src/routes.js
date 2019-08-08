import React from 'react'

import Dashboard from './components/Dashboard/Dashboard'
import Landing from './components/Landing/Landing'
import Transfer from './components/Transfer/Transfer'
import {Switch, Route} from 'react-router-dom'

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/transfer' component={Transfer} />
    </Switch>
)