import React, { Component } from 'react'

export default class NewAppointment extends Component {
  state = {
    appointment: {
      petsName: '',
      ownersName: '',
      date: '',
      time: '',
      syntoms: ''
    }
  }

  handleChange = state => {
    this.setState({
      appointment: {
        ...this.state.appointment,
        [state.target.name]: state.target.value
      }
    })
  }

  render() {
    return (
      <div className='card mt-5 py-5'>
        <div className='card-body'>
          <h2 className='card-title text-center mb-5'>
            Fill out the form to create an appointment
          </h2>
          <form>
            <div className='form-group'>
              <label className='col-sm-4 col-lg-2 col-form-label'>
                Pet&apos;s Name
              </label>
              <div className='col-sm-8 col-lg-10'>
                <input
                  type='text'
                  className='form-control'
                  placeholder="Pet's Name"
                  name='petsName'
                  onChange={this.handleChange}
                  value={this.state.appointment.petsName}
                />
              </div>
            </div>

            <div className='form-group'>
              <label className='col-sm-4 col-lg-2 col-form-label'>
                Owner&apos;s Name
              </label>
              <div className='col-sm-8 col-lg-10'>
                <input
                  type='text'
                  className='form-control'
                  placeholder="Owner's Name"
                  name='ownersName'
                  onChange={this.handleChange}
                  value={this.state.appointment.ownersName}
                />
              </div>
            </div>

            <div className='form-group'>
              <label className='col-sm-4 col-lg-2 col-form-label'>Date</label>
              <div className='col-sm-8 col-lg-4'>
                <input
                  type='date'
                  className='form-control'
                  name='date'
                  onChange={this.handleChange}
                  value={this.state.appointment.date}
                />
              </div>
              <label className='col-sm-4 col-lg-2 col-form-label'>Time</label>
              <div className='col-sm-8 col-lg-4'>
                <input
                  type='time'
                  className='form-control'
                  name='time'
                  onChange={this.handleChange}
                  value={this.state.appointment.time}
                />
              </div>
            </div>

            <div className='form-group'>
              <label className='col-sm-4 col-lg-2 col-form-label'>
                Syntoms
              </label>
              <div className='col-sm-8 col-lg-10'>
                <textarea
                  className='form-control'
                  name='syntoms'
                  placeholder='Describe the syntoms'
                  onChange={this.handleChange}
                  value={this.state.appointment.syntoms}
                />
              </div>
            </div>

            <input
              type='submit'
              className='py-3 mt-2 btn btn-success btn-block'
              value='Add new appointment'
            />
          </form>
        </div>
      </div>
    )
  }
}
