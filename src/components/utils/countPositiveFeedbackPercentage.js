import { countTotalFeedback } from './countTotalFeedback';
export const countPositiveFeedbackPercentage = (state, good) => {
  const total = countTotalFeedback(state);
  let result = 0;

  if (total !== 0) {
    result = (good * 100) / total;
  }
  return Math.round(result);
};
