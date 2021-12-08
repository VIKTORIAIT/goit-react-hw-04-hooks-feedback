import Profile from './component/Profile';
import { Component } from 'react';
import FeedbackOptions from './component/FeedbackOptions';
import Statistics from './component/Statistics';
import Section from './component/Section';
import Notification from './component/Notification';
// import user from './data/user.json';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleIncrement = ev => {
  //   console.log('Increment button was clicked!', ev);
  //   console.log('this.props: ', this.props);
  // };

  render() {
    return (
      <div className="container">
        {/* <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
          <Notification />
        </Section> */}
        {/* <button type="button">Increment by {step}</button>
        <button type="button">Decrement by {step}</button> */}
      </div>
    );
  }
}

export default App;

// const App = () => {
//   return (
//     <div>
//       <Profile
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={user.stats}
//       />
//     </div>
//   );
// };
