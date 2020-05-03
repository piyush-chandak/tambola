import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket/ticket.service';

@Component({
  selector: 'participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.scss']
})
export class ParticipantsListComponent implements OnInit {
  participantsList: any[];

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.participantsList = this.ticketService.getAllTickets();
  }

}
