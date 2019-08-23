import React from 'react'
import PropTypes from 'prop-types'

const Appointment = ({ appointment, eraseAppointment }) => (
  <div className='media mt-3'>
    <div className='media-body'>
      <h3 className='mt-0'>{appointment.petsName} </h3>
      <p className='card-text'>
        <span>Owner&apos;s Name:</span> {appointment.ownersName}
      </p>
      <p className='card-text'>
        <span>Date:</span> {appointment.date}
      </p>
      <p className='card-text'>
        <span>Time:</span> {appointment.time}
      </p>
      <p className='card-text'>
        <span>Syntoms:</span>
      </p>
      <p className='card-text'>{appointment.syntoms}</p>
      <button
        className='btn btn-danger'
        onClick={() => eraseAppointment(appointment.id)}
      >
        Erase &times;
      </button>
    </div>
  </div>
)

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  eraseAppointment: PropTypes.func.isRequired
}

export default Appointment
