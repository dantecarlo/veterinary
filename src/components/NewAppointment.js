import React, { Component } from 'react';

export default class NewAppointment extends Component {
  state = {};
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
                Pet's Name
              </label>
              <div className='col-sm-8 col-lg-10'>
                <input
                  type='text'
                  className='form-control'
                  placeholder="Pet's Name"
                  name='petsName'
                />
              </div>
            </div>

            <div className='form-group'>
              <label className='col-sm-4 col-lg-2 col-form-label'>
                Owner's Name
              </label>
              <div className='col-sm-8 col-lg-10'>
                <input
                  type='text'
                  className='form-control'
                  placeholder="Owner's Name"
                  name='ownersName'
                />
              </div>
            </div>

            <div className='form-group'>
              <label className='col-sm-4 col-lg-2 col-form-label'>Date</label>
              <div className='col-sm-8 col-lg-4'>
                <input type='date' className='form-control' name='date' />
              </div>
              <label className='col-sm-4 col-lg-2 col-form-label'>Time</label>
              <div className='col-sm-8 col-lg-4'>
                <input type='time' className='form-control' name='time' />
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
    );
  }
}
