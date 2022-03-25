const appointmentsHandler = (state = [], actions) => {
    switch (actions.type) {
        default:
            return state
        case "get_appointments":
            return state = actions.payload
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