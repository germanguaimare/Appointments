import react from "react"
import {Card} from "react-bootstrap"

const Tile = (props) => {
    return  <Card body>Tarea: {props.description}, Fecha de Creación: {props.creation}, Fecha de Término: {props.deadline}</Card>
}

export default Tile