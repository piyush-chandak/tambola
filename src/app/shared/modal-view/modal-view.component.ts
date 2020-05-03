import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { EventBusService } from '../../tambola/services/event-bus/event-bus.service';

@Component({
  selector: 'modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.scss']
})
export class ModalViewComponent implements OnInit, OnDestroy {
  @Input() header: string;
  @Output() closeModal = new EventEmitter();

  constructor(
    private eventBusService: EventBusService
  ) { }

  ngOnInit() {
    this.setModalOpenClass(true);
    this.eventBusService.on('closeModal', () => {
      this.close();
    });
  }

  ngOnDestroy() {
    this.setModalOpenClass(false);
  }

  public close() {
    this.closeModal.emit();
  }

  public setModalOpenClass(setValue) {
    document.body.className = setValue ? 'modal-open' : '';
  }

}
