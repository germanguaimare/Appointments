import { useDispatch } from "react-redux";
import * as actions from "../actions/index.js";

export const fetchAppointments = async (dispatch) => {
    const appointments = await fetch("https://3000-germanguaimare-appointme-x0u5t1simt6.ws-us38.gitpod.io/tasks")
        .then(response => response.json())
        console.log(appointments)
    dispatch(actions.getAppointments(appointments))
}