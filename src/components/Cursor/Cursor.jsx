import { string } from 'prop-types';
import React, { useEffect } from 'react';
import initCursor from '../../helpers/cursor';
import './Cursor.css';

function Cursor(props) {
  const { color } = props;
  useEffect(() => {
    if (color) {
      initCursor(color);
    }
  }, [color]);

  return (
    <>
      <div className="cursor-wrapper">
        <div className="custom-cursor custom-cursor__outer">
          <div className="custom-cursor custom-cursor__inner" />
        </div>
      </div>
      <canvas className="cursor cursor__canvas" />
    </>
  );
}

Cursor.propTypes = {
  color: string.isRequired,
};

export default Cursor;
