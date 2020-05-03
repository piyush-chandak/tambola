import { Component, OnInit } from '@angular/core';
import { HistoryManagmentService } from '../../services/history-managment/history-managment.service';

import moment from 'moment';

@Component({
  selector: 'history-managment',
  templateUrl: './history-managment.component.html',
  styleUrls: ['./history-managment.component.scss']
})
export class HistoryManagmentComponent implements OnInit {
  public list: any[];

  constructor(private historyManagmentService: HistoryManagmentService) { }

  ngOnInit() {
    this.list = this.historyManagmentService.getTambolaHistory();
  }

  public formatTime(time) {
    let now = moment();
    let givenTime = moment.unix(time);
    let format = '';
    if (givenTime.date() != now.date() && givenTime.year() != now.year()) {
      format = 'MMM, D - '
    } else if (givenTime.year() != now.year()) {
      format += 'Y - ';
    } else {
      format = "h:mm:s a";
    }
    return givenTime.format(format);
  }

}
