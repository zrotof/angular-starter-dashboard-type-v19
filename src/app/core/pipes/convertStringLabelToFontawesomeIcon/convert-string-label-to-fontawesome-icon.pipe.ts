import { Pipe, PipeTransform } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
  faArrowRight,
  faBan,
  faBed,
  faBullhorn,
  faBus,
  faCar,
  faCartPlus,
  faChartLine,
  faChurch,
  faCircleCheck,
  faEarthAfrica,
  faEnvelope,
  faFloppyDisk,
  faHeart, 
  faHotel,
  faHouse,
  faLocationDot,
  faMugHot,
  faPassport,
  faPersonWalking,
  faPhoneVolume,
  faPlane,
  faPlaneDeparture,
  faPlay,
  faPlus,
  faRss,
  faShieldHalved,
  faUser, 
  faUserGroup, 
  faUsers, 
  faUserTie,
  faUtensils,
  faVanShuttle,
  faVideo,

} from '@fortawesome/free-solid-svg-icons';

import {
  faCircleXmark
} from '@fortawesome/free-regular-svg-icons'

import {
  faFacebookF,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

@Pipe({
  name: 'convertStringLabelToFontawesomeIcon',
  standalone : true
})
export class ConvertStringLabelToFontawesomeIconPipe implements PipeTransform {

  transform(value: string): IconProp {
    switch (value) {
      case 'faArrowRight' :
        return faArrowRight
      case 'faBan' : 
        return faBan
      case 'faBed':
        return faBed
      case 'faBullhorn':
        return faBullhorn
      case 'faBus':
        return faBus
      case 'faCar':
        return faCar
      case 'faCartPlus':
        return faCartPlus
      case 'faChurch':
        return faChurch
      case 'faCircleCheck':
        return faCircleCheck
      case 'faCircleXmark':
        return faCircleXmark
      case 'faEarthAfrica':
        return faEarthAfrica
      case 'faEnvelope':
        return faEnvelope
      case 'faHeart':
        return faHeart
      case 'faChartLine': 
        return faChartLine
      case 'faFacebook':
        return faFacebookF
      case 'faFloppyDisk':
        return faFloppyDisk
      case 'faHotel':
        return faHotel
      case 'faHouse':
        return faHouse
      case 'faInstagram':
        return faInstagram
      case 'faLocationDot':
        return faLocationDot
      case 'faMugHot':
        return faMugHot
      case 'faPassport':
        return faPassport
      case 'faPlane':
        return faPlane
      case 'faPlaneDeparture':
        return faPlaneDeparture
      case 'faPlay': 
        return faPlay
      case 'faPersonWalking':
        return faPersonWalking
      case 'faPhoneVolume' :
        return faPhoneVolume
      case 'faPlus':
        return faPlus
      case 'faRss': 
        return faRss
      case 'faShieldHalved':
        return faShieldHalved
      case 'faUser':
        return faUser
      case 'faUserGroup':
        return faUserGroup
      case 'faUsers':
        return faUsers
      case 'faUserTie':
        return faUserTie
      case 'faUtensils':
        return faUtensils
      case 'faVanShuttle':
        return faVanShuttle
      case 'faVideo':
        return faVideo
      default:
        return faUser;
    }
  }

}
