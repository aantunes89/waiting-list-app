import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Priority } from "../core/types/Priority";

@Component({
  selector: "app-priority-counter",
  templateUrl: "./priority-counter.component.html",
  styleUrls: ["./priority-counter.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriorityCounterComponent {
  @Input() ammount: number = 0;
  @Input() priority!: Priority;
}
