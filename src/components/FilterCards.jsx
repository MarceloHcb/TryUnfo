import React from 'react';
import PropTypes from 'prop-types';
import style from './FilterCard.module.css';

class FilterCard extends React.Component {
  render() {
    const {
      filterFunction,
    } = this.props;
    return (
      <fieldset className={ style.container }>
        <label htmlFor="name-filter-input">
          Filtrar por nome:
          <input
            type="text"
            id="name-filter-input"
            data-testid="name-filter"
            onChange={ filterFunction }
          />
        </label>
      </fieldset>
    );
  }
}

FilterCard.propTypes = {
  filterFunction: PropTypes.func.isRequired,
};

export default FilterCard;
