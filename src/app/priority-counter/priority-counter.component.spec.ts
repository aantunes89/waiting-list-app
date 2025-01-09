import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PriorityCounterComponent } from "./priority-counter.component";

describe("PriorytyCounterComponent", () => {
  let component: PriorityCounterComponent;
  let fixture: ComponentFixture<PriorityCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriorityCounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriorityCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
