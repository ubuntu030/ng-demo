import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugToolDemoComponent } from './debug-tool-demo.component';

describe('DebugToolDemoComponent', () => {
  let component: DebugToolDemoComponent;
  let fixture: ComponentFixture<DebugToolDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebugToolDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugToolDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
