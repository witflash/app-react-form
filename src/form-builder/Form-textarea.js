import React, { Component } from 'react';

export class FormTextarea extends Component {
  render() {
    const field = this.props.field;

    return (
      <div className="form-group">
        <label htmlFor={field.name + field.id}>{field.label}:</label>
        <textarea
          id={field.name + field.id}
          name={field.name}
          placeholder={field.placeholder || null}
          rows={field.rows}
          className="form-control"
          disabled={field.disabled}
          required={field.required}
        />
      </div>
    );
  }
}

export default FormTextarea;
