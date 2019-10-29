module.exports = {
  extends: "stylelint-config-wxss",
  rules: {
    indentation: 2,
    "number-leading-zero": null,
    "no-descending-specificity": null,
    "value-no-vendor-prefix": null,
    "property-no-unknown": [
      true,
      {
        ignoreProperties: ["composes"]
      }
    ],
    "unit-whitelist": ["rpx", "px", "%", "s", "deg"],
    "unit-no-unknown": [
      true,
      {
        ignoreUnits: ["rpx"]
      }
    ],
    "selector-type-no-unknown": [
      true,
      {
        ignore: ["custom-elements", "default-namespace"]
      }
    ],
    "font-family-no-missing-generic-family-keyword": null,
    "property-no-vendor-prefix": null,
    "color-hex-case": "upper",
    "selector-max-compound-selectors": 5
  }
};
