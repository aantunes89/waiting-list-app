import { Component, Input } from "@angular/core";
import { Priority } from "../core/types/Priority";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { globalActions } from "../store/global.actions";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-new-patient-form",
  templateUrl: "./new-patient-form.component.html",
  styleUrls: ["./new-patient-form.component.scss"],
})
export class NewPatientFormComponent {
  @Input() priorityOptions: Priority[] = ["green", "red", "yellow"];

  newPatientForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.newPatientForm = this.fb.group({
      name: ["", Validators.required],
      priority: ["green", Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(event: Event) {
    event.preventDefault();

    this.store.dispatch(
      globalActions.addPatient({
        patient: {
          ...this.newPatientForm.value,
          registerdTime: new Date(Date.now()),
        },
      })
    );

    this.newPatientForm.controls.name.reset();
  }
}
