import React from 'react'
import { useDispatch } from 'react-redux'
import { handleLogout } from "../Actions/LogActions"
import { useHistory } from "react-router-dom"

const Home = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    return (
        <div className="App">
            <h1>This is my Home.js</h1>
            <button onClick={() => history.push("/charactersheet")}> Character Sheet</button><br/>
            <button onClick={() => handleLogout(props.history, dispatch)}>Logout</button>
        </div>
    )
}

export default Home
