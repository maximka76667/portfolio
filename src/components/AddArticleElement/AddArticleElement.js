import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddArticleElement(props) {
  const { element, index, onTextChange } = props;

  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
    onTextChange(element.type, e.target.value, index);
  }

  return (
    <element.type>
      <input type="text" value={text} onChange={handleChange} />
    </element.type>
  );
}

AddArticleElement.propTypes = {
  element: PropTypes.shape({
    type: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onTextChange: PropTypes.func.isRequired,
};

export default AddArticleElement;
