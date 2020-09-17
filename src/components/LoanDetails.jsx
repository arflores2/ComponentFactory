import React, { useState } from 'react';

import { getLoan } from '../services/loan.service';

import { useLoanHeader } from '../hooks/useLoanCopy';

const LoanDetails = () => {
  const [loan, setLoan] = useState(getLoan())

  const { Headline } = useLoanHeader(loan);

  return (
    <div>
      <Headline />
    </div>
  );
}

LoanDetails.whyDidYouRender = true;

export { LoanDetails };


