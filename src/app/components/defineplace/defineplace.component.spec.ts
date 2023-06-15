import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinePlaceComponent } from './defineplace.component';

describe('LoginComponent', () => {
  let component: DefinePlaceComponent;
  let fixture: ComponentFixture<DefinePlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinePlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
