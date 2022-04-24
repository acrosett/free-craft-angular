import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresItemComponent } from './progres-item.component';

describe('ProgresItemComponent', () => {
  let component: ProgresItemComponent;
  let fixture: ComponentFixture<ProgresItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgresItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgresItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
