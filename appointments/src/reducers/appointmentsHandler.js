const appointmentsHandler = (state = [], actions) => {
    switch (actions.type) {
        default:
            return state
        case "get_appointments":
            return state = actions.payload

    }
}

export default appointmentsHandler