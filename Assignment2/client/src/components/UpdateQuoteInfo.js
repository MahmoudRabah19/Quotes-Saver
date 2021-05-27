import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateQuoteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      sayer: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/quotes/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, quote: res.data})
        this.setState({
          text: res.data.text,
          sayer: res.data.sayer
        })
      })
      .catch(err => {
        console.log("Error from UpdateQuoteInfo");
      })
  };

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
      .put('http://localhost:8082/api/quotes/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-quote/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateQuoteInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateQuoteInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Quote List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Quote</h1>
              <p className="lead text-center">
                  Update Quote's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="text">Text</label>
              <input
                type='text'
                placeholder='Quote Text'
                name='text'
                className='form-control'
                value={this.state.text}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="sayer">Sayer</label>
              <input
                type='text'
                placeholder='Sayer'
                name='sayer'
                className='form-control'
                value={this.state.sayer}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Quote</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateQuoteInfo;