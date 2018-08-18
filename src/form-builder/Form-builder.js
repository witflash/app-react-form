import React, { Component } from 'react';
import Api from '../services/Api';
import FieldChooser from './Field-chooser';
import { FormSubmit } from './Form-submit';
import { FormArray } from './Form-array';

export class FormBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formFields: [],
    };

    this.api = new Api('http://localhost:3003/form-fields');
    this.formSubmit = this.formSubmit.bind(this);
    this.addFieldArray = this.addFieldArray.bind(this);
    this.removeFieldArray = this.removeFieldArray.bind(this);
  }

  componentDidMount() {
    this.api.getFields().then(response => {
      console.log(response.data);
      this.setState({ formFields: response.data });
    });
  }

  formSubmit(e) {
    const data = new FormData(e.target);
    const values = [];

    e.preventDefault();

    for (let value of data.values()) {
      values.push(value);
    }

    console.log(values);
  }

  addFieldArray(id, newField) {
    const formFields = this.state.formFields;

    formFields[id].arrayFields.push(newField);
    this.setState(formFields);
  }

  removeFieldArray(id) {
    const formFields = this.state.formFields;

    formFields[id].arrayFields.pop();
    this.setState(formFields);
  }

  render() {
    return (
      <form className="form" onSubmit={this.formSubmit}>
        {this.state.formFields.map((field, index) => {
          if (field.array) {
            return (
              <FormArray
                key={field.id}
                array={field.arrayFields}
                fieldId={index}
                addFieldArray={this.addFieldArray}
                removeFieldArray={this.removeFieldArray}
              />
            );
          }
          return <FieldChooser key={field.id} field={field} />;
        })}
        <FormSubmit />
      </form>
    );
  }
}

export default FormBuilder;
