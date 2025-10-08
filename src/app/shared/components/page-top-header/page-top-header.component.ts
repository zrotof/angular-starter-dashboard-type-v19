import { Component, input } from '@angular/core';
import { TopHeader } from '../../../core/models/top-header';

@Component({
  selector: 'app-page-top-header',
  standalone: true,
  templateUrl: './page-top-header.component.html',
  styleUrls: ['./page-top-header.component.scss']
})

export class PageTopHeaderComponent {
  topHeader = input.required<TopHeader>();
}
