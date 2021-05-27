import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showQuoteDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/quotes/' + this.props.match.params.id)
      .then(res => {
        // console.log("Print-showQuoteDetails-API-response: " + res.data);
        this.setState({
          quote: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowQuoteDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/quotes/'+ id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowQuoteDetails_deleteClick");
      })
  };


  render() {

    const quote = this.state.quote;
    let QuoteItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            
            <td>Text :</td>
            <td>{ quote.text }</td>
          </tr>
          <tr>
            
            <td>Sayer :</td>
            <td>{ quote.sayer }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowQuoteDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Quote List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Quote's Record</h1>
              <p className="lead text-center">
                  View Qoute's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { QuoteItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,quote._id)}>Delete Quote</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-quote/${quote._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Quote
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Quote</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Quote</button> */}

        </div>
      </div>
    );
  }
}

export default showQuoteDetails;