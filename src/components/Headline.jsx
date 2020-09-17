import React from 'react';

const Headline = ({ title, text }) => {
  return (
    <header>
      <h1>{title}</h1>
      <h2>{text}</h2>
    </header>
  )
};
Headline.whyDidYouRender = true;
export { Headline };