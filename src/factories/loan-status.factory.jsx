import React from 'react';

import { LOAN_STATUS } from '../services/loan-status.service';

import {
  OnboardingHeadline,
  PaidOffHeadline,
  DefermentHeadline,
  ForbearanceHeadline,
  DefaultHeadline
} from '../components/Headline';

export const loanStatusCopyFactory = (loan) => (loanStatus) => {
  const lookup = {
    [LOAN_STATUS.ONBOARDING]: {
      Headline: () => <OnboardingHeadline name={loan.firstName} />
    },
    [LOAN_STATUS.PAID_OFF]: {
      Headline: () => <PaidOffHeadline name={loan.firstName} />
    },
    [LOAN_STATUS.DEFERMENT]: {
      Headline: () => <DefermentHeadline name={loan.firstName} />
    },
    [LOAN_STATUS.FORBEARANCE]: {
      Headline: () => <ForbearanceHeadline name={loan.firstName} />
    },
    [LOAN_STATUS.UNKNOWN]: {
      Headline: () => <DefaultHeadline name={loan.firstName} />
    }
  };

  return lookup[loanStatus];
}
