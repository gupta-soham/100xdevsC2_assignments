import React from 'react';
import { BusinessCard } from './components/BusinessCard';


function App() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <>
      <div style={containerStyle}>
        <BusinessCard
          name="Soham Gupta"
          description="Software Engineer in Building"
          interests={["DevOps", "Web Dev", "Open Source"]}
          linkedin='https://www.linkedin.com/in/soham-gupta-in/'
          twitter='https://twitter.com/_soham_gupta'
          github='https://github.com/gupta-soham'
        />
      </div>
    </>
  );
}

export default App;
