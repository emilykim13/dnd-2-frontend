const initialState = {
    loggedIn: false,
    loadUsers: false,
    current_user: {}
}

const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_USER':
            return {
            ...state,
            loggedIn: true,
            current_user: action.current_user
            }
        case 'SIGN_UP':
            return {
            ...state
            }
        case 'LOGOUT_USER':
            return {
            ...state,
            loggedIn: false,
            loadUsers: false,
            current_user: {}
            }
            default: 
            return state
    }
}

export default UserReducer