import { combineReducers } from "@reduxjs/toolkit"
import { reducer as coursesReducer } from '../slices/courses'

const rootReducer=combineReducers({
    courses:coursesReducer
})

export default rootReducer