import React, { Component } from 'react';

export class FormCheckbox extends Component {
  render() {
    const field = this.props.field;

    return (
      <div className="form-check">
        <input
          type={field.type}
          id={field.name + field.id}
          name={field.name}
          className="form-check-input"
          disabled={field.disabled}
          required={field.required}
        />
        <label htmlFor={field.name + field.id} className="form-check-label">
          {field.label}
        </label>
      </div>
    );
  }
}

export default FormCheckbox;
