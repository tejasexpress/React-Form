import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardList from './CardList';
import './styles.css'

function MultiStepForm({ searchTerm }) {
  const [step, setStep] = useState(1);
  const [cards, setCards] = useState(
    Array(10).fill().map((_, i) => ({ heading: `Card ${i + 1}`, isChecked: false, textValue: '' }))
  );
  const [selectedIndicesStep1, setSelectedIndicesStep1] = useState([]);
  const [selectedIndicesStep2, setSelectedIndicesStep2] = useState([]);
  const [textValuesStep2, setTextValuesStep2] = useState([]);
  const [finalText, setFinalText] = useState('');

  const navigate = useNavigate();

  const handleSelectStep1 = (index) => {
    const newCards = [...cards];
    newCards[index].isChecked = !newCards[index].isChecked;
    setCards(newCards);
  };

  const handleSelectStep2 = (index) => {
    const idx = selectedIndicesStep1[index];
    const newCards = [...cards];
    newCards[idx].isChecked = !newCards[idx].isChecked;
    setCards(newCards);
  };

  const handleTextChangeStep1 = (index, value) => {
    const newCards = [...cards];
    newCards[index].textValue = value;
    setCards(newCards);
  };

  const handleTextChangeStep2 = (index, value) => {
    const newTextValues = [...textValuesStep2];
    newTextValues[index] = value;
    setTextValuesStep2(newTextValues);
  };

  const handleNext = () => {
    if (step === 1 && cards.filter(card => card.isChecked).length === 3) {
      setSelectedIndicesStep1(cards.map((card, idx) => card.isChecked ? idx : -1).filter(idx => idx !== -1));
      setStep(2);
    } else if (step === 2 && selectedIndicesStep1.map(idx => cards[idx]).filter(card => card.isChecked).length === 2) {
      setSelectedIndicesStep2(selectedIndicesStep1.map((idx, i) => cards[idx].isChecked ? i : -1).filter(i => i !== -1));
      setStep(3);
    }
    else if (step === 1 && cards.filter(card => card.isChecked).length !== 3) {
      alert('Please select 3 cards');
    }
    else if (step === 2 && selectedIndicesStep1.map(idx => cards[idx]).filter(card => card.isChecked).length !== 2) {
      alert('Please select 2 cards');
    }
  };

  const handleSubmit = () => {
    const cardsFromStep1 = selectedIndicesStep1.map(idx => cards[idx]);
    const cardsFromStep2 = selectedIndicesStep2.map(i => ({ ...cards[selectedIndicesStep1[i]], textValue: textValuesStep2[i] }));
    console.log({
      searchTerm,
      cardsFromStep1,
      cardsFromStep2,
      finalText
    });
    const dataToSend = {
      searchTerm : searchTerm,
      cardsFromStep1 : cardsFromStep1,
      cardsFromStep2 : cardsFromStep2,
      finalText : finalText
    }
    navigate('/success',{
        state: { data: dataToSend }
      });
  };

  return (
    <div>
      <div className="progressbar">
        <div
          style={{ width: step === 1 ? "33.3%" : step == 2 ? "66.6%" : "100%" }}
        ></div>
      </div>
      {step === 1 && <CardList cards={cards} onSelect={handleSelectStep1} onTextChange={handleTextChangeStep1} step = {step} />}
      {step === 2 && <CardList step = {step} cards={selectedIndicesStep1.map((idx, i) => ({ ...cards[idx], textValue: textValuesStep2[i] !== undefined ? textValuesStep2[i] : cards[idx].textValue }))} onSelect={handleSelectStep2} onTextChange={handleTextChangeStep2} />}
      {step === 3 && (
        <div>
          <CardList step = {step} cards={selectedIndicesStep2.map(i => cards[selectedIndicesStep1[i]])} onSelect={() => {}} onTextChange={() => {}} />
          <textarea value={finalText} onChange={(e) => setFinalText(e.target.value)} />
          <button className='custom-btn btn-1' onClick={handleSubmit}>Submit</button>
        </div>
      )}
      {(step === 1 || step === 2) && (
        <button className='custom-btn btn-1' onClick={handleNext}>Next</button>
      )}
    </div>
  );
}

export default MultiStepForm;
