import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveTestComponent } from './directive-test.component';

describe('DirectiveTestComponent', () => {
  let component: DirectiveTestComponent;
  let fixture: ComponentFixture<DirectiveTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
