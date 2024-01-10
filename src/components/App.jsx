import { Component } from 'react';
import styles from './FeedbackOptions/feedback-options.module.css';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import { Notification } from './Notifications/Notifications';

class App extends Component {
  static buttonsList = ['Good', 'Neutral', 'Bad'];

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const { good } = this.state;
    return Number(((good / total) * 100).toFixed());
  }

  onLeaveFeedback = keyName => {
    this.setState(prevState => ({
      [keyName]: prevState[keyName] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const feedbackPositivePercent = this.countPositiveFeedbackPercentage();

    return (
      <div className={styles.wrapper}>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={App.buttonsList}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={feedbackPositivePercent}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
