import React from 'react';
import './styles.css'

function Card({ heading, isChecked, onCheck, textValue, onTextChange, step }) {
  return (
    <div className="cardsstyle">
        <div className='card-left'>
            <h3 className='card-heading'>{heading}</h3>
            <a href="#" className='card-link'>Link</a>
        </div>
      <div className='card-right'>
      {step !== 3 && (
        <input
        type="checkbox"
        className='card-checkbox'
        checked={isChecked}
        onChange={onCheck}
      />)}
      {step != 3 && isChecked && (
        <textarea
          className='card-input'
          value={textValue}
          onChange={e => onTextChange(e.target.value)}
          placeholder="Enter reason..."
        />
      )}
      </div>

    </div>
  );
}

export default Card;
