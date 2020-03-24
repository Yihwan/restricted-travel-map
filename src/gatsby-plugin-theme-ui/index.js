

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
      light: {
        text: '#000000',
        background: '#ffffff',
        selectedCountry: '#3333ee',
        heat: '#111199',
        defaultCountry: '#f6f6f6',
        highlight: '#efeffe', // '#ffffcc',
        gray: '#777777',
        defaultBorder: '#660099',
        darken: 'rgba(0, 0, 0, .25)',
      },
      deep: {
        text: 'hsl(210, 50%, 96%)',
        background: 'hsl(230, 25%, 18%)',
        selectedCountry: 'hsl(260, 100%, 80%)',
        heat: 'hsl(290, 100%, 80%)',
        highlight: 'hsl(260, 20%, 40%)',
        defaultBorder: 'hsl(290, 100%, 80%)',
        defaultCountry: 'hsla(230, 20%, 0%, 20%)',
        gray: 'hsl(210, 50%, 60%)',
      },
      swiss: {
        text: 'hsl(10, 20%, 20%)',
        background: 'hsl(10, 10%, 98%)',
        selectedCountry: 'hsl(10, 80%, 50%)',
        heat: 'hsl(10, 60%, 50%)',
        highlight: 'hsl(10, 40%, 90%)',
        defaultBorder: 'hsl(250, 60%, 30%)',
        defaultCountry: 'hsl(10, 20%, 94%)',
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