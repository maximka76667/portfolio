import React, { useState } from 'react';
import AddArticleElement from '../AddArticleElement/AddArticleElement';
import './AddArticle.css';

function AddArticle() {
  const [elements, setElements] = useState([]);
  const [isAddMenuVisible, setIsAddMenuVisible] = useState(false);
  const [texts, setTexts] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    console.log(texts);
  }

  function handleAddElement() {
    setIsAddMenuVisible(!isAddMenuVisible);
  }

  function addElement(type) {
    setElements([...elements, { type }]);
  }

  function handleTextChange(element, text, index) {
    const newTexts = texts;
    newTexts[index] = { element, text };
    setTexts(newTexts);
    console.log(newTexts);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input type="text" name="title" className="add-form__input" placeholder="Title" />
      <div className="add-form__content">
        {
          elements.map((element, index) => (
            // eslint-disable-next-line
            <AddArticleElement onTextChange={handleTextChange} element={element} index={index} key={index} />
          ))
        }
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
