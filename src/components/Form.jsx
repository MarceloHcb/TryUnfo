import React from 'react';
import PropTypes from 'prop-types';

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
    console.log(hasTrunfo);
    return (
      <form action="">
        <label htmlFor="nameInput">
          <input
            type="text"
            id="nameInput"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>

        <label htmlFor="descriptionInput">
          <textarea
            name=""
            id="descriptionInput"
            value={ cardDescription }
            onChange={ onInputChange }
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="atrib1Input">
          <input
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="atrib1Input"
            id=""
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="atrib1Input">
          <input
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name=""
            id="atrib2Input"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="atrib3Input">
          <input
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name=""
            id="atrib3Input"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="imageInput">
          <input
            type="text"
            id="imageInput"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
          />
        </label>

        <select
          name="select"
          id="selectInput"
          value={ cardRare }
          onChange={ onInputChange }
          data-testid="rare-input"
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        <label htmlFor="rarityInput">
          <input
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            name="rarity"
            id="rarityInput"
            data-testid="trunfo-input"
          />
        </label>

        <button
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar

        </button>

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
