import './App.css';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions/index.js";
import * as helpers from "./helpers/index.js"
import Tile from "./components/appointmentTile.js"

function App() {
  const dispatch = useDispatch()
  const appointments = useSelector(state => state.appointmentsHandler)
  useEffect(()=> {
    helpers.fetchAppointments(dispatch)
    console.log(appointments)
  }, [])

  return (
    <div className="App">
      <h3>Appointments App</h3>
      <h4>Fecha:</h4>
      <h4>Appointment List</h4>
      <ul>
        {appointments.map((appointment, key) => {
          return (
          <Tile 
          key={key} 
          description = {appointment.description}
          creation = {appointment.created}
          deadline = {appointment.deadline}
          ></Tile>
          )
        }) 
      }
      </ul>
    </div>
  );
}

export default App;
