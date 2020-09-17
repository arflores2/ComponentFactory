import { useMemo } from 'react';

import { getLoanStatus } from '../services/loan-status.service';

export const useLoanStatus = (loan) => {
  const loanStatus = useMemo(() => {
    return getLoanStatus(loan)
  }, [loan]);

  return [loanStatus];
};