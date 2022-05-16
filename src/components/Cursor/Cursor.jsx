import React, { useContext, useEffect } from 'react';
import CursorContext from '../../contexts/CursorContext';
import initCursor from '../../helpers/cursor';
import './Cursor.css';

function Cursor() {
  const color = useContext(CursorContext);
  useEffect(() => {
    initCursor(color);
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

export default Cursor;
