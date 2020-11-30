import React from 'react';

import './Accordian.css';

const Chevron = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill={props.fill}
      width={props.width}
      height={props.height}
      className={props.className}
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
    </svg>
  );
};

export default Chevron;
