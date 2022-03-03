import React from 'react';
import './AddArticle.css';

function AddArticle() {
  function handleSubmit(e) {
    e.preventDefault();

    alert(e.target[0].value);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input type="text" name="title" className="add-form__input" placeholder="Title" />
      <button className="add-form__submit" type="submit">Post article</button>
    </form>
  );
}

export default AddArticle;
