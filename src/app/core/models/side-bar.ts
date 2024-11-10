export interface Menu {

  icon: string,
  label: string,
  active: boolean,
  menuItems: MenuItem[] 
}

export interface MenuItem{
  label: string,
  url: string
}