import React from 'react';
import SEO from 'src/components/seo';
import { Link } from 'gatsby';

import ContentLayout from 'src/components/contentLayout';

const About = () => {

  return (
    <ContentLayout title="About">
      <SEO title="About" />
      
      <section>
        <p>
          Hi, I'm Yihwan <span role="img" aria-label="wave">👋</span>
        </p>

        <p>
          I'm a developer from San Francisco. Like much of the world, I was taken
          aback by how quickly countries started shutting down borders and restricting
          travel in response to COVID-19. Since things are changing so quickly,
          I created this site to keep track of the latest travel restrictions.
        </p>

        <p>
          I've sourced these updates from various news outlets, leaning most heavily on{' '}
          <a href="https://www.aljazeera.com/news/2020/03/coronavirus-travel-restrictions-border-shutdowns-country-200318091505922.html" target="_blank" rel="noopener noreferrer">Al Jazeera</a>,{' '}
          <a href="https://www.nytimes.com/article/coronavirus-travel-restrictions.html" target="_blank" rel="noopener noreferrer">The New York Times</a>,{' '}
          and <a href="https://www.theguardian.com/travel/2020/mar/23/coronavirus-travel-updates-which-countries-have-restrictions-and-fco-warnings-in-place" target="_blank" rel="noopener noreferrer">The Guardian</a>. But since the situation on the ground is evolving so rapidly, I invite you to share what you're experiencing at ports of entry
          around the world using <a href="https://forms.gle/Z9giq891zqekY43J8" target="_blank" rel="noopener noreferrer">this form</a>.
        </p>

        <p>
          Please understand that while I do my best to keep this site reliably updated,
          I can't guarantee to the accuracy or recency of any available information.
          You can read the full Terms of Use of this site <Link to="/terms">here</Link>.
        </p>

        <p>
          I know these are scary times, but I also know that we'll make it through this.
          Let's be kind to one another, and remember to wash <span role="img" aria-label="soap">🧼</span> your <span role="img" aria-label="clap">👏</span> hands <span role="img" aria-label="sparkle">✨</span>!
        </p>
        <br />
        <p>
          — <a href="https://yihwan.kim" target="_blank" rel="noopener noreferrer">yihwan.kim</a>
        </p>
      </section>
    </ContentLayout>
  );
}

export default About;
