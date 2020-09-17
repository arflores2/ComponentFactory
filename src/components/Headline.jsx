import React from 'react';

export const Headline = ({ title, text }) => {
  return (
    <header>
      <h1>{title}</h1>
      <h2>{text}</h2>
    </header>
  )
};