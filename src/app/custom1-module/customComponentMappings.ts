import { NdeServiceNowContainerCustomComponent } from "../nde-service-now-container-custom/nde-service-now-container-custom.component";
import { NdeCollectionDiscoveryGalleryItemContainerCustomComponent } from "../nde-collection-discovery-gallery-item-container-custom/nde-collection-discovery-gallery-item-container-custom.component";
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NdeSearchNoResultsAfterCustomComponent } from '../nde-search-no-results-after-custom/nde-search-no-results-after-custom.component';
import { NdeFetchItemAfterCustomComponent } from '../nde-fetch-item-after-custom/nde-fetch-item-after-custom.component';

// Define the map
export const selectorComponentMap = new Map<string, any>([
  ['nde-view-it-after', NdeServiceNowContainerCustomComponent],
  ['nde-collection-discovery-gallery-item-bottom', NdeCollectionDiscoveryGalleryItemContainerCustomComponent],
  ['nde-header-before', HeaderComponent],
  ['nde-footer-bottom', FooterComponent],
  ['nde-search-no-results-after', NdeSearchNoResultsAfterCustomComponent],
  ['nde-fetch-item-after', NdeFetchItemAfterCustomComponent]
]);
