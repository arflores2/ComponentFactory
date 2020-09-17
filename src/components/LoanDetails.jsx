import React from 'react';

import { getLoan } from '../services/loan.service';

import { useLoanHeaderCopy } from '../hooks/useLoanCopy';

import { Headline } from './Headline';

export const LoanDetails = () => {
  const loan = getLoan();
  const [ title, text ] = useLoanHeaderCopy(loan);

  return (
    <div>
      <Headline title={title} text={text} />
    </div>
  );
}