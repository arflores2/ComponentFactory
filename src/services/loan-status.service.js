export const LOAN_STATUS = {
  ONBOARDING: 'ONBOARDING',
  PAID_OFF: 'PAID_OFF',
  DEFERMENT: 'DEFERMENT',
  FORBEARANCE: 'FORBEARANCE',
  UNKNOWN: 'UNKNOWN'
}

const isOnboarding = (loan) =>
  Boolean(!loan.firstStatementCycleDatePassed);

const isPaidOff = (loan) => loan.currentLoanBalance <= 0;

const isDeferment = (loan) =>
  ['in_school'].includes(loan.loanStatus);

const isForbearance = (loan) =>
  ['bankruptcy_forbearance'].includes(loan.loanStatus)

const decisionTreeConfig = new Map([
  [isOnboarding, [isPaidOff, LOAN_STATUS.ONBOARDING]],
  [isPaidOff, [isDeferment, LOAN_STATUS.PAID_OFF]],
  [isDeferment, [isForbearance, LOAN_STATUS.DEFERMENT]],
  [isForbearance, [LOAN_STATUS.UNKNOWN, LOAN_STATUS.FORBEARANCE]]
]);

export const getLoanStatus = (loan, currentQuestion = isOnboarding, decisionTree = decisionTreeConfig) => {
  const answer = decisionTree.get(currentQuestion);

  if (!answer) {
    throw new Error(
      `The current predicate does not exist in the map as a
        key, check your configuration to make sure all of
        the predicates mentioned in the configuration also
        exist as keys.`,
    );
  }

  const response = currentQuestion(loan) ? answer[1] : answer[0];

  if (typeof response === 'string') {
    return response;
  }

  return getLoanStatus(loan, response);
}