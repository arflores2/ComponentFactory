
import faker from 'faker';

export const getLoan = () => ({
  firstName: faker.name.firstName(),
  originationDate: faker.date.past(),
  firstStatementCycleDatePassed: faker.random.boolean(),
  currentLoanBalance: faker.random.number(),
  loanStatus: faker.random.arrayElement(['in_school', 'working', 'bankruptcy_forbearance']),
});
