import React, { Component } from 'react';
import './App.scss';
import { FormBuilder } from './form-builder/Form-builder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My React Form Builder</h1>
        </header>
        <main className="App-container">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <FormBuilder />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
