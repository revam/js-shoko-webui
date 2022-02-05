function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: [
    './src/**/*.tsx',
    './public/**/*.html',
  ],
  theme: {
    colors: {
      primary: withOpacityValue('--color-primary'),
      secondary: withOpacityValue('--color-secondary'),
      background: withOpacityValue('--color-background'),
      'background-nav': withOpacityValue('--color-background-nav'),
      'background-alt': withOpacityValue('--color-background-alt'),
      'background-border': withOpacityValue('--color-background-border'),
      'highlight-1': withOpacityValue('--color-highlight-1'),
      'highlight-2': withOpacityValue('--color-highlight-2'),
      'highlight-3': withOpacityValue('--color-highlight-3'),
      'highlight-4': withOpacityValue('--color-highlight-4'),
      'highlight-5': withOpacityValue('--color-highlight-5'),
      transparent: 'transparent',
    },
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '25': '6.25rem',
        '62.5': '15.625rem',
        '125': '31.25rem',
      },
    },
  },
  variants: {
    margin: ['first'],
  },
}