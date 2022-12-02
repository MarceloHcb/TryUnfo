import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import style from './App.module.css';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    const INITIAL_STATE = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };
    this.state = {
      ...INITIAL_STATE,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validationButton);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, savedCards } = this.state;
    const newElement = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo };
    const result = savedCards.some((el) => el.cardTrunfo === true) || cardTrunfo === true;
    this.setState(() => ({
      savedCards: [...savedCards, newElement],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: result,
      isSaveButtonDisabled: true,
    }));
  }

  validationButton = () => {
    const { cardName, cardImage, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardRare } = this.state;
    const nameValidation = cardName.length > 0;
    const imageValidation = cardImage.length > 0;
    const cardRareValidation = cardRare.length > 0;
    const descriptionValidation = cardDescription.length > 0;
    const maxNumber = 90;
    const maxSumNumber = 210;
    const cardAttrValidation = parseFloat(cardAttr1)
    <= maxNumber && parseFloat(cardAttr1) >= 0
    && parseFloat(cardAttr2) <= maxNumber && parseFloat(cardAttr2) >= 0
    && parseFloat(cardAttr3) <= maxNumber && parseFloat(cardAttr3) >= 0;

    const atribSumValidation = parseFloat(cardAttr1)
     + parseFloat(cardAttr2) + parseFloat(cardAttr3) <= maxSumNumber;

    this.setState({
      isSaveButtonDisabled: !(nameValidation
        && imageValidation && descriptionValidation
        && cardAttrValidation && atribSumValidation
         && cardRareValidation),
    });
  };

  render() {
    return (
      <>
        <h1>Tryunfo</h1>
        <div className={ style.container }>
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
        </div>
      </>
    );
  }
}

export default App;
