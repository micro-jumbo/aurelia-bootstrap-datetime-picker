var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

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

import { inject, customElement, bindable, bindingMode } from 'aurelia-framework';
import $ from 'jquery';
import 'bootstrap-datetime-picker';
import 'bootstrap-datetime-picker/css/bootstrap-datetimepicker.css!';

export let AureliaBootstrapDatetimePicker = (_dec = customElement('bootstrap-datetime-picker'), _dec2 = inject(Element), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = class AureliaBootstrapDatetimePicker {

  constructor(element) {
    _initDefineProp(this, 'value', _descriptor, this);

    this.element = element;
  }

  attached() {
    let self = this;
    let jq = $(this.element);
    this.transformOptions(jq);
    jq.datetimepicker(jq.data()).on('changeDate', function (e) {
      self.dateChanged(e.date);
    });
  }

  dateChanged(date) {
    let changeEvent = new CustomEvent('input', {
      detail: {
        value: date
      },
      bubbles: true
    });

    this.element.dispatchEvent(changeEvent);
  }

  detached() {
    $(this.element).datetimepicker('destroy').off('changeDate');
  }

  transformOptions(jqElem) {}
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class);