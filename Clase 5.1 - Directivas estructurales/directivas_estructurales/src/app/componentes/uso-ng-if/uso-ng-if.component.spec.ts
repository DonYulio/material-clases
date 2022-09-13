import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoNgIFComponent } from './uso-ng-if.component';

describe('UsoNgIFComponent', () => {
  let component: UsoNgIFComponent;
  let fixture: ComponentFixture<UsoNgIFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsoNgIFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsoNgIFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
