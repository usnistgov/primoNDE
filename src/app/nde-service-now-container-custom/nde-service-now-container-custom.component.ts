import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'custom-nde-service-now-container-custom',
  standalone: true,
  imports: [],
  templateUrl: './nde-service-now-container-custom.component.html',
  styleUrl: './nde-service-now-container-custom.component.scss'
})
export class NdeServiceNowContainerCustomComponent implements OnInit {
@Input() parentCtrl: any;

  permalink!: string;

  ngOnInit(): void {
    this.permalink = this.getPermalink();
  }

  getPermalink(): string {
    const permalink = encodeURIComponent(window.location.href);
    const formField = 'https://nist.servicenowservices.com/library?id=sc_cat_item&sys_id=529edfea1b795410348d9605bc4bcb66&referring_url=';
    return formField + permalink;
  }
}