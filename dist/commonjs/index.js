'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AureliaBootstrapDatetimePicker = undefined;
exports.configure = configure;

var _aureliaBootstrapDatetimePicker = require('./aurelia-bootstrap-datetime-picker');

function configure(config) {
  config.globalResources('./aurelia-bootstrap-datetime-picker');
}
exports.AureliaBootstrapDatetimePicker = _aureliaBootstrapDatetimePicker.AureliaBootstrapDatetimePicker;