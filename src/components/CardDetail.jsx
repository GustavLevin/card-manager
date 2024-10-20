import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteCard, activateCard, updateCard } from '../reducers/cardSlice';
import Card from './Card'; 

function CardDetail() {
  const { id } = useParams();
  const cardId = parseInt(id, 10);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const card = useSelector((state) =>
    state.cardState.cards.find((card) => card.id === cardId)
  );
  const activeCardId = useSelector((state) => state.cardState.activeCardId);

  const [cardData, setCardData] = useState({ ...card });

  if (!card) {
    return <p>Card not found.</p>;
  }

  const isActive = activeCardId === cardId;
  const isInactive = !isActive;

  const handleActivate = () => {
    if (isInactive) {
      dispatch(activateCard(cardId));
      navigate('/');
    }
  };

  const handleDelete = () => {
    if (isInactive) {
      dispatch(deleteCard(cardId));
      navigate('/');
    }
  };

  const handleReturn = () => {
    navigate('/');
  };

  const handleSave = () => {
    dispatch(updateCard(cardData));
    navigate('/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  return (
    <div className="card-detail">
      <h1>Card Details</h1>

      <Card card={cardData} isActive={isActive} />

      {isInactive ? (
        <>
          <div className="form-container">
            <label>
              Card Number:
              <input
                type="text"
                name="cardNumber"
                value={cardData.cardNumber}
                maxLength="16"
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Cardholder Name:
              <input
                type="text"
                name="cardholder"
                value={cardData.cardholder}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <div className="expiry-group">
              <label>
                Expiry Month (MM):
                <input
                  type="text"
                  name="expireMonth"
                  value={cardData.expireMonth}
                  min="1"
                  max="12"
                  maxLength="2"
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Expiry Year (YYYY):
                <input
                  type="text"
                  name="expireYear"
                  value={cardData.expireYear}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <br />
            <label>
              CCV:
              <input
                type="text"
                name="ccv"
                value={cardData.ccv}
                maxLength="4"
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button className="btn save-btn" onClick={handleSave}>Save Changes</button>
          </div>

          <div className="button-group">
            <button className="btn activate-btn" onClick={handleActivate}>Activate Card</button>
            <button className="btn delete-btn" onClick={handleDelete}>Delete Card</button>
          </div>
        </>
      ) : (
        <>
          <p>This card is active and cannot be modified or deleted.</p>
          <button className="btn return-btn" onClick={handleReturn}>Return to Homepage</button>
        </>
      )}
    </div>
  );
}

export default CardDetail;
