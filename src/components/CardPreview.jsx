import React from 'react';
import CardLayout from './CardLayout';

function CardPreview({ cardData }) {
  return (
    <CardLayout
      issuer={cardData.issuer}
      cardNumber={cardData.cardNumber || '**** **** **** ****'}
      cardholder={cardData.cardholder || 'John Doe'}
      expireMonth={cardData.expireMonth || 'MM'}
      expireYear={cardData.expireYear || 'YY'}
      isActive={false} 
    />
  );
}

export default CardPreview;
