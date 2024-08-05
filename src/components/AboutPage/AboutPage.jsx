import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="about-me">
      <h2>About Me:</h2>
      <img className="profile-img" src="/images/me_duck_confit_small.jpeg" />
      <br />
        <p className="about-ptag">So a little about me, I was a chef for a little over 20 years and I made the transition into the tech industry about a year ago. <br /> So I thought what better way to utilize these new skills that I've learned
          and build a user friendly cooking app that doesn't have all of the pop up adds and the countless scrolling to get to the actual recipe. <br />I hope you can enjoy this app as much as I do and will give you the confidence to cook!
        </p>

    </div>
  );
}

export default AboutPage;
