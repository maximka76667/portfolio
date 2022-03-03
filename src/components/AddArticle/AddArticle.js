import React, { useState } from 'react';
import './AddArticle.css';

function AddArticle() {
  const [content, setContent] = useState([]);
  const [isAddMenuVisible, setIsAddMenuVisible] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    console.log(content);
  }

  function handleAddElement() {
    setIsAddMenuVisible(!isAddMenuVisible);
  }

  function addElement(type) {
    setContent([...content, { type, text: '' }]);
  }

  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input type="text" name="title" className="add-form__input" placeholder="Title" />
      <div className="add-form__content">
        {content.map((element, index) => (
          // eslint-disable-next-line
          <element.type key={index}>
            <input type="text" onChange={handleChange} />
          </element.type>
        ))}
      </div>
      <button type="button" className="add-form__add-element" onClick={handleAddElement}>+</button>
      <div className={`add-form__add-menu ${isAddMenuVisible ? 'add-form__add-menu_visible' : ''}`}>
        <button className="add-form__add-menu-element" type="button" onClick={() => addElement('h2')}>h2</button>
        <button className="add-form__add-menu-element" type="button" onClick={() => addElement('p')}>p</button>
      </div>
      <button className="add-form__submit" type="submit">Post article</button>
    </form>
  );
}

export default AddArticle;
