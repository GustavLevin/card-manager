import React from 'react';
import { Link } from 'react-router-dom';
import CardLayout from './CardLayout';

function Card({ card, isActive }) {
  return (
    <Link to={`/card/${card.id}`} style={{ textDecoration: 'none' }}>
      <CardLayout 
        issuer={card.issuer} 
        cardNumber={card.cardNumber} 
        cardholder={card.cardholder} 
        expireMonth={card.expireMonth} 
        expireYear={card.expireYear}
        isActive={isActive} 
      />
    </Link>
  );
}

export default Card;
