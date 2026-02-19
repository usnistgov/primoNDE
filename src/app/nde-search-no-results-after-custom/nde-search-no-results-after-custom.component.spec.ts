import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NdeSearchNoResultsAfterCustomComponent } from './nde-search-no-results-after-custom.component';

describe('NdeSearchNoResultsAfterCustomComponent', () => {
  let component: NdeSearchNoResultsAfterCustomComponent;
  let fixture: ComponentFixture<NdeSearchNoResultsAfterCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NdeSearchNoResultsAfterCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NdeSearchNoResultsAfterCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});