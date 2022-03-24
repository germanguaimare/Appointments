import { useDispatch } from "react-redux";
import * as actions from "../actions/index.js";

export const fetchAppointments = async (dispatch) => {
    const appointments = await fetch("/tasks")
        .then(response => response.json())
        console.log(appointments)
    dispatch(actions.getAppointments(appointments))
}