import { Pipe, PipeTransform } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
  faAngleDown,
  faAngleUp,
  faArrowLeft,
  faArrowRight,
  faCartPlus,
  faUser,
  faUserGroup,
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
        return faAngleDown
      case 'faAngleUp':
        return faAngleUp
      case 'faArrowLeft':
        return faArrowLeft
      case 'faArrowRight':
        return faArrowRight
      case 'faCartPlus':
        return faCartPlus
      case 'faUser':
        return faUser
      case 'faUsers':
        return faUsers
      case 'faUserTie':
        return faUserTie
      default:
        return faUser;
    }
  }

}
