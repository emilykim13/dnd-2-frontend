import React from 'react'
import LoginForm from './LogComponents/LoginForm'
import SignupForm from './LogComponents/SignupForm'
import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'

const Routes = (props) => {
    return(
        <Router>
                {/* {!localStorage.token && (localStorage.token === undefined) && <Redirect to="/login"/>} */}
                {!localStorage.token ? <Redirect to="/login"/> : null}
                {localStorage.token === undefined ? <Redirect to="/login"/> : null}
            <Switch>
                <Route path='/login' exact component = { props => <LoginForm {...props} /> } />
                <Route path='/signup' exact component = { props => <SignupForm {...props} /> } />
            </Switch>
        </Router>
    )
}

export default Routes
