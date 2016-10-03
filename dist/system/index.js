'use strict';

System.register(['./aurelia-bootstrap-datetime-picker'], function (_export, _context) {
  "use strict";

  var AureliaBootstrapDatetimePicker;
  function configure(config) {
    config.globalResources('./aurelia-bootstrap-datetime-picker');
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaBootstrapDatetimePicker) {
      AureliaBootstrapDatetimePicker = _aureliaBootstrapDatetimePicker.AureliaBootstrapDatetimePicker;
    }],
    execute: function () {
      _export('AureliaBootstrapDatetimePicker', AureliaBootstrapDatetimePicker);
    }
  };
});