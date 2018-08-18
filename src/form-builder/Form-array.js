import React, { Component } from 'react';
import { FieldChooser } from './Field-chooser';

export class FormArray extends Component {
  constructor(props) {
    super(props);
    this.addField = this.addField.bind(this);
    this.removeField = this.removeField.bind(this);
  }

  addField() {
    const newField = Object.assign({}, this.props.array[0]);

    newField.id = this.props.array.length + 1;
    newField.name = newField.name + '-' + newField.id;
    newField.label = newField.label + ' ' + newField.id;
    this.props.addFieldArray(this.props.fieldId, newField);
  }

  removeField() {
    this.props.removeFieldArray(this.props.fieldId);
  }

  render() {
    const btnRemove =
      this.props.array.length > 1 ? (
        <button
          type="button"
          className="btn btn-outline-danger btn-sm mr-2"
          onClick={this.removeField}
        >
          Remove {this.props.array[0].name}
        </button>
      ) : null;

    return (
      <div className="form-group">
        {this.props.array.map(field => {
          return <FieldChooser key={field.id} field={field} />;
        })}
        <div className="text-right">
          {btnRemove}
          <button type="button" className="btn btn-outline-success btn-sm" onClick={this.addField}>
            Add {this.props.array[0].name}
          </button>
        </div>
      </div>
    );
  }
}

export default FormArray;
