import React from 'react';
import PropTypes from 'prop-types';
import classes from './FilterButton.module.scss';

function FilterCheckbox({ checked, onChange, id, text }) {
  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={id}
        style={{ display: 'none' }}
      />
      <label htmlFor={id} className={classes.filterButton}>
        {text}
      </label>
    </>
  );
}

FilterCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FilterCheckbox;

