import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'nde-help-component',
  templateUrl: './nde-help-component.component.html',
  styleUrls: ['./nde-help-component.component.scss']
})
export class NdeHelpComponent {
  // These variables control the UI state
  public isOpen: boolean = false;
  public isAnimating: boolean = false;

  openMenu() {
    this.isOpen = true;

    // A tiny delay allows the browser to register the display change
    setTimeout(() => {
      this.isAnimating = true;
      document.body.style.overflow = "hidden";
    }, 10);
  }

  closeMenu() {
    this.isAnimating = false;
    document.body.style.overflow = "visible";

    // Wait for the CSS transition to finish before hiding it from the DOM
    setTimeout(() => {
      this.isOpen = false;
    }, 300);
  }

  // Listens for the "Escape" key to close the menu
  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (this.isOpen) {
      this.closeMenu();
    }
  }
}