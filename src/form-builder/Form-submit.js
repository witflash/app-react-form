import React, { Component } from 'react';

export class FormSubmit extends Component {
  render() {
    return (
      <div className="row justify-content-center mt-4">
        <div className="col-6">
          <button type="submit" className="btn btn-primary btn-block">
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default FormSubmit;
