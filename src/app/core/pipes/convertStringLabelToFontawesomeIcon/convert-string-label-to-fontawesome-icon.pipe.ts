import { Pipe, PipeTransform } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
  faAngleDown,
  faAngleUp,
  faArrowLeft,
  faArrowRight,
  faChartSimple,
  faCartPlus,
  faUser,
  faUsers,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';

@Pipe({
  name: 'convertStringLabelToFontawesomeIcon',
  standalone: true
})
export class ConvertStringLabelToFontawesomeIconPipe implements PipeTransform {

  transform(value: string): IconProp {
    switch (value) {
      case 'faAngleDown':
        return faAngleDown as IconProp;
      case 'faAngleUp':
        return faAngleUp as IconProp;
      case 'faArrowLeft':
        return faArrowLeft as IconProp;
      case 'faArrowRight':
        return faArrowRight as IconProp;
      case 'faCartPlus':
        return faCartPlus as IconProp;
      case 'faChartSimple':
        return faChartSimple as IconProp;
      case 'faUser':
        return faUser as IconProp;
      case 'faUsers':
        return faUsers as IconProp;
      case 'faUserTie':
        return faUserTie as IconProp;
      default:
        return faUser as IconProp;
    }
  }

}
