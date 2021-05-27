import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateQuote from './components/CreateQuote';
import ShowQuoteList from './components/ShowQuoteList';
import ShowQuoteDetails from './components/ShowQuoteDetails';
import UpdateQuoteInfo from './components/UpdateQuoteInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowQuoteList} />
          <Route path='/create-quote' component={CreateQuote} />
          <Route path='/edit-quote/:id' component={UpdateQuoteInfo} />
          <Route path='/show-quote/:id' component={ShowQuoteDetails} />
        </div>
      </Router>
    );
  }
}

export default App;