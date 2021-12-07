import Profile from './components-task1/Profile';
import Statistics from './components-task2/Statistics';
import FriendList from './components-task3/FriendList/FriendList';
import TransactionHistory from './components-task4/TransactionHistory';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friendlist.json';
import transactions from './data/transaction.json';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default App;
