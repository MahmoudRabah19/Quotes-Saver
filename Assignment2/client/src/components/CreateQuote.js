import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateQuote extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      sayer:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      text: this.state.text,
      sayer: this.state.sayer
    };

    axios
      .post('http://localhost:8082/api/quotes', data)
      .then(res => {
        this.setState({
          text: '',
          sayer:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateQuote!");
      })
  };

  render() {
    return (
      <div className="CreateQuote">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Quote List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Quote</h1>
              <p className="lead text-center">
                  Create a new quote
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Text of the Quote'
                    name='text'
                    className='form-control'
                    value = {this.state.text}
                    onChange = {this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='sayer'
                    name='sayer'
                    className='form-control'
                    value={this.state.sayer}
                    onChange={this.onChange}
                  />
                </div>

             
                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateQuote;