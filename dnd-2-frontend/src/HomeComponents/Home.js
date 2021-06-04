import React from 'react'
import { useDispatch } from 'react-redux'
import { handleLogout } from "../Actions/LogActions"

const Home = (props) => {
    const dispatch = useDispatch()
    return (
        <div className="App">
            <h1>This is my Home.js</h1>
            <button onClick={() => handleLogout(props.history, dispatch)}>Logout</button>
        </div>
    )
}

export default Home
