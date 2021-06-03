export const handleLogin = (logUser, history, dispatch) => {
    let user = {
        email: logUser[0].value,
        password: logUser[1].value
    }
    const reqPackage={
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(user)
    }
    fetch("http://localhost:3000/api/v1/login", reqPackage)
    .then(res => res.json())
    .then(data => {
        {data.token === undefined ? localStorage.clear() : localStorage.setItem("token", data.token)}
        {data.token === undefined ? history.push('/login') : history.push('/home')}
        dispatch({type: "LOGIN_USER", current_user: data})
        })
}

// export const loadLogin = (dispatch) => {
//     const reqPackage={
//         method: "GET",
//         headers: {
//             "Content-Type" : "application/json",
//             "Accept" : "application/json",
//             "Authorization": `Bearer ${localStorage.getItem("token")}`
//         }
//     }
//     fetch("http://localhost:3000/api/v1/loadlogin", reqPackage)
//     .then(res => res.json())
//     .then(data => {
//         dispatch({type: "SET_USER"})
//     })
// }

// export const handleLogout = (history, dispatch) => {
//     localStorage.clear()
//     dispatch({type: "LOGOUT_USER"})
//     history.push('/login')
// }