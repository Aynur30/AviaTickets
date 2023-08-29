import classes from './Tab.module.scss';
import PropTypes from 'prop-types';

function Tab({ id, onChange, text, checked }) {
  return (
    <>
      <input
        type="radio"
        name="tab"
        id={id}
        checked={checked}
        onChange={onChange}
        style={{ display: 'none' }}
      ></input>
      <label htmlFor={id} className={classes.tab}>
        {text}
      </label>
    </>
  );
}

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Tab;

