import React from 'react';
import SEO from 'src/components/seo';

import ContentLayout from 'src/components/contentLayout';

const Privacy = () => {

  return (
    <ContentLayout title="Privacy Policy">
      <SEO title="Privacy Policy" />

      <section>
        <p>
          Your privacy is important to the developer who created this website ("the developer", "we", "our"). We respect your privacy regarding any information we may collect from you across https://restrictedtravelmap.com ("the website"), and other sites we own and operate.
        </p>

        <p>
          We collect information through <a href="https://forms.gle/Z9giq891zqekY43J8" rel="noopener">this form</a> which is hosted on a third-party site. We do not accept responsibility or liability for this or any other third-party's privacy policies. By completing this form, you agree that information you voluntarily disclose may be published or be otherwise displayed on the website. We will make every reasonable effort to take down information you disclose if you send us an email at hi@yihwan.kim, but can make no such guarantee, except where required by law.
        </p>

        <p>
          We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. 
        </p>

        <p>
          We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we will make every reasonable effort to protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification. However, we shall not be held liable in the event of loss, theft, unauthorized access, disclosure, copying, use, or modification.
        </p>

        <p>
          We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
        </p>

        <p>
          The website may link to external sites or be hosted on external platforms that are not operated by us. Please be aware that we have no control over the content and practices of these sites and platforms, and cannot accept responsibility or liability for their respective privacy policies.
        </p>

        <p>
          Your continued use of the website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact the developer at hi@yihwan.kim. 
        </p>

        <p>
          This policy is effective as of 23 March 2020.
        </p>
      </section>
    </ContentLayout>
  );
}

export default Privacy;
