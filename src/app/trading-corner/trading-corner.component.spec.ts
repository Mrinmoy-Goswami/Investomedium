import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingCornerComponent } from './trading-corner.component';

describe('TradingCornerComponent', () => {
  let component: TradingCornerComponent;
  let fixture: ComponentFixture<TradingCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingCornerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradingCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
