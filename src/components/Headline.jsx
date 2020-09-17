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

export const OnboardingHeadline = ({ name }) => {
  return (
    <Headline
      title={`Hey ${name}, you're onboarding`}
      text={`Welcome to the family`}
    />
  );
};

export const PaidOffHeadline = ({ name }) => {
  return (
    <Headline
      title={`Hey ${name}, your loan is paid off!`}
      text={`No more payments needed!`}
    />
  );
};

export const DefermentHeadline = ({ name }) => {
  return (
    <Headline
      title={`Hey ${name}, we'll wait on you.`}
      text={`Take as long as you want`}
    />
  );
};

export const ForbearanceHeadline = ({ name }) => {
  return (
    <Headline
      title={`Hey ${name}, better luck next time.`}
      text={`We can help you.`}
    />
  );
};

export const DefaultHeadline = ({ name }) => {
  return (
    <Headline
      title={`Hey ${name}, we don't know about you.`}
      text={`Let's get more information`}
    />
  );
};
