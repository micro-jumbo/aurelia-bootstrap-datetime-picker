System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
    "bootstrap-datetime-picker": "npm:bootstrap-datetime-picker@2.3.10",
    "jquery": "npm:jquery@3.1.1",
    "npm:aurelia-polyfills@1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    }
  }
});
