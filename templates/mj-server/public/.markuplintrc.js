module.exports = {
  // ogp関連のエラーを除外
  nodeRules: [
    {
      selector: 'meta[property]',
      rules: {
        'invalid-attr': {
          options: {
            allowAttrs: ['property', 'content'],
          },
        },
      },
    },
  ],
  rules: {
    'invalid-attr': {
      options: {
        allowAttrs: [
          {
            name: 'vocab',
            value: 'URL',
          },
          'referrerpolicy',
          'typeof',
          'property',
          'resource',
          'prefix',
          'xyz'
        ],
      },
    },
    "require-accessible-name": false,
    "table-row-column-alignment": false,
  },
  extends: ['markuplint:recommended'],
}
