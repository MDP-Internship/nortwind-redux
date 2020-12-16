import { combineReducers } from 'redux'
import changeCategoryReducer from "./changeCategoryReducer"
import categoriesListReducer from "./categoryListReducer"
const rootReducer = combineReducers({
    changeCategoryReducer,
    categoriesListReducer
})

export default rootReducer