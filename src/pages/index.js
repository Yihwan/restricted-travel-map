import React from 'react';
import SEO from 'src/components/seo';

import Layout from 'src/components/layout';
import Home from 'src/components/home';


const HomePage = () => {

  return(
    <Layout>
      <SEO title="Restricted Travel Map" />
      <Home />
    </Layout>
  );
}

export default HomePage;
