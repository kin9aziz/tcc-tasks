export interface MenuItem {
  id?: number;
  label?: any;
  icon?: string;
  link?: string;
  subItems?: any;
  childItem?: any;
  isTitle?: boolean;
  badge?: any;
  parentId?: number;
  isLayout?: boolean;
}

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Dashboard',
    icon: 'bx bxs-dashboard',
    link: '/dashboard'
  },
  {
    id: 2,
    label: 'Users',
    icon: 'bx bxs-group',
    subItems: [
      {
        id: 1,
        label: 'Customers',
        link: '/access/customers',
        parentId: 2
      },
      {
        id: 2,
        label: 'Providers',
        link: '/access/providers',
        parentId: 2
      },
      {
        id: 3,
        label: 'Admins',
        link: '/access/admins',
        parentId: 2
      }
    ]
  },
  {
    id: 9,
    label: 'Settings',
    icon: 'ri-tools-line',
    link: '/settings'
  }
];