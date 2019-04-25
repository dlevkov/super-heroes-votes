import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectsSideComponent } from './selects-side.component';

describe('SelectsSideComponent', () => {
  let component: SelectsSideComponent;
  let fixture: ComponentFixture<SelectsSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectsSideComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectsSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
