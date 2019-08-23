/* eslint-disable react/prop-types */
import React from 'react'
import Appointment from './Appointment'
import PropTypes from 'prop-types'

const AppointmentsList = ({ appointments, eraseAppointment }) => (
  <div className='card mt-2 py-5'>
    <div className='card-body'>
      <h2 className='card-title text-center'>Admin your Appointments here!</h2>

      <div className='lista-citas'>
        {appointments.map(appointment => (
          <Appointment
            key={appointment.id}
            appointment={appointment}
            eraseAppointment={eraseAppointment}
          />
        ))}
      </div>
    </div>
  </div>
)

AppointmentsList.propTypes = {
  appointments: PropTypes.array.isRequired,
  eraseAppointment: PropTypes.func.isRequired
}

export default AppointmentsList
