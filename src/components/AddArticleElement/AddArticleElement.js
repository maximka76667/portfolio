import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddArticleElement(props) {
  const { content, index, onTextChange } = props;

  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
    onTextChange(content.type, e.target.value, index);
  }

  return (
    <content.type>
      <input type="text" value={text} onChange={handleChange} />
    </content.type>
  );
}

AddArticleElement.propTypes = {
  content: PropTypes.shape({
    type: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onTextChange: PropTypes.func.isRequired,
};

export default AddArticleElement;
