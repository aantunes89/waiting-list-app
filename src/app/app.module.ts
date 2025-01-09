import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { PatientCardComponent } from "./patient-card/patient-card.component";
import { InfoCardComponent } from "./info-card/info-card.component";
import { StoreModule } from "@ngrx/store";
import { NewPatientFormComponent } from "./new-patient-form/new-patient-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { globalReducers } from "./store/global.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { PatientListComponent } from "./patient-list/patient-list.component";
import { PriorityCounterComponent } from "./priority-counter/priority-counter.component";

@NgModule({
  declarations: [
    AppComponent,
    PatientCardComponent,
    InfoCardComponent,
    NewPatientFormComponent,
    PatientListComponent,
    PriorityCounterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ global: globalReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
