import styles from './Descriptions.module.css';
// import user from '../../../data/user.json';

const Descriptions = ({ username, tag, location, avatar }) => {
  // const { username, tag, location, avatar } = user;
  return (
    <div className={styles.description}>
      <img src={avatar} alt="User avatar" className={styles.avatar} />
      <p className={styles.name}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
};

export default Descriptions;
