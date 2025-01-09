import { Priority } from "../types/Priority";

export interface Patient {
  name: string;
  registerdTime: Date;
  priority: Priority;
  waitingTime?: Date;
}
