import { LOAN_STATUS } from '../services/loan-status.service';

import {
  OnboardingHeadline,
  PaidOffHeadline,
  DefermentHeadline,
  ForbearanceHeadline,
  DefaultHeadline
} from '../components/Headline';

export const loanStatusCopyFactory = {
  [LOAN_STATUS.ONBOARDING]: {
    Headline: OnboardingHeadline
  },
  [LOAN_STATUS.PAID_OFF]: {
    Headline: PaidOffHeadline 
  },
  [LOAN_STATUS.DEFERMENT]: {
    Headline: DefermentHeadline 
  },
  [LOAN_STATUS.FORBEARANCE]: {
    Headline: ForbearanceHeadline 
  },
  [LOAN_STATUS.UNKNOWN]: {
    Headline: DefaultHeadline
  }
}
