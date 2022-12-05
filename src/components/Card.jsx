import React from 'react';
import PropTypes from 'prop-types';
import style from './Card.module.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      button,
      color,
      onDeleteButtonClick,
    } = this.props;
    return (
      <fieldset className={ style.container } style={ { backgroundColor: color } }>
        <h2 data-testid="name-card">
          <span>
            {' '}
            { cardName }
          </span>
          {' '}
        </h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">
          {' '}
          { cardDescription }
        </p>
        <h2 data-testid="attr1-card">
          Atributo 1 ....................
          {' '}
          { cardAttr1 }
        </h2>
        <h2 data-testid="attr2-card">
          Atributo 2 ....................
          {' '}
          { cardAttr2 }
        </h2>
        <h2 data-testid="attr3-card">
          Atributo 3 ....................
          {' '}
          { cardAttr3 }
        </h2>

        <h3 data-testid="rare-card">{ cardRare }</h3>

        {cardTrunfo && (
          <h2 data-testid="trunfo-card" className={ style.trunfo }>
            Super Trunfo
          </h2>
        )}
        {button && (
          <button
            type="submit"
            data-testid="delete-button"
            name={ cardName }
            className={ style.btn }
            onClick={ onDeleteButtonClick }
          >
            Excluir

          </button>
        )}
      </fieldset>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  button: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default Card;
