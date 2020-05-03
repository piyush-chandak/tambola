import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryManagmentService {
  private history = [];
  constructor() { }

  public setTambolaHistory(data) {
    this.history.unshift(data);
    localStorage.setItem('history', JSON.stringify(this.history));
  }

  public getTambolaHistory() {
    let history = localStorage.getItem('history');
    history = JSON.parse(history);
    if (!this.history.length && history && history.length) {
      this.history = history;
    }
    return this.history;
  }
}
