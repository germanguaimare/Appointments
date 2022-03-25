import { useDispatch } from "react-redux";
import * as actions from "../actions/index.js";

export const fetchAppointments = async (dispatch) => {
    const appointments = await fetch("/tasks")
        .then(response => response.json())
    dispatch(actions.getAppointments(appointments))
}

export const postChanges = async (data, id, dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      description: data.newTask,
      created: data.newCreationDate,
      deadline: data.newDeadline
    });
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`/tasks/${id}`, requestOptions)
      .then(fetchAppointments(dispatch))
      //.then(result => console.log(result))
      .catch(error => console.log('error', error));

      
}