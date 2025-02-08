import { Component, ViewEncapsulation } from '@angular/core';
import { PageTopHeaderComponent } from '../../../../shared/components/page-top-header/page-top-header.component';
import { TopHeader } from '../../../../core/models/top-header';

@Component({
  selector: 'app-page-dashboard-container',
  templateUrl: './page-dashboard-container.component.html',
  styleUrl: './page-dashboard-container.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    PageTopHeaderComponent
  ],

})
export class PageDashboardContainerComponent {

  topHeaderData : TopHeader = {
    title: "Tableau De Bord",
    description: "Vue d'ensemble de quelques métriques clés"
  }}
