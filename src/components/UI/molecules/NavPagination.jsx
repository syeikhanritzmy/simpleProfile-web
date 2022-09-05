import React from 'react';
import TextLink from '../atoms/TextLink';
function NavPagination({ namePath, path, customClass }) {
  return (
    <div className={`${customClass} uppercase font-mono text-sm `}>
      <TextLink namePath={namePath} path={path} />
    </div>
  );
}

export default NavPagination;
