export type NavItem = {
  label: string
  href: string
  tag?: string
}

export type NavGroup = {
  title: string
  links: NavItem[]
}

export const mainNav: NavItem[] = [
  { label: 'Shop',    href: '/collections' },
  { label: 'Custom',  href: '/custom' },
  { label: 'Grillz',  href: '/grillz' },
  { label: 'Watches', href: '/watches' },
  { label: 'About',   href: '/#story' },
]

export const shopCategories: NavItem[] = [
  { label: 'Chains',           href: '/collections/chains' },
  { label: 'Pendants',         href: '/collections/pendants' },
  { label: 'Bracelets',        href: '/collections/bracelets' },
  { label: 'Rings',            href: '/collections/rings' },
  { label: 'Earrings',         href: '/collections/earrings' },
  { label: 'Watches',          href: '/watches' },
  { label: 'Grillz',           href: '/grillz' },
  { label: 'Custom Jewelry',   href: '/custom' },
  { label: 'New Arrivals',     href: '/collections/new-arrivals', tag: 'New' },
  { label: 'Best Sellers',     href: '/collections/best-sellers' },
]

export const homepageCategories: string[] = [
  'All',
  'Chains',
  'Pendants',
  'Bracelets',
  'Rings',
  'Earrings',
  'Watches',
  'Grillz',
  'Custom',
]

export const footerNav: NavGroup[] = [
  {
    title: 'Shop',
    links: [
      { label: 'Chains',    href: '/collections/chains' },
      { label: 'Pendants',  href: '/collections/pendants' },
      { label: 'Bracelets', href: '/collections/bracelets' },
      { label: 'Rings',     href: '/collections/rings' },
      { label: 'Earrings',  href: '/collections/earrings' },
    ],
  },
  {
    title: 'Inquire',
    links: [
      { label: 'Custom Jewelry', href: '/custom' },
      { label: 'Grillz',         href: '/grillz' },
      { label: 'Watches',        href: '/watches' },
    ],
  },
  {
    title: 'Browse',
    links: [
      { label: 'All Collections', href: '/collections' },
      { label: 'Best Sellers',    href: '/collections/best-sellers' },
      { label: 'New Arrivals',    href: '/collections/new-arrivals' },
    ],
  },
]
