import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NftListComponent } from './nftlist.component';

describe('LandingComponent', () => {
  let component: NftListComponent;
  let fixture: ComponentFixture<NftListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NftListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
