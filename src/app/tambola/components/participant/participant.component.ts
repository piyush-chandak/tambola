import { Component, OnInit, Input } from '@angular/core';

import { TicketService } from '../../services/ticket/ticket.service';
import { EventBusService, EventData } from '../../services/event-bus/event-bus.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {
  @Input() participant: any;
  isHost: boolean;

  constructor(
    private eventBusService: EventBusService,
    private ticketService: TicketService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.isHost = this.userService.isHost();

    this.eventBusService.on('newNumber', (number:any) => {
      this.ticketService.setNumber(this.participant.id, number)
    });

    this.eventBusService.on('winner', (number:any) => {
      console.log(number);
      // this.ticketService.setWinner(this.participant.id, number)
    });
  }

  public deleteParticipant() {
    this.ticketService.deleteParticipant(this.participant.id);
  }

  public editParticipant() {
    this.eventBusService.emit(new EventData('editParticipant', this.participant));
  }

}
