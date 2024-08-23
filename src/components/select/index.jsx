import styles from './styles.module.css';
import React from 'react';
import PropTypes from 'prop-types';

function Select({ settingsTitle, handlechange, options, defaultValue }) {
  console.log(options);

  return (
    <label className={styles.label_container}>
      {settingsTitle}
      <select value={defaultValue} onChange={handlechange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

Select.propTypes = {
  settingsTitle: PropTypes.string,
  handlechange: PropTypes.func,
  options: PropTypes.array,
  defaultValue: PropTypes.string | PropTypes.number,
};

export default Select;
