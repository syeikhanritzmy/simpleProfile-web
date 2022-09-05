import React from 'react';
import { Link } from 'react-router-dom';

function TextLink({ path, customClass, namePath }) {
  return (
    <div>
      <Link to={path} className={`${customClass} `}>
        {namePath}{' '}
      </Link>
    </div>
  );
}

export default TextLink;
