import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ReactTooltip from 'react-tooltip';

import Map from 'src/components/map';
import DetailModal from 'src/components/detailModal';
import HomeHeader from 'src/components/homeHeader';
import HomeFooter from 'src/components/homeFooter';

const extractSelectedCountryData = ({ allMarkdownRemark: { edges }}, selectedCountryISO3) => {
  const edge = edges.find(
    ({ node: { frontmatter: { ISO3 } } }) => ISO3 === selectedCountryISO3 
  );

  if (!edge) {
    return; 
  }
  
  return edge.node;
};

const Home = () => {
  const [content, setContent] = useState(null);
  const [selectedCountryISO3, setSelectedCountryISO3] = useState('');

  const allCountryData = useStaticQuery(graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                ISO3
                isInboundRestricted
                isInboundLandRestricted
                isInboundCompletelyRestricted
                inboundRestrictedCountriesISO3
              }
              html
              htmlAst
            }
          }
        }
      }
    `)

  const selectedCountryNode = extractSelectedCountryData(allCountryData, selectedCountryISO3);
  let selectedCountry = null; 

  if (!!selectedCountryNode) {
    selectedCountry = selectedCountryNode
  }

  const edges = allCountryData.allMarkdownRemark.edges; 
  const allRestrictionCount = edges.filter(edge => edge.node.frontmatter.isInboundRestricted).length;
  const completeRestrictionCount = edges.filter(edge => edge.node.frontmatter.isInboundCompletelyRestricted).length;

  return(
    <>
      <HomeHeader allRestrictionCount={allRestrictionCount} completeRestrictionCount={completeRestrictionCount}/>
      <DetailModal 
        selectedCountry={selectedCountry}
        setSelectedCountryISO3={setSelectedCountryISO3}
      />
      <Map 
        setTooltipContent={setContent} 
        selectedCountryISO3={selectedCountryISO3}
        setSelectedCountryISO3={setSelectedCountryISO3}
      />

      <ReactTooltip>{content}</ReactTooltip>

      <HomeFooter selectedCountry={selectedCountry}/>
    </>
  );
}

export default Home; 