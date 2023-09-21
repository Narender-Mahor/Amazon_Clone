import { getProductsReducer } from "./ProductReducer"
import {combineReducers} from "redux"

const rootReducers = combineReducers({
    getProductsData : getProductsReducer
});


export default rootReducers