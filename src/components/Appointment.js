/* eslint-disable react/prop-types */
import React from 'react'

const Appointment = ({ appointment }) => (
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
    </div>
  </div>
)

export default Appointment
