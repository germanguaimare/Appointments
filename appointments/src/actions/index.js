export const getAppointments = (appointments) => {
    return {
        type: "get_appointments",
        payload: appointments
    }
}

