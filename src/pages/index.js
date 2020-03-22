import React, { useState } from 'react';
import SEO from 'src/components/seo';
import ReactTooltip from 'react-tooltip';

import Layout from 'src/components/layout';
import Map from 'src/components/map';

const HomePage = () => {
  const [content, setContent] = useState('');

  return(
    <Layout>
      <SEO title="Restricted Travel Map" />
      <div>
        <Map setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </Layout>
  );
}

export default HomePage;
