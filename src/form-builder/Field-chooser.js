import React, { Component } from 'react';
import { FormInput } from './Form-input';
import { FormSelect } from './Form-select';
import { FormTextarea } from './Form-textarea';
import { FormCheckbox } from './Form-checkbox';

export class FieldChooser extends Component {
  getTag() {
    const field = this.props.field;
    const tag = field.tag.toLowerCase();
    const types = {
      input: <FormInput field={field} />,
      checkbox: <FormCheckbox field={field} />,
      select: <FormSelect field={field} />,
      textarea: <FormTextarea field={field} />,
    };

    let inputToBuild;
    if (field.type === 'checkbox') {
      inputToBuild = types.checkbox;
    } else {
      inputToBuild = types[tag];
    }

    return inputToBuild || null;
  }

  render() {
    return this.getTag();
  }
}

export default FieldChooser;
