import { Component, OnInit } from '@angular/core';
import { TambolaService } from '../../services/tambola/tambola.service';

@Component({
  selector: 'tambola-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public numbers :any [];
  public selectedNumber :any [];

  constructor(private tambolaService: TambolaService) { }

  ngOnInit() {
    this.numbers = [];
    for (var i = 1; i <= 90; i++) {
      this.numbers.push(i);
    }
    this.selectedNumber = this.tambolaService.getSelectedOptions();
  }
}
