import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../reducers/cardSlice';
import { useNavigate } from 'react-router-dom';
import CardPreview from './CardPreview';

function AddCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cards = useSelector((state) => state.cardState.cards);

  const [cardData, setCardData] = useState({
    id: Date.now(),
    issuer: 'Visa',
    cardNumber: '',
    cardholder: '',
    expireMonth: '',
    expireYear: '',
    ccv: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (cards.length >= 4) {
      alert('You can have a maximum of 4 cards.');
      navigate('/');
    }
  }, [cards.length, navigate]);

  const validate = () => {
    const errors = {};
    const currentDate = new Date();
    const expiryDate = new Date(`${cardData.expireYear}-${cardData.expireMonth}-01`);

    if (!/^\d{16}$/.test(cardData.cardNumber)) {
      errors.cardNumber = 'Card number must contain 16 digits.';
    }
    if (
      !/^\d{2}$/.test(cardData.expireMonth) ||
      !/^\d{4}$/.test(cardData.expireYear) ||
      expiryDate <= currentDate
    ) {
      errors.expiryDate = 'Expiry date cannot be in the past and must be valid.';
    }
    if (!cardData.cardholder || /\d/.test(cardData.cardholder)) {
      errors.cardholder = 'Name cannot contain numbers and cannot be empty.';
    }
    if (!/^\d{3,4}$/.test(cardData.ccv)) {
      errors.ccv = 'CCV must be 3 or 4 digits.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(addCard({ ...cardData, id: Date.now() }));
      navigate('/');
    }
  };

  return (
    <div className="add-card">
      <h1>Add New Card</h1>
      <CardPreview cardData={cardData} />
      <form onSubmit={handleSubmit}>
        <label>
          Issuer:
          <select name="issuer" value={cardData.issuer} onChange={handleChange}>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="American Express">American Express</option>
          </select>
        </label>
        <br />
        <label>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            value={cardData.cardNumber}
            onChange={handleChange}
            maxLength="16"
          />
          {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
        </label>
        <br />
        <label>
          Cardholder Name:
          <input
            type="text"
            name="cardholder"
            value={cardData.cardholder}
            onChange={handleChange}
          />
          {errors.cardholder && <p className="error">{errors.cardholder}</p>}
        </label>
        <br />
        <label>
          Expiry Month (MM):
          <input
            type="text"
            name="expireMonth"
            value={cardData.expireMonth}
            onChange={handleChange}
            maxLength="2"
            min="1"
            max="12"
          />
        </label>
        <br />
        <label>
          Expiry Year (YYYY):
          <input
            type="text"
            name="expireYear"
            value={cardData.expireYear}
            onChange={handleChange}
            maxLength="4"
          />
          {errors.expiryDate && <p className="error">{errors.expiryDate}</p>}
        </label>
        <br />
        <label>
          CCV:
          <input
            type="text"
            name="ccv"
            value={cardData.ccv}
            onChange={handleChange}
            maxLength="4"
          />
          {errors.ccv && <p className="error">{errors.ccv}</p>}
        </label>
        <br />
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
}

export default AddCard;