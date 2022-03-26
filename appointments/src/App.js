import './App.css';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions/index.js";
import * as helpers from "./helpers/index.js"
import Tile from "./components/appointmentTile.js"
import { Container, Button } from 'react-bootstrap';
import NewAppointmentTile from './components/newAppointment';

function App() {
  const dispatch = useDispatch()
  const appointments = useSelector(state => state.appointmentsHandler)
  const [newAppointment, setNewAppointment] = useState(false)
  useEffect(() => {
    helpers.fetchAppointments(dispatch)
  }, [])

  return (
    <div className="App">
      <h4>Appointments App</h4>
      <p>Fecha: {helpers.getDate()}</p>
      <p><strong>Appointment List</strong></p>
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
      <Container className='d-flex justify-content-center'>
        <Button onClick={() => { setNewAppointment(true) }}>Add new appointment</Button>
        {newAppointment ? <NewAppointmentTile setNewAppointment={setNewAppointment} /> : ""}
      </Container>
    </div>
  );
}

export default App;
