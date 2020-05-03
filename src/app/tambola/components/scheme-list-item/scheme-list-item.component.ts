import { Component, OnInit, Input } from '@angular/core';
import { HistoryManagmentService } from '../../services/history-managment/history-managment.service';
import { SchemesService } from '../../services/schemes/schemes.service';
import { EventBusService, EventData } from '../../services/event-bus/event-bus.service';

@Component({
  selector: 'scheme-list-item',
  templateUrl: './scheme-list-item.component.html',
  styleUrls: ['./scheme-list-item.component.scss']
})
export class SchemeListItemComponent implements OnInit {
  @Input() item: any;
  @Input() isLast: any;

  hideUpadateDeleteBtn: boolean;

  constructor(
    private historyManagmentService: HistoryManagmentService,
    private schemesService: SchemesService,
    private eventBusService: EventBusService
  ) { }

  ngOnInit() {
    console.log(this.item);
    this.hideUpadateDeleteBtn = false;
  }

  public selectWinner(item) {
    item.checked = !item.checked;
    this.hideUpadateDeleteBtn = item.checked;
    this.eventBusService.emit(new EventData('winner', item));
    this.historyManagmentService.setTambolaHistory({
      text: item.title,
      badge: {
        class: item.checked ? 'badge-success' : 'badge-warning',
        text: item.checked ? 'Completed' : 'Not Completed'
      }
    });
  }

  public removeScheme(item) {
    console.log(item);
    this.schemesService.removeScheme(item.id);
    // this.historyManagmentService.setTambolaHistory({
    //   text: item.title,
    //   badge: {
    //     class: 'badge-danger',
    //     text: 'Remove'
    //   }
    // });
  }

}
