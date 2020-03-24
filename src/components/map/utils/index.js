import STYLE_CONSTANTS from 'src/gatsby-plugin-theme-ui';

export const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

export const generateHeatMapColors = (
  { ISO3, isInboundRestricted, isInboundLandRestricted, isInboundCompletelyRestricted, inboundRestrictedCountriesISO3 },
  selectedCountry,
) => {
  let fillColor = STYLE_CONSTANTS.colors.defaultCountry;
  let fillOpacity = STYLE_CONSTANTS.opacity.tertiary;
  let strokeColor = STYLE_CONSTANTS.colors.defaultBorder;
  let strokeWidth = STYLE_CONSTANTS.stroke.normal;

  if (selectedCountry) {
    if (selectedCountry.inboundRestrictedCountriesISO3 && selectedCountry.inboundRestrictedCountriesISO3.includes(ISO3)) {
      fillColor = STYLE_CONSTANTS.colors.heat;
      strokeColor = STYLE_CONSTANTS.colors.heat;
      strokeWidth = STYLE_CONSTANTS.stroke.normal;
    }

    if (ISO3 === selectedCountry.ISO3) {
      fillColor = STYLE_CONSTANTS.colors.selectedCountry;
      strokeColor = STYLE_CONSTANTS.colors.selectedCountry;
      strokeWidth = STYLE_CONSTANTS.stroke.bold;
    }

    return ({
      fillColor,
      fillOpacity,
      strokeColor,
      strokeWidth,
    });
  }

  if (isInboundRestricted) {
    fillColor = STYLE_CONSTANTS.colors.heat;
  }
  
  if (isInboundLandRestricted) {
    strokeColor = STYLE_CONSTANTS.colors.heat;
    strokeWidth = STYLE_CONSTANTS.stroke.bold;
  }

  if (isInboundCompletelyRestricted) {
    fillColor = "url('#lines')";
    fillOpacity = STYLE_CONSTANTS.opacity.tertiary;
  } else {
    fillOpacity = STYLE_CONSTANTS.opacity.quarternary;
  }

  return ({
    fillColor,
    fillOpacity,
    strokeColor,
    strokeWidth,
  });
};

export const createCountryMetaData = ({ allMarkdownRemark: { nodes } }) => {
  const countryMetaData = {}

  nodes.forEach(({
    frontmatter: {
      title,
      ISO3,
      isInboundRestricted,
      isInboundLandRestricted,
      isInboundCompletelyRestricted,
      inboundRestrictedCountriesISO3,
    }
  }) => {
    countryMetaData[ISO3] = {
      title,
      ISO3,
      isInboundRestricted,
      isInboundLandRestricted,
      isInboundCompletelyRestricted,
      inboundRestrictedCountriesISO3,
    }
  })

  return countryMetaData;
};