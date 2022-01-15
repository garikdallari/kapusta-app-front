import React from 'react';
import IconsSVG from './symbol-defs.svg';

function Icons({ name, color, width, height, className }) {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      fill={color}
      width={width}
      height={height}
    >
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
}

export default Icons;
