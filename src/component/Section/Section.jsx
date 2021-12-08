import s from './Section.module.css';
// import PropTypes from 'prop-types'

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={s.mainTitle}>{title}</h2>
      {children}
    </>
  );
};

// Section.propTypes = {

// }

export default Section;
