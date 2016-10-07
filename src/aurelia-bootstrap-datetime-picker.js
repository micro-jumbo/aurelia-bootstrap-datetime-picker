import {inject, customElement, bindable, bindingMode} from 'aurelia-framework';
import $ from 'jquery';
import 'bootstrap-datetime-picker';
import 'bootstrap-datetime-picker/css/bootstrap-datetimepicker.css!'

@customElement('bootstrap-datetime-picker')
@inject(Element)
export class AureliaBootstrapDatetimePicker {
  
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
  
  constructor(element) {
    this.element = element
  }

  attached() {
    let self = this;
    let jq = $(this.element);
    let options = this.getOptions(jq) || {}
    jq.datetimepicker(options)
      .on('changeDate', function(e) {
        self.dateChanged(e.date)
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
  
  getOptions(jqElem) {
  }
}
