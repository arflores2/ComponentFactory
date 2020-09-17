import React from 'react';

import { getLoan } from '../services/loan.service';

import { useLoanHeader } from '../hooks/useLoanCopy';

export const LoanDetails = () => {
  const loan = getLoan();
  const { Headline } = useLoanHeader(loan);

  return (
    <div>
      <Headline name={loan.firstName} />
    </div>
  );
}

