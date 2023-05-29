export const countTotalFeedback = state => {
  const stateValues = Object.values(state);
  const totalFeedbacks = stateValues.reduce((acc, value) => {
    return acc + value;
  }, 0);

  return totalFeedbacks;
};
