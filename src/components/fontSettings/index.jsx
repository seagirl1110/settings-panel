import styles from './styles.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import { fontSizeList, lineHeightList } from './../../utils/settingsData';
import Select from '../select';

export default function FontSettings({ fontStyles, changeFontStyles }) {
  function setFontSize(evt) {
    const newStyles = {
      ...fontStyles,
      fontSize: evt.target.value,
    };
    changeFontStyles(newStyles);
  }

  function setLineHeight(evt) {
    const newStyles = {
      ...fontStyles,
      lineHeight: evt.target.value,
    };
    changeFontStyles(newStyles);
  }

  return (
    <div className={styles.font_settings_container}>
      <h2>Settings</h2>
      <Select
        settingsTitle={'Font Size:'}
        handlechange={setFontSize}
        options={fontSizeList}
        defaultValue={fontStyles.fontSize}
      />
      <Select
        settingsTitle={'Line Height:'}
        handlechange={setLineHeight}
        options={lineHeightList}
        defaultValue={fontStyles.lineHeight}
      />
    </div>
  );
}

FontSettings.propTypes = {
  fontStyles: PropTypes.object,
  changeFontStyles: PropTypes.func,
};
