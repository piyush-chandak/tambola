import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TambolaService {
  private data = {selectedNumbers: []};
  public START_NUMBER = 1;
  public END_NUMBER = 90;

  constructor() { }

  public getData(param) {
    return this.data[param];
  };

  public setParam(param, value) {
    this.data[param] = value;
  };

  public setSelectedOptions(options) {
    this.data['selectedNumbers'] = options;
    localStorage.setItem('selectedNumbers', JSON.stringify(this.data['selectedNumbers']));
  };

  public getSelectedOptions() {
    let options = localStorage.getItem('selectedNumbers');
    options = JSON.parse(options);
    if (options && options.length && !this.data['selectedNumbers'].length) {
      this.data['selectedNumbers'] = options;
    }
    return this.data['selectedNumbers'];
  };
}
