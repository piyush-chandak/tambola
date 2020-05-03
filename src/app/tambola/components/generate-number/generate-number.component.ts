import { Component, OnInit } from '@angular/core';
import { TambolaService } from '../../services/tambola/tambola.service';
import { HistoryManagmentService } from '../../services/history-managment/history-managment.service';
import { TicketService } from '../../services/ticket/ticket.service';
import { EventBusService, EventData } from '../../services/event-bus/event-bus.service';

import moment from 'moment';

@Component({
  selector: 'generate-number',
  templateUrl: './generate-number.component.html',
  styleUrls: ['./generate-number.component.scss']
})
export class GenerateNumberComponent implements OnInit {
  randomNumber: any
  numGenratorBtnDisabled: boolean;
  setNumberBtnDisabled: boolean;

  constructor(
    private tambolaService: TambolaService,
    private historyManagmentService: HistoryManagmentService,
    private ticketService: TicketService,
    private eventBusService: EventBusService
  ) { }

  ngOnInit() {
    this.randomNumber = 0;
    this.numGenratorBtnDisabled = false;
    this.setNumberBtnDisabled = true;
  }

  public generateRandomNumber() {
    this.setNumberBtnDisabled = false;
    let selectedNumbers = this.tambolaService.getSelectedOptions();
    let number = this.generateNumber(this.tambolaService.START_NUMBER, this.tambolaService.END_NUMBER);
    while(selectedNumbers.indexOf(number) > -1) {
      number = this.generateNumber(this.tambolaService.START_NUMBER, this.tambolaService.END_NUMBER)
    }
    this.randomNumber = number;
  }

  public setNewNumber() {
    let selectedNumbers = this.tambolaService.getSelectedOptions();
    selectedNumbers.push(this.randomNumber);
    this.tambolaService.setSelectedOptions(selectedNumbers);
    this.historyManagmentService.setTambolaHistory({number: this.randomNumber, createdAt: moment().unix()});
    // this.checkForDisabled(selectedNumbers);
    this.setNumberBtnDisabled = true;

    this.eventBusService.emit(new EventData('newNumber', this.randomNumber));
  }

  private generateNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private checkForDisabled(selectedNumbers) {
    this.numGenratorBtnDisabled = this.tambolaService.END_NUMBER == selectedNumbers.length;
    this.setNumberBtnDisabled = this.tambolaService.END_NUMBER == selectedNumbers.length;
  }
}
