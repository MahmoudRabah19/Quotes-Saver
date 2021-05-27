import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const QuoteCard = (props) => {
    const  quote = props.quote;

    return(
        <div className="card-container">
            <div className="desc">
                <h2>
                    <Link to={`/show-quote/${quote._id}`}>
                        { quote.text }
                    </Link>
                </h2>
                <h3>{quote.sayer}</h3>
            </div>
        </div>
    )
};

export default QuoteCard;