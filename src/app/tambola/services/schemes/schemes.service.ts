import { Injectable } from '@angular/core';

import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class SchemesService {
  data = {schemes: []};

  constructor(private commonService: CommonService) { }

  public addSchemes(scheme) {
    this.data['schemes'].push({id: this.commonService.generateUniqueId(), checked: false, title: scheme, winner: []});
  }

  public getSchemes() {
    return this.data['schemes'];
  }

  public removeScheme(id) {
    let schemes = this.data['schemes'];
    let index = -1;
    for(let i = 0; i < schemes.length; i++) {
      if (schemes[i].id == id) {
        index = i;
      }
    }
    schemes.splice(index, 1);
  }
}
