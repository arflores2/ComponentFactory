import { useLoanStatus } from './useLoanStatus';
import { loanStatusCopyFactory } from '../factories/loan-status.factory';

export const useLoanHeaderCopy = (loan) => {
  const [ loanStatus ] = useLoanStatus(loan);
  const { title, headlineSubtext } = loanStatusCopyFactory[loanStatus]

  return [
    title(loan.firstName, loan.originationDate),
    headlineSubtext(loan.currentLoanBalance, loan.originationDate)
  ]
};
