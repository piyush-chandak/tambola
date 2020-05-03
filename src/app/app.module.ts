import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './tambola/components/board/board.component';
import { GenerateNumberComponent } from './tambola/components/generate-number/generate-number.component';
import { HistoryManagmentComponent } from './tambola/components/history-managment/history-managment.component';
import { HeaderComponent } from './shared/header/header.component';
import { TicketComponent } from './tambola/components/ticket/ticket.component';
import { ParticipantsListComponent } from './tambola/components/participants-list/participants-list.component';
import { SchemeListComponent } from './tambola/components/scheme-list/scheme-list.component';
import { SchemeListItemComponent } from './tambola/components/scheme-list-item/scheme-list-item.component';
import { ParticipantComponent } from './tambola/components/participant/participant.component';
import { AddOrEditParticipantComponent } from './tambola/components/add-or-edit-participant/add-or-edit-participant.component';
import { ModalViewComponent } from './shared/modal-view/modal-view.component';
import { TambolaComponent } from './tambola/tambola.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    GenerateNumberComponent,
    HistoryManagmentComponent,
    HeaderComponent,
    TicketComponent,
    ParticipantsListComponent,
    SchemeListComponent,
    SchemeListItemComponent,
    ParticipantComponent,
    AddOrEditParticipantComponent,
    ModalViewComponent,
    TambolaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
