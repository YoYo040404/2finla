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
  { label: 'Shop',     href: '/collections' },
  { label: 'Pendants', href: '/collections/pendants' },
  { label: 'Grillz',   href: '/grillz' },
  { label: 'Watches',  href: '/watches' },
  { label: 'Custom',   href: '/custom' },
  { label: 'About',    href: '/about' },
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
  { label: 'Ask What’s Available', href: '/collections/new-arrivals' },
  { label: 'Explore Styles',     href: '/collections/best-sellers' },
  { label: 'Silver + Moissanite', href: '/materials' },
  { label: 'Size Guide', href: '/size-guide' },
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
      { label: 'Silver + Moissanite', href: '/materials' },
      { label: 'Size Guide', href: '/size-guide' },
      { label: 'Explore Styles',     href: '/collections/best-sellers' },
      { label: 'Ask What’s Available', href: '/collections/new-arrivals' },
    ],
  },
]
