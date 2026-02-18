import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NdeCollectionDiscoveryGalleryItemContainerCustomComponent } from './nde-collection-discovery-gallery-item-container-custom.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('NdeCollectionDiscoveryGalleryItemContainerCustomComponent', () => {
  let component: NdeCollectionDiscoveryGalleryItemContainerCustomComponent;
  let fixture: ComponentFixture<NdeCollectionDiscoveryGalleryItemContainerCustomComponent>;

  // Mock initial state: Search has entities, and one of them is our test record
  const initialState = {
    Search: {
      entities: {
        '9912345': {
          pnx: {
            display: { creator: ['Test Author'], creationdate: ['2025'] },
            control: { recordid: ['9912345'] }
          }
        }
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NdeCollectionDiscoveryGalleryItemContainerCustomComponent ],
      // Provide the Mock Store with our fake data
      providers: [ provideMockStore({ initialState }) ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NdeCollectionDiscoveryGalleryItemContainerCustomComponent);
    component = fixture.componentInstance;

    // Simulate what Primo does: pass the ID via hostComponent
    component.hostComponent = {
      searchResult: {
        pnx: { control: { recordid: ['9912345'] } }
      }
    };

    fixture.detectChanges();
  });

  it('should retrieve data from Store using ID', () => {
    // Check if the component successfully pulled 'Test Author' from the Mock Store
    expect(component.author).toBe('Test Author');
    expect(component.creationDate).toBe('2025');
  });
});