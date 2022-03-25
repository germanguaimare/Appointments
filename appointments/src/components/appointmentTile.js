import react from "react"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { Card, Row, Button } from "react-bootstrap"
import { useForm } from "react-hook-form";
import * as helpers from "../helpers/index.js"

const Tile = (props) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const itemId = props.id
    const onSubmit = (data) => {
        helpers.postChanges(data, itemId, dispatch)
        setEdit(!edit)
    }
    return (
        <Row className="mb-1 w-50">
            {edit === false ?
                <Card body>
                    <p>Tarea: {props.description}</p>
                    <p>Fecha de Creación: {props.creation}</p>
                    <p>Fecha de Término: {props.deadline}</p>
                    <Button onClick={() => setEdit(!edit)}>Edit</Button>
                </Card>
                :
                <Card body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p>Tarea: <input type='text' placeholder={props.description} {...register("newTask")}/></p>
                        <p>Fecha de Creación: <input type='date' {...register("newCreationDate")}/></p>
                        <p>Fecha de Término: <input type='date' {...register("newDeadline")}/></p>
                        <Button type="submit" >Edit</Button>
                    </form>
                </Card>
            }

        </Row>)
}

export default Tile