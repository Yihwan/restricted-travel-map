

export default {
  buttons: {
    primary: {
      color: 'text',
      bg: 'background',
    },
  },
  badges: {
    noRestrictions: {
      color: 'text',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
    },
  },
  stroke: {
    normal: '0.25',
    bold: '0.5',
  },
  opacity: {
    primary: '0.9',
    secondary: '0.75',
    tertiary: '0.5',
    quarternary: '0.25',
  },
  colors: {
    text: '#ffffff', 
    background: '#060606',
    highlight: '#29112c', // something bright 
    
    
    heat: '#de2d26', // (red) 
    defaultCountry: '#191919', // default gray
    selectedCountry: '#ffbf44', // selected / hover (yellow)
    defaultBorder: '#575757', // border 

    modes: {
      times: {
        text: '#000000',
        background: '#fff1e6',
        highlight: '#efeffe', // '#ffffcc',
        gray: '#777777',
        darken: 'rgba(0, 0, 0, .25)',
      },
      deep: {
        text: 'hsl(210, 50%, 96%)',
        background: 'hsl(230, 25%, 18%)',
        highlight: 'hsl(260, 20%, 40%)',
        gray: 'hsl(210, 50%, 60%)',
      },
      light: {
        text: '#040d14',
        background: 'hsl(10, 10%, 98%)',
        highlight: 'hsl(10, 40%, 90%)',
        gray: 'hsl(10, 20%, 50%)',
      },
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
}