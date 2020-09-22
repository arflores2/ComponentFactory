import React, { useState } from 'react';

import { getLoan } from '../services/loan.service';

import { useLoanCopy } from '../hooks/useLoanCopy';

const LoanDetails = () => {
  // data fetching, i.e. useQuery
  const [loan, setLoan] = useState(getLoan())

  const { Headline, Footer } = useLoanCopy(loan);

  return (
    <div>
      <Headline />
      <Footer />
    </div>
  );
}

LoanDetails.whyDidYouRender = true;

export { LoanDetails };


