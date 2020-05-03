import { Injectable } from '@angular/core';

import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  data = {tickets: []};
  // data = {tickets: [{
  //           id: 1,
  //           name: 'Owner #1',
  //           ticket: [
  //             [
  //               { number: 1, checked: false },
  //               { number: null, checked: false },
  //               { number: 2, checked: false },
  //               { number: 19, checked: false },
  //               { number: 3, checked: false },
  //               { number: 4, checked: false },
  //               { number: 18, checked: false },
  //               { number: 5, checked: false },
  //             ],
  //             [
  //               { number: 6, checked: false },
  //               { number: 20, checked: false },
  //               { number: 7, checked: false },
  //               { number: 17, checked: false },
  //               { number: 8, checked: false },
  //               { number: 9, checked: false },
  //               { number: null, checked: false },
  //               { number: 10, checked: false }
  //             ],
  //             [
  //               { number: 11, checked: false },
  //               { number: null, checked: false },
  //               { number: 12, checked: false },
  //               { number: null, checked: false },
  //               { number: 13, checked: false },
  //               { number: 14, checked: false },
  //               { number: 16, checked: false },
  //               { number: 15, checked: false }
  //             ]
  //           ],
  //           winners: ['abcd']
  //         },
  //         {
  //           id: 2,
  //           name: 'Owner #2',
  //           ticket: [
  //             [
  //               { number: 1, checked: false },
  //               { number: null, checked: false },
  //               { number: 2, checked: false },
  //               { number: 19, checked: false },
  //               { number: 3, checked: false },
  //               { number: 4, checked: false },
  //               { number: 18, checked: false },
  //               { number: 5, checked: false },
  //             ],
  //             [
  //               { number: 6, checked: false },
  //               { number: 20, checked: false },
  //               { number: 7, checked: false },
  //               { number: 17, checked: false },
  //               { number: 8, checked: false },
  //               { number: 9, checked: false },
  //               { number: null, checked: false },
  //               { number: 10, checked: false }
  //             ],
  //             [
  //               { number: 11, checked: false },
  //               { number: null, checked: false },
  //               { number: 12, checked: false },
  //               { number: null, checked: false },
  //               { number: 13, checked: false },
  //               { number: 14, checked: false },
  //               { number: 16, checked: false },
  //               { number: 15, checked: false }
  //             ]
  //           ],
  //           winners: ['abcd']
  //         }
  //       ]}
  constructor(
    private commonService: CommonService
  ) { }

  public getAllTickets() {
    let ticket = localStorage.getItem('participants');
    if (ticket && !this.data['tickets'].length) {
      ticket = JSON.parse(ticket);
      this.data['tickets'] = ticket;
    }
    return this.data['tickets'];
  }

  public setTickets(ticket) {
    this.data['tickets'].push(ticket)
    localStorage.setItem('participants', JSON.stringify(this.data['tickets']));
    return this.data['tickets'];
  }

  public addParticipant(participant) {
    participant['id'] = this.commonService.generateUniqueId();
    this.data['tickets'].push(participant);
    localStorage.setItem('participants', JSON.stringify(this.data['tickets']));
  }

  public deleteParticipant(participantId) {
    let participants = this.data['tickets'];
    let index = -1;
    for (let i = 0; i < participants.length; i++) {
      if (participants[i].id == participantId) {
        index = i;
      }
    }
    participants.splice(index, 1);
    localStorage.setItem('participants', JSON.stringify(participants));
  }

  public updateParticipant(id, participant) {
    let participants = this.data['tickets'];
    for (let i = 0; i < participants.length; i++) {
      if (participants[i].id == id) {
        participants = participant;
      }
    }

    localStorage.setItem('participants', JSON.stringify(participants));
  }

  public setNumber(id, number) {
    let participants = this.data['tickets'];
    for (let i = 0; i < participants.length; i++) {
      if (participants[i].id == id) {
        let ticket = participants[i].ticket;
        for (let j = 0; j < ticket.length; j++) {
          for (let k = 0; k < ticket[j].length; k++) {
            if (ticket[j][k] && ticket[j][k]['number'] == number) {
              ticket[j][k]['checked'] = true
            }
          }
        }
      }
    }
    this.data['tickets'] = participants;
    localStorage.setItem('participants', JSON.stringify(participants));
  }

  public getDefaultTicket() {
    return [
      [
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false}
      ],
      [
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false}
      ],
      [
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false},
        {number: null, checked: false}
      ]
    ];
  }
}
