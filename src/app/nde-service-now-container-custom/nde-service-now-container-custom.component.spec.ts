// nde-service-now-container-custom.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NdeServiceNowContainerCustomComponent } from './nde-service-now-container-custom.component';

describe('NdeServiceNowContainerCustomComponent', () => {
  let component: NdeServiceNowContainerCustomComponent;
  let fixture: ComponentFixture<NdeServiceNowContainerCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NdeServiceNowContainerCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NdeServiceNowContainerCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});