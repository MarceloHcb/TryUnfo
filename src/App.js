import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import style from './App.module.css';
import FilterCard from './components/FilterCards';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    this.filterFunction = this.filterFunction.bind(this);
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
      button: false,
      filteredText: '',
      isFilterChecked: '',
      isFilterDisable: false,
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
      cardTrunfo, hasTrunfo, savedCards, filteredText, isFilterChecked } = this.state;
    let button = this.state;
    button = true;
    const newElement = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      filteredText,
      isFilterChecked,
      button };
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

  onDeleteButtonClick({ target }) {
    const { savedCards } = this.state;
    const newSaved = savedCards.filter((item) => item.cardName !== target.name);
    const hasTrunfoSaved = newSaved.some((item) => item.cardTrunfo === true);
    this.setState({
      savedCards: newSaved,
      hasTrunfo: hasTrunfoSaved,
    });
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

  filterFunction({ target }) {
    const { value } = target;
    const { isFilterChecked, isFilterDisable } = this.state;
    const { checked } = target;
    console.log(isFilterChecked);
    console.log(isFilterDisable);
    this.setState({
      filteredText: value === 'todas' ? '' : value,
      isFilterDisable: checked,
      isFilterChecked: checked,
    });
  }

  render() {
    const { savedCards, filteredText, isFilterChecked } = this.state;
    const filterCards = savedCards
      .filter((card) => (isFilterChecked
        ? card.cardTrunfo : card.cardName.includes(filteredText)
    || card.cardRare === filteredText));
    const newDivCard = (
      <div className={ style.allCardsContainer }>
        <h1>Todas as Cartas</h1>
        {filterCards.map((el, index) => (
          <div key={ index } className={ style.cards }>
            <Card
              { ...el }
              onDeleteButtonClick={ this.onDeleteButtonClick }
            />
          </div>))}
      </div>
    );

    return (
      <>
        <FilterCard { ...this.state } filterFunction={ this.filterFunction } />
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
        {savedCards.length > 0
         && newDivCard }
      </>
    );
  }
}

export default App;
