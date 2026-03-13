import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nde-search-no-results-after-custom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nde-search-no-results-after-custom.component.html',
  styleUrls: ['./nde-search-no-results-after-custom.component.scss']
})
export class NdeSearchNoResultsAfterCustomComponent implements OnInit {
  @Input() hostComponent: any;
  @Input() parentCtrl: any;

  public searchTerm: string = '';
  public encodedSearchTerm: string = '';

  ngOnInit(): void {
    this.searchTerm = this.findSearchTerm();

    // Fallback if completely empty
    if (!this.searchTerm) {
      this.searchTerm = 'your search';
    }

    this.encodedSearchTerm = encodeURIComponent(this.searchTerm);
  }

  private findSearchTerm(): string {
    // METHOD 1: Parse the FULL URL directly
    try {
      // Using window.location.href is safer in Angular SPAs than window.location.search
      const url = new URL(window.location.href);
      const queryParam = url.searchParams.get('query');

      if (queryParam) {
        // If it happens to have the old Primo VE format, strip it out
        if (queryParam.startsWith('any,contains,')) {
          return queryParam.replace('any,contains,', '');
        }

        // Otherwise, return the exact string (e.g., "ghost in the machine")
        return queryParam;
      }
    } catch (e) {
      console.error('Custom Component: Error parsing URL', e);
    }

    // METHOD 2: Direct from Ex Libris hostComponent
    if (this.hostComponent) {
      if (this.hostComponent.searchTerm) return this.hostComponent.searchTerm;
      if (this.hostComponent.term) return this.hostComponent.term;
      if (this.hostComponent.searchQuery) return this.hostComponent.searchQuery;
    }

    // METHOD 3: Fallback for older configurations passing parentCtrl
    if (this.parentCtrl && typeof this.parentCtrl.getSearchTerm === 'function') {
      return this.parentCtrl.getSearchTerm();
    }

    return '';
  }
}