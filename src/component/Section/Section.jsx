import s from "./Section.module.css"
import PropTypes from 'prop-types'

const Section = ({title}) => {
    return (
        <>
            <h2 className={s.mainTitle}>{title}</h2>
        </>
    )
}

Section.propTypes = {

}

export default Section
