import React from 'react';
import Card from './Card';

function CardList({ cards, onSelect, onTextChange, step }) {
  return (
    <div>
      {cards.map((card, index) => (
        <Card
          step = {step}
          key={index}
          heading={card.heading}
          isChecked={card.isChecked}
          onCheck={() => onSelect(index)}
          textValue={card.textValue}
          onTextChange={value => onTextChange(index, value)}
        />
      ))}
    </div>
  );
}

export default CardList;
