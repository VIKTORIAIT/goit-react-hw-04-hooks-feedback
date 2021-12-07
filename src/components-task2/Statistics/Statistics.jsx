import PropTypes from 'prop-types';
import data from '../../data/data.json';
import LiItemsecond from './LiItemsecond/LiItemsecond';
import styles from './Statistics.module.css';

const Statistics = ({ title }) => {
  const markup = data.map(({ id, label, percentage }) => (
    <LiItemsecond key={id} label={label} percentage={percentage} />
  ));
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>{markup}</ul>
    </section>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
export default Statistics;
