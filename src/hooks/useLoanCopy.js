import { useLoanStatus } from './useLoanStatus';
import { loanStatusCopyFactory } from '../factories/loan-status.factory';

export const useLoanHeader = (loan) => {
  const [ loanStatus ] = useLoanStatus(loan);
  return loanStatusCopyFactory[loanStatus]
};
