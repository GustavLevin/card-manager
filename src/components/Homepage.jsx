import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import { Link } from 'react-router-dom';

function Homepage() {
  const cards = useSelector((state) => state.cardState.cards);
  const activeCardId = useSelector((state) => state.cardState.activeCardId);

  const activeCard = cards.find((card) => card.id === activeCardId);
  const inactiveCards = cards.filter((card) => card.id !== activeCardId);

  return (
    <div className="homepage">
      <h1>My Cards</h1>

      {activeCard && (
        <div>
          <h2>Active Card</h2>
          <Card card={activeCard} isActive />
        </div>
      )}

      {inactiveCards.length > 0 && (
        <>
          <h2>Inactive Cards</h2>
          <div className="card-list">
            {inactiveCards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </>
      )}

      <div style={{ marginTop: '20px' }}>
        <Link to="/addcard">
          <button>Add New Card</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
