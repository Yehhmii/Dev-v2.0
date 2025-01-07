import React, { useState, useEffect } from 'react';
import './Loading.css'; // Add your CSS for animations

function Loading() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length === 3 ? '' : prev + '.'));
    }, 500); // Add a dot every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loadingPage">
      <h1>Introducing{dots}</h1>
    </div>
  );
}

export default Loading;
