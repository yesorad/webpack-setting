import React from 'react';
import '@styles/style.scss';
import reactSvg from '@images/react.svg';

const Test = ({ title }) => {
  return (
    <section className="container">
      <h1 className="title">{title}</h1>
      <img src={reactSvg} alt="reactImg" className="reactImg" />
    </section>
  );
};

export default Test;
