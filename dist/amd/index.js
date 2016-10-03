define(['exports', './aurelia-bootstrap-datetime-picker'], function (exports, _aureliaBootstrapDatetimePicker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AureliaBootstrapDatetimePicker = undefined;
  exports.configure = configure;
  function configure(config) {
    config.globalResources('./aurelia-bootstrap-datetime-picker');
  }
  exports.AureliaBootstrapDatetimePicker = _aureliaBootstrapDatetimePicker.AureliaBootstrapDatetimePicker;
});