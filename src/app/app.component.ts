import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Patient } from "./core/interfaces/patient.interface";
import {
  getBiggerTimeStamp$,
  getPatients$,
  getPatientsByPriority$,
} from "./store/global.selectors";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  patients$!: Observable<Patient[]>;

  reds$!: Observable<number>;
  greens$!: Observable<number>;
  yellows$!: Observable<number>;
  waitingTime$!: Observable<Date>;

  ngOnInit(): void {
    this.patients$ = this.store.select(getPatients$);
    this.reds$ = this.store.select(getPatientsByPriority$("red"));
    this.greens$ = this.store.select(getPatientsByPriority$("green"));
    this.yellows$ = this.store.select(getPatientsByPriority$("yellow"));
    this.waitingTime$ = this.store.select(getBiggerTimeStamp$);
  }
}
