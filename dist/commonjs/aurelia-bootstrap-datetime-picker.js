'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AureliaBootstrapDatetimePicker = undefined;

var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

var _aureliaFramework = require('aurelia-framework');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('bootstrap-datetime-picker');

require('bootstrap-datetime-picker/css/bootstrap-datetimepicker.css!');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var AureliaBootstrapDatetimePicker = exports.AureliaBootstrapDatetimePicker = (_dec = (0, _aureliaFramework.customElement)('bootstrap-datetime-picker'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec3 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
  function AureliaBootstrapDatetimePicker(element) {
    _classCallCheck(this, AureliaBootstrapDatetimePicker);

    _initDefineProp(this, 'value', _descriptor, this);

    this.element = element;
  }

  AureliaBootstrapDatetimePicker.prototype.attached = function attached() {
    var self = this;
    var jq = (0, _jquery2.default)(this.element);
    var options = this.getOptions(jq) || {};
    jq.datetimepicker(options).on('changeDate', function (e) {
      self.dateChanged(e.date);
    });
  };

  AureliaBootstrapDatetimePicker.prototype.dateChanged = function dateChanged(date) {
    var changeEvent = new CustomEvent('input', {
      detail: {
        value: date
      },
      bubbles: true
    });

    this.element.dispatchEvent(changeEvent);
  };

  AureliaBootstrapDatetimePicker.prototype.detached = function detached() {
    (0, _jquery2.default)(this.element).datetimepicker('destroy').off('changeDate');
  };

  AureliaBootstrapDatetimePicker.prototype.getOptions = function getOptions(jqElem) {};

  return AureliaBootstrapDatetimePicker;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class);