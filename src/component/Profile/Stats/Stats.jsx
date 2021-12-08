import styles from './Stats.module.css';
import LiItem from './LiItem';

const Stats = ({ stats }) => {
  return (
    <ul className={styles.stats}>
      <LiItem label="followers :" quantity={stats.followers} />
      <LiItem label="views :" quantity={stats.views} />
      <LiItem label="likes :" quantity={stats.likes} />
    </ul>
  );
};

export default Stats;
