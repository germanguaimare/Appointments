import react from "react"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { Card, Row, Button } from "react-bootstrap"
import { useForm } from "react-hook-form";
import * as helpers from "../helpers/index.js"

const NewAppointmentTile = (props) => {

    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        helpers.addAppointment(data, dispatch)
        props.setNewAppointment(false)
    }

    return (
        <Card body className="w-50">
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Tarea: <input type='text' placeholder="New task description" {...register("newAppointment", { required: true })} /> {errors.newTask?.type === 'required' && <p>"New task description required"</p>}</p>
                <p>Fecha de Término: <input type='date' {...register("newDeadline", { required: true })} /></p>
                <p><Button type="submit">Save</Button><Button onClick={() => { props.setNewAppointment(false) }}>Discard</Button></p>
            </form>
        </Card>)
}

export default NewAppointmentTile

