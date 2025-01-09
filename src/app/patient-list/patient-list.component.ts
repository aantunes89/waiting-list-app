import { Component, OnInit } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { Patient } from "../core/interfaces/patient.interface";
import { Store } from "@ngrx/store";
import { GlobalStateInterface } from "../store/global.reducer";
import { getPatients$ } from "../store/global.selectors";

@Component({
  selector: "app-patient-list",
  templateUrl: "./patient-list.component.html",
  styleUrls: ["./patient-list.component.scss"],
})
export class PatientListComponent implements OnInit {
  patients$!: Observable<Patient[]>;

  constructor(private store: Store<GlobalStateInterface>) {}

  ngOnInit(): void {
    this.patients$ = this.store
      .select(getPatients$)
      .pipe(map((patients) => this.organizeQeue(patients)));
  }

  organizeQeue(patients: Patient[]) {
    const reds = patients.filter(({ priority }) => priority === "red");
    const greens = patients.filter(({ priority }) => priority === "green");
    const yellows = patients.filter(({ priority }) => priority === "yellow");

    return [...reds, ...yellows, ...greens];
  }
}
