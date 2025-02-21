export interface Brands {
  error:     boolean;
  codigo:    string;
  message:   string;
  menuItems: MenuItem[];
}

export interface MenuItem {
  idMenu:      number;
  descripción: string;
}
