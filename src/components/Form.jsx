import React from 'react';
import PropTypes from 'prop-types';
import style from './Form.module.css';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    const nohas = (
      <label htmlFor="rarityInput">
        Super Trybe Trunfo
        <input
          type="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          name="cardTrunfo"
          id="rarityInput"
          data-testid="trunfo-input"
        />
      </label>
    );
    const has = (
      <label htmlFor="rarityInput">
        Você já tem um Super Trunfo em seu baralho
        <input
          type="checkbox"
          disabled
          checked={ cardTrunfo }
          onChange={ onInputChange }
          name="cardTrunfo"
          id="rarityInput"
          className={ style.rarityInput }
          data-testid="trunfo-input"
        />
      </label>
    );

    return (
      <form action="" className={ style.formContainer }>
        <div className={ style.background } />
        <h2>ADICIONE UMA NOVA CARTA</h2>
        <label htmlFor="nameInput">
          Nome:
          <input
            type="text"
            id="nameInput"
            name="cardName"
            className={ style.nameInput }
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>

        <label htmlFor="descriptionInput">
          Descrição
          <textarea
            name="cardDescription"
            id="descriptionInput"
            className={ style.descriptionInput }
            value={ cardDescription }
            onChange={ onInputChange }
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="atrib1Input">
          Attr01
          <input
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="cardAttr1"
            id=""
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="atrib1Input">
          Attr02
          <input
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="cardAttr2"
            id="atrib2Input"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="atrib3Input">
          Attr03
          <input
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="cardAttr3"
            id="atrib3Input"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="imageInput">
          Imagem
          <input
            type="text"
            id="imageInput"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="selectInput">
          Raridade
          <select
            name="cardRare"
            id="selectInput"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="colorInput">
          Cor
          <input type="color" name="color" id="colorInput" onChange={ onInputChange } />
        </label>
        <div className={ style.checkbox }>

          {!hasTrunfo
          && nohas}

          {hasTrunfo
          && has}

          <button
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar

          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
