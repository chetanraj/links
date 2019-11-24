import React from 'react';

//! Components
import Link from './components/Link';

//! CSS
import './App.css';

function App() {
  return (
    <>
      <div className="links">
        <Link href="https://chetanraj.in" label="My portfolio" />
        <Link href="https://snpt.netlify.com/" label="Snpt" />
      </div>
    </>
  );
}

export default App;
