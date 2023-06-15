import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NftDefineComponent } from './nftdefine.component';

describe('LoginComponent', () => {
  let component: NftDefineComponent;
  let fixture: ComponentFixture<NftDefineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NftDefineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NftDefineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
