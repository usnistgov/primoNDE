import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdeHelpComponentComponent } from './nde-help-component.component';

describe('NdeHelpComponentComponent', () => {
  let component: NdeHelpComponentComponent;
  let fixture: ComponentFixture<NdeHelpComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NdeHelpComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NdeHelpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
