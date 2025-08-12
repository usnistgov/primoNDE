import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdeCollectionDiscoveryGalleryItemContainerCustomComponent } from './nde-collection-discovery-gallery-item-container-custom.component';

describe('NdeCollectionDiscoveryGalleryItemContainerCustomComponent', () => {
  let component: NdeCollectionDiscoveryGalleryItemContainerCustomComponent;
  let fixture: ComponentFixture<NdeCollectionDiscoveryGalleryItemContainerCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NdeCollectionDiscoveryGalleryItemContainerCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NdeCollectionDiscoveryGalleryItemContainerCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
