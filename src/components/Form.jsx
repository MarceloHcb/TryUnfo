import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form action="">
        <label htmlFor="nameInput">
          <input type="text" id="nameInput" data-testid="name-input" />
        </label>

        <label htmlFor="descriptionInput">
          <textarea
            name=""
            id="descriptionInput"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="atrib1Input">
          <input type="number" name="atrib1Input" id="" data-testid="attr1-input" />
        </label>
        <label htmlFor="atrib1Input">
          <input type="number" name="" id="atrib2Input" data-testid="attr2-input" />
        </label>
        <label htmlFor="atrib3Input">
          <input type="number" name="" id="atrib3Input" data-testid="attr3-input" />
        </label>

        <label htmlFor="imageInput">
          <input type="text" id="imageInput" data-testid="image-input" />
        </label>

        <select name="select" id="selectInput" data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        <label htmlFor="rarityInput">
          <input
            type="checkbox"
            name="rarity"
            id="rarityInput"
            data-testid="trunfo-input"
          />
        </label>

        <button type="submit" data-testid="save-button">Salvar</button>

      </form>
    );
  }
}

export default Form;
