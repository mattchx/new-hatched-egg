import { useState, useRef } from 'react';

import Chevron from './Chevron';

import './Accordian.css';

const Accordian = (props) => {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('accordian__icon');

  const content = useRef(null);

  const toggleAccordian = () => {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === 'active' ? 'accordian__icon' : 'accordian__icon rotate'
    );
    console.log(content.current.scrollHeight);
    console.log(setRotate);
  };

  return (
    <div className='accordian__section'>
      <button className={`accordian ${setActive}`} onClick={toggleAccordian}>
        <p className='accordian__title'>{props.title}</p>
        <Chevron className={`${setRotate}`} width={'20'} fill={'#777'} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className='accordian__content'
      >
        <div
          className='accordian__content'
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
};

export default Accordian;
