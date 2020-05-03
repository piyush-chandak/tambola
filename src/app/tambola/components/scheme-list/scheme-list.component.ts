import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HistoryManagmentService } from '../../services/history-managment/history-managment.service';
import { SchemesService } from '../../services/schemes/schemes.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'scheme-list',
  templateUrl: './scheme-list.component.html',
  styleUrls: ['./scheme-list.component.scss']
})
export class SchemeListComponent implements OnInit {
  list: any[];
  showInput: boolean;
  schemeName: FormControl;
  isHost: boolean;

  constructor(
    private historyManagmentService: HistoryManagmentService,
    private schemesService: SchemesService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.list = this.schemesService.getSchemes();
    this.isHost = this.userService.isHost();
    this.toggleInput(false);
    this.schemeName = new FormControl('');
  }

  public toggleInput(flag) {
    this.showInput = flag
  }

  public saveScheme() {
    this.schemesService.addSchemes(this.schemeName.value);
    this.schemeName.setValue('');
    this.toggleInput(false);
  }

}
