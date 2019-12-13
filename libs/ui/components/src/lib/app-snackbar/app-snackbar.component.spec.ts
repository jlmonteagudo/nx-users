import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSnackbarComponent } from './app-snackbar.component';

describe('AppSnackbarComponent', () => {
  let component: AppSnackbarComponent;
  let fixture: ComponentFixture<AppSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
