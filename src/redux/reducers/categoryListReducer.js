import * as actionTypes from "../actions/actionTypes"
import initialState from './initialState'

export default function getCategoryListReducer(
    state = initialState.categories,
    action
) {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            debugger;
            return action.payload;
        default:
            return state;
    }
}