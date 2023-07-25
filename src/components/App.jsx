import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions ';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const statObg = { good, neutral, bad };
  const options = Object.keys(statObg);

  const addReviews = elem => {
    if (elem === 'good') setGood(good + 1);
    else if (elem === 'neutral') setNeutral(neutral + 1);
    else if (elem === 'bad') setBad(bad + 1);

    // setGood(prevState => ({ [elem]: (prevState[elem] += 1) }));
  };
  const countTotalFeedback = () => {
    return Object.keys(statObg).reduce((acum, key) => {
      return acum + statObg[key];
    }, 0);
  };
  const countPositiveFeedbackPercentage = () => {
    const totalFeed = countTotalFeedback();
    return totalFeed !== 0 ? Math.round((good / totalFeed) * 100) : 0;
  };
  // const { good, neutral, bad } = this.state;

  return (
    <>
      <Section
        title="Please leave feedback"
        child={
          <FeedbackOptions options={options} onLeaveFeedback={addReviews} />
        }
      ></Section>
      <Section
        title="Statistics"
        child={
          <>
            {countTotalFeedback() === 0 ? (
              <Notification message="There is no feedback"></Notification>
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            )}
          </>
        }
      ></Section>
    </>
  );
};
export default App;
