import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoNgForComponent } from './uso-ng-for.component';

describe('UsoNgForComponent', () => {
  let component: UsoNgForComponent;
  let fixture: ComponentFixture<UsoNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsoNgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsoNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
