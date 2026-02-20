import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdeCitationLinkerAfterCustomComponent } from './nde-citation-linker-after-custom.component';

describe('NdeCitationLinkerAfterCustomComponent', () => {
  let component: NdeCitationLinkerAfterCustomComponent;
  let fixture: ComponentFixture<NdeCitationLinkerAfterCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NdeCitationLinkerAfterCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NdeCitationLinkerAfterCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
