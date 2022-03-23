const appointmentsHandler = (state = [{"id": 0, "description":"Sample Appointment"}], actions) => {
    switch (actions.type) {
        default:
            return state
        case "get_appointments":
            return state.concat(actions.payload)
            /*

        case "delete_task":
            return state.filter(key => key != action.payload)
        case "edit_task":
                let toEdit = document.getElementById(action.payload)
                let newItem = document.createElement('text_input')
                newItem.textContent = "Probando"
            return toEdit.replaceChild(newItem, toEdit)
        */
    }
}

export default appointmentsHandler