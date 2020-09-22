import { useTenant } from './useTenant';
import { useLoanStatus } from './useLoanStatus';
import { loanStatusCopyFactory } from '../factories/loan-status.factory';

export const useLoanCopy = (loan) => {
  // get tenant string
  const tenant = useTenant();
  const [ loanStatus ] = useLoanStatus(loan);
  return loanStatusCopyFactory(loan, tenant)(loanStatus);
};
