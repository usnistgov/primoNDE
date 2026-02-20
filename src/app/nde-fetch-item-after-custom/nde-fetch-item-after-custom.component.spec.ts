import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdeFetchItemAfterCustomComponent } from './nde-fetch-item-after-custom.component';

describe('NdeCitationLinkerAfterCustomComponent', () => {
  let component: NdeFetchItemAfterCustomComponent;
  let fixture: ComponentFixture<NdeFetchItemAfterCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NdeFetchItemAfterCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NdeFetchItemAfterCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
