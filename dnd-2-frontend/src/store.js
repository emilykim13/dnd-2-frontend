import {combineReducers, applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"
import UserReducer from "./Reducers/UserReducer"

const rootReducer = combineReducers({
    loginState: UserReducer,
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)))

export default store