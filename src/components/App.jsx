import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { countTotalFeedback } from './utils/countTotalFeedback';
import { countPositiveFeedbackPercentage } from './utils/countPositiveFeedbackPercentage';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedBtnClick = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onFeedBtnClick}
            options={['good', 'neutral', 'bad']}
          />
        </Section>

        <Section title="Statistics">
          {good === 0 && neutral === 0 && bad === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback(this.state)}
              positivePercentage={countPositiveFeedbackPercentage(
                this.state,
                good
              )}
            />
          )}
        </Section>
      </>
    );
  }
}
