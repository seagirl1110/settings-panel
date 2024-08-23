import styles from './styles.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function TextTemplate({ fontStyles }) {
  return (
    <div className={styles.text_template_container} style={fontStyles}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        pariatur adipisci impedit, consequatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        maiores perferendis ullam iste voluptate facilis architecto sapiente
        ipsam itaque recusandae dignissimos.
      </p>
    </div>
  );
}

TextTemplate.propTypes = {
  fontStyles: PropTypes.object,
};
