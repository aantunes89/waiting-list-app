import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { BehaviorSubject, Subject, interval, map, takeUntil, tap } from "rxjs";
import { Store } from "@ngrx/store";

import { updateClockAndReturnDate } from "../core/utils/clock.utils";
import { globalActions } from "../store/global.actions";
import { Patient } from "../core/interfaces/patient.interface";

const initialDate = new Date(1970, 0, 1, 0, 0, 0);

@Component({
  selector: "app-patient-card",
  templateUrl: "./patient-card.component.html",
  styleUrls: ["./patient-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientCardComponent {
  @Input() patientInfo!: Patient;
  @Input() isFirstInLine: boolean = false;

  _waitingTime = new BehaviorSubject<Date>(initialDate);
  waitingTime$ = this._waitingTime.asObservable();

  unsubscribeFromAll$ = new Subject<void>();

  constructor(private store: Store) {}

  ngOnInit() {
    interval(2000)
      .pipe(
        map((_) => updateClockAndReturnDate(this._waitingTime.getValue())),
        map((waitingTime) => {
          this._waitingTime.next(waitingTime);
          this.store.dispatch(
            globalActions.addWaitingTime({
              timestamp: waitingTime.getTime(),
              registeredTime: this.patientInfo.registerdTime,
            })
          );
        }),
        takeUntil(this.unsubscribeFromAll$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.unsubscribeFromAll$.next();
    this.unsubscribeFromAll$.complete();
  }

  onClose() {
    this.store.dispatch(
      globalActions.removePatient({ patient: this.patientInfo })
    );
  }
}
