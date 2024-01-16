import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="info-page">
      <h2>Info about this app</h2>
      
      <br />
        <p className="info-ptag"> </p>

    </div>
    
    
  );
}

export default InfoPage;
