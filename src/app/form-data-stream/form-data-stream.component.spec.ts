import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataStreamComponent } from './form-data-stream.component';

describe('FormDataStreamComponent', () => {
  let component: FormDataStreamComponent;
  let fixture: ComponentFixture<FormDataStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDataStreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDataStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
