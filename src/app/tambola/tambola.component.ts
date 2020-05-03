import { Component, OnInit } from '@angular/core';
import { EventBusService } from './services/event-bus/event-bus.service';
import { UserService } from './services/user/user.service';
import { CommonService } from './services/common/common.service';

@Component({
  selector: 'tambola',
  templateUrl: './tambola.component.html',
  styleUrls: ['./tambola.component.scss']
})
export class TambolaComponent implements OnInit {
  showModal : boolean;
  participant : any;
  modalHeader : string;
  isHost:boolean;

  constructor(
    private eventBusService : EventBusService,
    private userService : UserService,
    private commonService : CommonService
  ) { }

  ngOnInit() {
    this.setShowModal(false);
    this.participant = null;
    this.isHost = this.userService.isHost();

    this.eventBusService.on('editParticipant', (participant:any) => {
      this.participant = participant;
      this.setShowModal(true);
    });
  }

  public clearAll() {
    var res = confirm("Do you want to clear?");
    if (res) {
      this.commonService.clearData();
    }
  }

  public setShowModal(flag) {
    this.showModal = flag;
    this.modalHeader = this.participant ? 'Edit ' + this.participant.name : 'Add';
  }

  public closeModal($event) {
    this.participant = null;
    this.setShowModal(false);
  }
}
