import React from 'react';
import './styles.css';

import Weather from 'Pages/Weather/Weather';

function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-pink-500">
      <Weather />
    </div>
  );
}

export default App;
