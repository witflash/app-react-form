import React, { Component } from 'react';

export class FormInput extends Component {
  render() {
    const field = this.props.field;

    return (
      <div className="form-group">
        <label htmlFor={field.name + field.id}>{field.label}:</label>
        <input
          type={field.type}
          id={field.name + field.id}
          name={field.name}
          placeholder={field.placeholder}
          className="form-control"
          disabled={field.disabled}
          required={field.required}
        />
      </div>
    );
  }
}

export default FormInput;
