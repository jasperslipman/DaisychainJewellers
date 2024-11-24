export interface NavLink {
    label: string;
    href?: string; 
    subLinks?: NavLink[]; 
  }
  
  export const navLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    {
      label: 'Engagement & Wedding',
      subLinks: [
        { label: 'Engagement', href: '/engagement' },
        { label: 'Wedding', href: '/wedding' },
      ],
    },
    {
      label: 'Our Services',
      subLinks: [
        { label: 'Service 1', href: '/service1' },
        { label: 'Service 2', href: '/service2' },
      ],
    },
    { label: 'Ethics & Values', href: '/ethics-values' },
    { label: 'Contact Us', href: '/contact' },
  ];