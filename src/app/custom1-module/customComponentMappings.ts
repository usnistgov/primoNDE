import { NdeServiceNowContainerCustomComponent } from "../nde-service-now-container-custom/nde-service-now-container-custom.component";
import { NdeCollectionDiscoveryGalleryItemContainerCustomComponent } from "../nde-collection-discovery-gallery-item-container-custom/nde-collection-discovery-gallery-item-container-custom.component";
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

// Define the map
export const selectorComponentMap = new Map<string, any>([
  ['nde-view-it-after', NdeServiceNowContainerCustomComponent],

  // Mapping your new collection discovery component
  ['nde-collection-discovery-gallery-item-bottom', NdeCollectionDiscoveryGalleryItemContainerCustomComponent],
  ['nde-header-before', HeaderComponent],
  ['nde-footer-bottom', FooterComponent],
]);
