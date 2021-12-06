import Profile from "./components-task1/Profile";
import Statistics from "./components-task2/Statistics";
import FriendList from "./components-task3/FriendList/FriendList";
import TransactionHistory from "./components-task4/TransactionHistory";

const App = () => {
  return (
    <div>
      <Profile />
      <Statistics title="title" />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};

export default App;
