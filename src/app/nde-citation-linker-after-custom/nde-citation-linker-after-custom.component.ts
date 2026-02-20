import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'nde-citation-linker-after-custom',
  template: '' // This component is invisible, so no HTML/SCSS files are needed!
})
export class NdeCitationLinkerAfterCustomComponent implements AfterViewInit {

  ngAfterViewInit() {
    // We use setTimeout to give Angular Formly a split-second to build the radio buttons on the screen
    setTimeout(() => {
      // Find the specific hidden input we found in your HTML snippet
      const articleRadio = document.querySelector('input[value="article"]') as HTMLInputElement;

      // If we found it, and it isn't checked, physically click it
      if (articleRadio && !articleRadio.checked) {
        articleRadio.click();
      }
    }, 300);
  }
}