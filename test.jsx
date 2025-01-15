import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-img" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          description={card.description} 
          imageSrc={card.imageSrc} 
        />
      ))}
    </div>
  );
};

export default CardList;

