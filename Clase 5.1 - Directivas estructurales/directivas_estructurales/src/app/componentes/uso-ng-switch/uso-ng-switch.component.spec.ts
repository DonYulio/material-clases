import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoNgSwitchComponent } from './uso-ng-switch.component';

describe('UsoNgSwitchComponent', () => {
  let component: UsoNgSwitchComponent;
  let fixture: ComponentFixture<UsoNgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsoNgSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsoNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
