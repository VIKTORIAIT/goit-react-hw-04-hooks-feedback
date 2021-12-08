import { Component } from 'react';
import FeedbackOptions from './component/FeedbackOptions';
import Statistics from './component/Statistics';
import Section from './component/Section';
import Notification from './component/Notification';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    console.log('работает sum');
    const sum = this.state.good + this.state.neutral + this.state.bad;
    return sum;
  };

  incrGood = ev =>
    this.setState(prevState => {
      if (ev.target.id === 'good') {
        return { good: prevState.good + 1 };
      }
      if (ev.target.id === 'neutral') {
        return { neutral: prevState.neutral + 1 };
      }
      if (ev.target.id === 'bad') {
        return { bad: prevState.bad + 1 };
      }
    });

  positivePercentage = () =>
    Math.ceil((this.state.good * 100) / this.countTotalFeedback());

  render() {
    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            // options={options}
            onLeaveFeedback={this.incrGood}
          />
        </Section>
        <Section title="Statistics">
          {String(this.countTotalFeedback()) !== '0' ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.positivePercentage()}
            />
          ) : (
            <Notification message={'There is no feedback.'} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
