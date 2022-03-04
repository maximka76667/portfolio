import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddArticleElement from '../AddArticleElement/AddArticleElement';
import './AddArticle.css';

function AddArticle(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [linkName, setLinkName] = useState('');
  const [elements, setElements] = useState([]);
  const [isAddMenuVisible, setIsAddMenuVisible] = useState(false);
  const [texts, setTexts] = useState([]);

  const { addArticle } = props;

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    addArticle(title, img, description, linkName, texts);
    navigate('/blog');
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
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleImgChange(e) {
    setImg(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleLinkNameChange(e) {
    setLinkName(e.target.value);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input type="text" name="title" className="add-form__input" onChange={handleTitleChange} placeholder="Title" value={title} />
      <input type="text" name="img" className="add-form__input" onChange={handleImgChange} placeholder="Image Link" value={img} />
      <input type="text" name="description" className="add-form__input" onChange={handleDescriptionChange} placeholder="Description" value={description} />
      <input type="text" name="linkName" className="add-form__input" onChange={handleLinkNameChange} placeholder="Link Name" value={linkName} />
      <div className="add-form__content">
        {
          elements.map((element, index) => (

            <AddArticleElement
              // eslint-disable-next-line
              onTextChange={handleTextChange}
              content={element}
              index={index}
              // eslint-disable-next-line
              key={index}
            />
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

AddArticle.propTypes = {
  addArticle: PropTypes.func.isRequired,
};

export default AddArticle;
