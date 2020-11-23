import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuShopComponent } from './mu-shop.component';

describe('MuShopComponent', () => {
  let component: MuShopComponent;
  let fixture: ComponentFixture<MuShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
