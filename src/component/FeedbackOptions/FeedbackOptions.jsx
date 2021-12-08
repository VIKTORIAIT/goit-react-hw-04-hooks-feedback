import s from './FeedbackOptions.module.css';
// import PropTypes from 'prop-types'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.btnList}>
      <li className={s.btnItem}>
        <button className={s.btn} type="button">
          Good
        </button>
      </li>
      <li className={s.btnItem}>
        <button className={s.btn} type="button">
          Neutral
        </button>
      </li>
      <li className={s.btnItem}>
        <button className={s.btn} type="button">
          Bad
        </button>
      </li>
    </ul>
  );
};

// FeedbackOptions.propTypes = {

// }

export default FeedbackOptions;
