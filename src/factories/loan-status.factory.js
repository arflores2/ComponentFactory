import { LOAN_STATUS } from '../services/loan-status.service';

export const loanStatusCopyFactory = {
  [LOAN_STATUS.ONBOARDING]: {
    title: (name, date) => `Hey ${name}, your onboarding`,
    headlineSubtext: (amount, date) => `Make your first payment`
  },
  [LOAN_STATUS.PAID_OFF]: {
    title: (name, date) => `Hey ${name}, your loan is paid off!`,
    headlineSubtext: (amount, date) => `No more payments needed!`
  },
  [LOAN_STATUS.DEFERMENT]: {
    title: (name, date) => `Hey ${name}, we'll wait on you.`,
    headlineSubtext: (amount, date) => `Take as long as you want`
  },
  [LOAN_STATUS.FORBEARANCE]: {
    title: (name, date) => `Hey ${name},
    better luck next time.`,
    headlineSubtext: (amount, date) => `We can help you.`
  },
  [LOAN_STATUS.UNKNOWN]: {
    title: (name, date) => `Hey ${name}, we don't know about you.`,
    headlineSubtext: (amount, date) => `Let's get more information`
  }
}
