// import PropTypes from 'prop-types'
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>
          <p className={s.text}>
            Good: <span className={s.span}>{good}</span>
          </p>
        </li>
        <li className={s.item}>
          <p className={s.text}>
            Neutral: <span className={s.span}>{neutral}</span>
          </p>
        </li>
        <li className={s.item}>
          <p className={s.text}>
            Bad: <span className={s.span}>{bad}</span>
          </p>
        </li>
        <li className={s.item}>
          <b className={s.text}>
            Total: <span className={s.span}>{total}</span>
          </b>
        </li>
        <li className={s.item}>
          <b className={s.text}>
            Positive feedback:
            <span className={s.span}>
              {String(positivePercentage) === 'NaN'
                ? 100
                : String(positivePercentage)}
              %
            </span>
          </b>
        </li>
      </ul>
    </>
  );
};

// Statistics.propTypes = {

// }

export default Statistics;

// {good, neutral, bad, total, positivePercentage}

// {`${if (positivePercentage === NaN) 100%;
//   positivePercentage%}`}
