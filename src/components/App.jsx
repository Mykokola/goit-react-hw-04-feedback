import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions ';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addReviews = elem => {
    this.setState(prevState => ({ [elem]: (prevState[elem] += 1) }));
  };
  countTotalFeedback = () => {
    return Object.keys(this.state).reduce((acum, key) => {
      return acum + this.state[key];
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const totalFeed = this.countTotalFeedback();
    const { good } = this.state;
    return totalFeed !== 0 ? Math.round((good / totalFeed) * 100) : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <>
        <Section
          title="Please leave feedback"
          child={
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.addReviews}
            />
          }
        ></Section>
        <Section
          title="Statistics"
          child={
            <>
              {this.countTotalFeedback() === 0 ? (
                <Notification message="There is no feedback"></Notification>
              ) : (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={this.countTotalFeedback()}
                  positivePercentage={this.countPositiveFeedbackPercentage()}
                />
              )}
            </>
          }
        ></Section>
      </>
    );
  }
}
export default App;
