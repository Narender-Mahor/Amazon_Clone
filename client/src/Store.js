import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducers from "./components/Redux/Reducer/Main"; 


const middleware = [thunk]

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;