// import PropTypes from 'prop-types'
import s from "./Statistics.module.css"

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <>
        <h2 className={s.secondTitle}>Statistics</h2>
        <ul className={s.list}>
          <li className={s.item}>
            <p className={s.text}>Good: <span className={s.span}>{good}</span></p>
          </li>
          <li className={s.item}>
            <p className={s.text}>Neutral: <span className={s.span}>{neutral}</span></p>
          </li>
          <li className={s.item}>
            <p className={s.text}>Bad: <span className={s.span}>{bad}</span></p>
          </li>
          <li className={s.item}>
            <p className={s.text}>Total: <span className={s.span}>{total}</span></p>
          </li>
          <li className={s.item}>
            <p className={s.text}>Positive feedback: <span className={s.span}>{positivePercentage}%</span></p>
          </li>
        </ul>
        </>
    )
}

// Statistics.propTypes = {

// }

export default Statistics
