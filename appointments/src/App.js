import './App.css';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions/index.js";
import * as helpers from "./helpers/index.js"
import Tile from "./components/appointmentTile.js"
import { Container } from 'react-bootstrap';

function App() {
  const dispatch = useDispatch()
  const appointments = useSelector(state => state.appointmentsHandler)
  useEffect(() => {
    helpers.fetchAppointments(dispatch)
    console.log(appointments)
  }, [])

  return (
    <div className="App">
      <h4>Appointments App</h4>
      <h5>Fecha:</h5>
      <h5>Appointment List</h5>
      <ul>
        {appointments.map((appointment, key) => {
          return (
            <Container className='d-flex justify-content-center'>
              <Tile
                key={key}
                id={appointment.id}
                description={appointment.description}
                creation={appointment.created}
                deadline={appointment.deadline}
              ></Tile>
            </Container>
          )
        })
        }
      </ul>
    </div>
  );
}

export default App;
