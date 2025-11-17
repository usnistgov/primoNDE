// Define the map
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

export const selectorComponentMap = new Map<string, any>([
  ['nde-header-before', HeaderComponent],
  ['nde-footer-bottom', FooterComponent],
]);
