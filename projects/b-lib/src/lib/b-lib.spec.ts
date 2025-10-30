import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BLib } from './b-lib';

describe('BLib', () => {
  let component: BLib;
  let fixture: ComponentFixture<BLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
