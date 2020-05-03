import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public generateUniqueId() {
    return Math.random().toString(32).slice(2);
  }

  public clearData() {
    localStorage.setItem('history', '[]');
    localStorage.setItem('participants', '[]');
    localStorage.setItem('selectedNumbers', '[]');
  }
}
