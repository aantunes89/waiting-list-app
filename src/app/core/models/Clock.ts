import { ClockInterface } from "../interfaces/clock.interface";

export class Clock implements ClockInterface {
  hours: number;
  minutes: number;
  seconds: number;

  constructor() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  updateHours() {
    this.hours = (this.hours + 1) % 24;
  }

  updateMinutes() {
    this.minutes = (this.minutes + 1) % 60;
    this.minutes === 0 && this.updateHours();
  }

  updateSeconds() {
    this.seconds = (this.seconds + 1) % 60;
    this.seconds === 0 && this.updateMinutes();
  }
}
