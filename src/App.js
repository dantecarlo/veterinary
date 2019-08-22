import React, { Component } from 'react'
import './bootstrap.min.css'
import Header from './components/Header'
import NewAppointment from './components/NewAppointment'
import AppointmentsList from './components/AppointmentsList'

export default class App extends Component {
  state = {
    appointments: []
  }

  createNewAppointment = data => {
    const appointments = [...this.state.appointments, data]
    this.setState({
      appointments
    })
  }

  render() {
    return (
      <div className='container'>
        <Header title='Admin Page' />

        <div className='row'>
          <div className='col-md-10 mx-auto'>
            <NewAppointment createNewAppointment={this.createNewAppointment} />
          </div>

          <div className='mt-5 col-md-10 mx-auto'>
            <AppointmentsList appointments={this.state.appointments} />
          </div>
        </div>
      </div>
    )
  }
}
