import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'nde-fetch-item-after-custom',
  template: ''
})
export class NdeFetchItemAfterCustomComponent implements AfterViewInit, OnDestroy {
  private checkInterval: any;

  ngAfterViewInit() {
    // Check the DOM every 100 milliseconds
    this.checkInterval = setInterval(() => {

      // Look for the specific Article radio input
      const articleRadio = document.querySelector('input[value="article"]') as HTMLInputElement;

      if (articleRadio) {
        // Once found, if it's not checked, click it
        if (!articleRadio.checked) {
          articleRadio.click();
        }
        // Stop the interval so it doesn't run forever
        clearInterval(this.checkInterval);
      }
    }, 100);
  }

  ngOnDestroy() {
    // Safety cleanup when the user leaves the page
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
    }
  }
}