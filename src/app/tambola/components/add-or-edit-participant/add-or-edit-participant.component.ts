import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { TicketService } from '../../services/ticket/ticket.service';
import { EventBusService, EventData } from '../../services/event-bus/event-bus.service';

@Component({
  selector: 'add-or-edit-participant',
  templateUrl: './add-or-edit-participant.component.html',
  styleUrls: ['./add-or-edit-participant.component.scss']
})
export class AddOrEditParticipantComponent implements OnInit {
  @Input() participant : any;
  participantForm: any;
  ticket : any[];

  constructor(
    private ticketService: TicketService,
    private formBuilder: FormBuilder,
    private eventBusService : EventBusService
  ) { }

  ngOnInit() {
    this.participantForm = this.formBuilder.group({
      name: [(this.participant ? this.participant.name : ''), Validators.required],
    });
    this.ticket = this.ticketService.getDefaultTicket();
    for (let i = 0; i < this.ticket.length; i++) {
      for (let j= 0; j < this.ticket[i].length; j++) {
        this.ticket[i][j].numberInput = new FormControl((this.participant && this.participant.ticket[i][j] && this.participant.ticket[i][j].number? this.participant.ticket[i][j].number : ''));
      }
    }
  }

  get f() { return this.participantForm.controls; }

  public saveOrUpdate() {
    let ticket = this.participant ? this.participant.ticket : this.ticketService.getDefaultTicket();
    for (let i = 0; i < ticket.length; i++) {
      for (let j= 0; j < ticket[i].length; j++) {
        console.log(i);
        console.log(j);
        let num = parseInt(this.ticket[i][j].numberInput.value, 10);
        ticket[i][j]['number'] = isNaN(num) ? null : num
      }
    }
    let participant = {
      name: this.f.name.value,
      ticket: ticket,
      winners: []
    };

    if (this.participant) {
      this.ticketService.updateParticipant(this.participant.id, participant);
    } else {
      this.ticketService.addParticipant(participant);
    }
    this.eventBusService.emit(new EventData('closeModal', null));
  }
}
