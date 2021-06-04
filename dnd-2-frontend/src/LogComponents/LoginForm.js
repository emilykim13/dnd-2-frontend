import React from "react"
// import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { handleLogin } from "../Actions/LogActions"

const LoginForm = (props) => {
    let dispatch = useDispatch()
    return (
        <div className="App-header">
            <form onSubmit={async (e) => {
                e.preventDefault()
                handleLogin(e.target, props.history, dispatch)}}> 
                <h1> Welcome to DND Rails </h1>
                <h1>Please sign in: </h1>
                <label>EMAIL</label>
                <input required type="text"/>
                <br/>
                <label>PASSWORD</label>
                <input required type="password"/>
                <br/><br/>
                <input type="submit" value="Login"/>
                <br/><br/><br/>
            </form>
        </div>
    )
}
  export default LoginForm;


  