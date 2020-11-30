import React from 'react';

import './Accordian.css';

const Accordian = (props) => {
  return (
    <div className='accordian__section'>
      <button className='accordian'>
        <p className='accordian__title'>{props.title}</p>
      </button>
      <div className='accordian__content'>
        <div
          className='accordian__content'
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
};

export default Accordian;
