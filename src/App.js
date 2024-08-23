import './App.css';
import React from 'react';
import FontSettings from './components/fontSettings';
import TextTemplate from './components/textTemplate';
import { useState } from 'react';

function App() {
  const [fontStyles, setFontStyles] = useState({
    fontSize: '18px',
    lineHeight: 1.5,
  });

  function changeFontStyles(newFontStyles) {
    setFontStyles(newFontStyles);
  }

  return (
    <div className="app_container">
      <FontSettings
        fontStyles={fontStyles}
        changeFontStyles={changeFontStyles}
      />
      <TextTemplate fontStyles={fontStyles} />
    </div>
  );
}

export default App;
