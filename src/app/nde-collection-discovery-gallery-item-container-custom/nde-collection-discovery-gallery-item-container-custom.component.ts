import { Component, Input, OnInit, OnDestroy, inject } from '@angular/core';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

// --- DEFINE SELECTORS LOCALLY ---

// Define the shape of the Search State
interface SearchState {
  entities: { [key: string]: any };
}

// Select the 'Search' feature slice
const selectSearchState = createFeatureSelector<SearchState>('Search');

// Select the dictionary of all loaded records (entities)
const selectSearchEntities = createSelector(
  selectSearchState,
  (state) => state.entities
);

// PARAMETERIZED SELECTOR: Selects a specific record by ID
// Thanks to Rernd Uttenwiler's blog post "NDE Customization: How to build a component that requires values from the pnx"
const selectListviewRecord = (recordId: string) =>
  createSelector(
    selectSearchEntities,
    (entities) => (entities ? entities[recordId] : null)
  );

// --- COMPONENT DEFINITION ---

@Component({
  selector: 'nde-collection-discovery-gallery-item-container-custom',
  templateUrl: './nde-collection-discovery-gallery-item-container-custom.component.html',
  styleUrls: ['./nde-collection-discovery-gallery-item-container-custom.component.scss']
})
export class NdeCollectionDiscoveryGalleryItemContainerCustomComponent implements OnInit, OnDestroy {
  // The 'hostComponent' input gives us the ID (but isn't reactive itself)
  @Input() hostComponent: any;
  // Fallback in case Primo passes it via parentCtrl
  @Input() parentCtrl: any;

  // Modern Angular Injection for the Store
  private store = inject(Store);
  private sub: Subscription | undefined;

  public author: string = '';
  public creationDate: string = '';
  public series: string = '';
  public isVisible: boolean = false;

  ngOnInit(): void {
    // Get the Context (Identity) 'hostComponent'
    const context = this.hostComponent || this.parentCtrl;

    // Extract the Record ID
    const item = context?.searchResult || context?.item;
    const recordId = item?.pnx?.control?.recordid?.[0];

    if (recordId) {
      // Connect to the Store
      this.sub = this.store.select(selectListviewRecord(recordId))
        .pipe(filter(record => !!record)) // Only proceed if record exists
        .subscribe(record => {
          this.updateFields(record.pnx);
        });
    } else {
      console.warn('Custom Component: No Record ID found in hostComponent', context);
    }
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  private updateFields(pnx: any) {
    if (!pnx) return;

    // AUTHOR: Prefer 'addatta.au', fallback to 'addau'
    this.author = pnx.addata?.au?.[0] ||
                  pnx.addata?.addau?.[0] || '';

    // DATE: Prefer 'display.creationdate', fallback to 'date'
    this.creationDate = pnx.display?.creationdate?.[0] ||
                        pnx.addata?.date?.[0] || '';

    // SERIES: Prefer 'display.lds02', fallback to 'seriestitle'
    this.series = pnx.display?.lds02?.[0] ||
                  pnx.addata?.seriestitle?.[0] || '';

    // Only show the box if we actually have data
    this.isVisible = !!(this.author || this.creationDate || this.series);
  }
}