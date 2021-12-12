import React, { useState } from 'react';
// import { Component } from 'react';
import FeedbackOptions from './component/FeedbackOptions';
import Statistics from './component/Statistics';
import Section from './component/Section';
import Notification from './component/Notification';
import s from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const sum = good + neutral + bad;
    return sum;
  };

  const incrGood = ev => {
    switch (ev.target.id) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const positivePercentage = () =>
    Math.ceil((good * 100) / countTotalFeedback());

  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          // options={options}
          onLeaveFeedback={incrGood}
        />
      </Section>
      <Section title="Statistics">
        {String(countTotalFeedback()) !== '0' ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification message={'There is no feedback.'} />
        )}
      </Section>
    </div>
  );
}
