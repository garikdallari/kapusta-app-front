import React from 'react';
import IconsSVG from './symbol-defs.svg';

export default function Icons({ name, color, width, height, className }) {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      fill={color}
      width={width}
      height={height}
      pointerEvents="none"
    >
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
}
