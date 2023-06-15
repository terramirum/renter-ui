import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NftRentComponent } from './nftrent.component';

describe('LoginComponent', () => {
  let component: NftRentComponent;
  let fixture: ComponentFixture<NftRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NftRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NftRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
