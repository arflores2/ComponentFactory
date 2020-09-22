import React from 'react';

import { LOAN_STATUS } from '../services/loan-status.service';

import {
  OnboardingHeadline,
  PaidOffHeadline,
  DefermentHeadline,
  ForbearanceHeadline,
  DefaultHeadline
} from '../components/Headline';

export const serviceStateCopyFactory = (loan, tenant) => (loanStatus) => {
  const lookup = {
    notredame: {
      [LOAN_STATUS.ONBOARDING]: {
        Headline: () => <OnboardingHeadline name={loan.firstName} />,
        Footer: () => <OnboardingFooter name={loan.firstName} />,
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
    },
    tenant: {
      
    }
  };

  return lookup[tenant][loanStatus];
}

