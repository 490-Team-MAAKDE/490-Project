import React, { useState } from "react";
import Card from "../Components/Navbar/Card"; // assuming you have created a Card component
import "./Forum.css";
const Forum = () => {
  // sample data for the cards
  const [cards, setCards] = useState([
    {
      id: 1,
      imageUrl: "https://i.pinimg.com/564x/6a/9a/a8/6a9aa8821738ec43af66b4cb21142bcc.jpg",
      likes: 3
    },
    {
      id: 2,
      imageUrl: "https://i.pinimg.com/564x/a3/6e/55/a36e556bd48401a065e3e4f8100e82f7.jpg",
      likes: 5
    },
    {
      id: 3,
      imageUrl: "https://i.pinimg.com/564x/30/8d/7f/308d7f5a4508d12deaea6033f60e9486.jpg",
      likes: 1
    },
    // more cards can be added here
  ]);

  // function to update the likes of a card
  const handleLike = (id) => {
    const newCards = cards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          likes: card.likes + 1
        };
      } else {
        return card;
      }
    });

    setCards(newCards);
  };

  return (
    <div className="forum">
      {cards.map((card) => (
        <Card key={card.id} card={card} onLike={handleLike} />
      ))}
    </div>
  );
};

export default Forum;
