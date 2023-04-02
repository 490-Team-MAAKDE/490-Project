import React from "react";
import "./Card.css";

const Card = ({ card, onLike }) => {
  return (
    <div className="card">
      <img src={card.imageUrl} alt="Card" />
      <button onClick={() => onLike(card.id)} className="btnLike">
        <i className="fas fa-heart"></i>
        {card.likes}
      </button>
    </div>
  );
};

export default Card;
