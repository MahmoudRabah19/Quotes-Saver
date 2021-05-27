import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import QuoteCard from './QuoteCard';

class ShowQuoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/quotes')
      .then(res => {
        this.setState({
          quotes: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowQuoteList');
      })
  };


  render() {
    const quotes = this.state.quotes;
    console.log("PrintQuote: " + quotes);
    let quoteList;

    if(!quotes) {
      quoteList = "there is no quote record!";
    } else {
      quoteList = quotes.map((quote, k) =>
        <QuoteCard quote={quote} key={k} />
      );
    }

    return (
      <div className="ShowQuoteList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Quotes List</h2>
            </div>

            <div className="col-md-11">
            
              <Link to="/create-quote" className="btn btn-outline-warning float-right">
                + Add New Quote
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {quoteList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowQuoteList;