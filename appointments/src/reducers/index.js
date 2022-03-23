import appointmentsHandler from "./appointmentsHandler.js"
import { combineReducers } from "redux"

const allReducers = combineReducers({
    appointmentsHandler: appointmentsHandler,
})

export default allReducers