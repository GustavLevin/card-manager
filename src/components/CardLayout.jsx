import React from 'react';

function CardLayout({ issuer, cardNumber, cardholder, expireMonth, expireYear, isActive }) {
  const issuerStyles = {
    Visa: {
      backgroundColor: '#1a1f71', 
      color: '#fff',
    },
    MasterCard: {
      backgroundColor: '#ff5f00',  
      color: '#fff',
    },
    'American Express': {
      backgroundColor: '#2e77bb', 
      color: '#fff',
    },
  };

  const cardStyles = {
    padding: '20px',
    margin: '10px 0',
    borderRadius: '10px',
    textDecoration: 'none',
    width: '300px',
    height: '180px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
    ...issuerStyles[issuer],
  };

  const activeBadgeStyles = {
    padding: '5px',
    backgroundColor: '#28a745',
    color: '#fff',
    borderRadius: '5px',
    marginBottom: '10px',
  };

  return (
    <div className="card" style={cardStyles}>
      {isActive && <div style={activeBadgeStyles}>Active</div>}
      <p>**** **** **** {cardNumber.slice(-4)}</p>
      <p>Cardholder: {cardholder}</p>
      <p>
        Expires: {expireMonth}/{expireYear}
      </p>
    </div>
  );
}

export default CardLayout;
