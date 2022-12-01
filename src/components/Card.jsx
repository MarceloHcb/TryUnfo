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
    } = this.props;
    return (
      <fieldset className={ style.container }>
        <h2 data-testid="name-card">
          { cardName }
          {' '}
        </h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">
          {' '}
          { cardDescription }
        </p>
        <h2 data-testid="attr1-card">{ cardAttr1 }</h2>
        <h2 data-testid="attr2-card">{ cardAttr2 }</h2>
        <h2 data-testid="attr3-card">{ cardAttr3 }</h2>

        <h3 data-testid="rare-card">{ cardRare }</h3>

        {cardTrunfo && (
          <h2 data-testid="trunfo-card">
            Super Trunfo
          </h2>
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
};

export default Card;
