module.exports = {
  extends: ['stylelint-config-standard'],
  ignoreFiles: [
    // 外部ライブラリは「style/lib」を想定
    '**/lib/*.css',
    '**/noe_modules/**',
    '**/_postcss/**',
  ],
  "rules": {
    "selector-id-pattern": null,
    "selector-class-pattern": null,
    "keyframes-name-pattern": null,
    "function-url-quotes": null,
    "number-max-precision": null,
    "alpha-value-notation": null,
    "font-family-name-quotes": null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "declaration-block-no-duplicate-custom-properties": null,
    "property-no-vendor-prefix": null,
    "custom-property-pattern": null,
    "declaration-property-value-no-unknown": null,
    "declaration-block-no-shorthand-property-overrides": null
  }
}
