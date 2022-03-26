import react from "react"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { Card, Row, Button } from "react-bootstrap"
import { useForm } from "react-hook-form";
import * as helpers from "../helpers/index.js"

const Tile = (props) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const itemId = props.id
    const dateFormatter = (date) => {return date.substr(9,1).padStart(2,0) + "-" + date.substr(6,1).padStart(2,0)}
    const onSubmit = (data) => {
        helpers.putChanges(data, itemId, dispatch)
        setEdit(!edit)
    }
    
    return (
        <Row className="mb-1 w-50">
            {edit === false ?
                <Card body>
                    <Button onClick={() => {helpers.deleteAppointment(itemId, dispatch)}}>Delete Appointment</Button>
                    <p>Tarea: {props.description}</p>
                    <p>Fecha de Creación: {props.creation}</p>
                    <p>Fecha de Término: {dateFormatter(props.deadline)}</p>
                    <Button onClick={() => setEdit(!edit)}>Edit</Button>
                </Card>
                :
                <Card body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p>Tarea: <input type='text' placeholder={props.description} {...register("newTask", { required: true })}/> {errors.newTask?.type === 'required' && <p>"New task description required"</p>}</p>
                        <p>Fecha de Término: <input type='date' placeholder={props.deadline} {...register("newDeadline")}/></p>
                        <p><Button type="submit">Edit</Button><Button onClick={() => {setEdit(!edit)}}>Discard changes</Button></p>
                    </form>
                </Card>
            }

        </Row>)
}

export default Tile