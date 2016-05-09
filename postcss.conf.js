module.exports = {
  use: [
    'postcss-import',
    'postcss-bem',
    'postcss-cssnext',
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
  'postcss-bem': {
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