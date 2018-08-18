import React, { Component } from 'react';

export class FormSelect extends Component {
  render() {
    const field = this.props.field;

    return (
      <div className="form-group">
        <label htmlFor={field.name + field.id}>{field.label}:</label>
        <select
          type={field.type}
          id={field.name + field.id}
          name={field.name}
          placeholder={field.placeholder}
          className="form-control"
          disabled={field.disabled}
          required={field.required}
        >
          {field.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default FormSelect;
