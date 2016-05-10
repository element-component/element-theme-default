module.exports = {
  use: [
    'postcss-import',
    'postcss-salad',
    'postcss-nesting',
    'postcss-hexrgba',
    'postcss-reporter'
  ],
  input: 'src/*.css',
  dir: 'dist/',
  'postcss-import': {
    plugins: [
      require('stylelint')
    ]
  },
  'postcss-reporter': {
    clearMessages: true
  },
  'postcss-salad': {
    browser: ['ie > 8', 'last 2 version'],
    features: {
      'bem': {
        'shortcuts': {
        'component': 'b',
        'modifier': 'm',
        'descendent': 'e'
        },
        'separators': {
          'descendent': '__',
          'modifier': '--'
        }
      }
    }
  }
}