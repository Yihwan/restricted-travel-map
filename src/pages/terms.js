import React from 'react';
import SEO from 'src/components/seo';

import ContentLayout from 'src/components/contentLayout';

const Terms = () => {

  return (
    <ContentLayout title="Terms of Use">
      <SEO title="Terms of Use" />

      <section>
        <p>
          Your use of https://restrictedtravelmap.com ("the website") represents your agreement to these terms. 
        </p>

        <p>
          While the developer who created the website ("the developer")
          strives to provide factual information with the best intent and will, the developer 
          makes no representation, warranty, or guarantee regarding the reliability, accuracy, factuality, or availability of any information or other content found on the website. 
        </p>

        <p>
          <strong>
            Always check with your local embassy or consular service to receive travel advice
            and information.
          </strong>
        </p>

        <p>
          The content of the website does not constitute medical or any other advice.  
        </p>

        <p>
          In no event, related to use of the website or otherwise, shall the developer be held liable for any claim, damages, or other liabilities. 
        </p>

        <p>The source code of the website is <a href="https://github.com/Yihwan/restricted-travel-map" target="_blank" rel="noopener noreferrer">open source</a> and licensed under an <a href="https://github.com/Yihwan/restricted-travel-map/blob/master/LICENSE.md" target="_blank" rel="noopener noreferrer">MIT License</a>.</p>
      </section>
    </ContentLayout>
  );
}

export default Terms;
