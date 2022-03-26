import * as actions from "../actions/index.js";

const date = new Date();

export const fetchAppointments = async (dispatch) => {
  const appointments = await fetch("/tasks")
    .then(response => response.json())
  dispatch(actions.getAppointments(appointments))
}

export const getDate = () => {
  let today = date.toLocaleString("es-CL").substring(0,10).toLocaleString()
  return today
}

export const putChanges = async (data, id, dispatch) => {
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
    .catch(error => console.log('error', error));

}

export const addAppointment = (data, dispatch) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "description": data.newAppointment,
    "created": date.getFullYear() +'-'+ (date.getMonth()+1).toString().padStart(2,0) +'-'+ date.getDate().toString().padStart(2,0),
    "deadline": data.newDeadline
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("/tasks", requestOptions)
    .then(response => response.text())
    .then(fetchAppointments(dispatch))
    .catch(error => console.log('error', error));
}

export const deleteAppointment = (id, dispatch) => {
  var raw = "";

  var requestOptions = {
    method: 'DELETE',
    body: raw,
    redirect: 'follow'
  };

  fetch(`/tasks/${id}`, requestOptions)
    .then(response => response.text())
    .then(fetchAppointments(dispatch))
    .catch(error => console.log('error', error));
}

