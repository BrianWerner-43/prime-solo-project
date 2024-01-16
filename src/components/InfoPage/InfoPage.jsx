import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="info-page">
      <h2>Cooking with Confidence app</h2> 
      <br />
        <p className="info-ptag">App overview:</p>
        <p>This app was designed to be very user friendly, allowing a user to
          add their favorite recipes with images. The user will also have the ability to
          make edits and delete recipes.</p>
          <br />
          <p className='tech-tag'>Technologies Used:</p>
          <p>React</p>
          <p>Javascript</p>
          <p>Postgres</p>
          <p>MUI</p>
          <p>CSS</p>
          <p>Cloudinary</p>
          <p>Passport</p>
          <br />
          <p className="challenge-tag">Challenges/Goals:</p>
          <p>One of the biggest challenges I faced with this project was getting cloudinary
            working on the POST route and still trying to get it working correctly with the PUT route.
            Some future goals I have is give the user the ability to search recipes by using the Spoonacular API.
            Also I'd like to create an admin page so that different users could share and like others recipes.</p>
         <br />
         <p className="shoutout-tag">Shoutout!</p>
         <p>I'd like to give a huge shoutout to my family for all of the support.</p>
         <p>I'd also like to say thank you to everyone at Prime Digital Academy and the Moonstone cohort and last but not least
          to our amazing instuctor Mathew Black who made my learning very enjoyable! 💚
         </p>
          
        

    </div>
    
    
  );
}

export default InfoPage;
