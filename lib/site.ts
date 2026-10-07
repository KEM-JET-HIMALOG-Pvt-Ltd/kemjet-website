export const COMPANY = {
  name: 'Kemjet Himalog Technologies Private Limited',
  shortName: 'Kemjet Himalog',
  tagline: 'Rooted in the Himalayas. Built for what comes next.',
  cin: 'U52210AR2026PTC014371',
  incorporation: '13 February 2026',
  status: 'Active • Private Company',
  registeredOffice: {
    lines: ['New Shyo Village, Lower Monastery Road', 'Tawang, Arunachal Pradesh – 790104'],
    full: 'New Shyo Village, Lower Monastery Road, Tawang, Arunachal Pradesh – 790104',
  },
  registeredState: 'Arunachal Pradesh, India',
} as const

export type Focus = { title: string; description: string }

export type Business = {
  slug: string
  index: string
  name: string
  category: string
  summary: string
  statement: string
  introduction: string
  focus: Focus[]
  storyLine: string
  regional: string
  note?: string
  image: string
  imageAlt: string
  storyImage: string
  storyImageAlt: string
}

export const BUSINESSES: Business[] = [
  {
    slug: 'ld-scholars-home',
    index: '01',
    name: 'L D Scholars Home',
    category: 'School & Education',
    summary:
      'The group’s school and education business — a commitment to learning and to the young people who will shape the region’s future.',
    statement: 'Learning, rooted in place.',
    introduction:
      'L D Scholars Home is the school and education business of Kemjet Himalog. It reflects a simple conviction: that the long-term strength of any community begins with how it learns, and with the opportunities it creates for its young people.',
    focus: [
      { title: 'School Education', description: 'A school-based approach to education for young learners.' },
      { title: 'Learning Environments', description: 'Spaces shaped for focus, curiosity and steady growth.' },
      { title: 'Student Development', description: 'Supporting students in knowledge, discipline and character.' },
    ],
    storyLine: 'Education is the most enduring form of infrastructure.',
    regional:
      'Strong communities begin with learning. Rooted in Arunachal Pradesh, L D Scholars Home carries the group’s belief that education is central to the region’s long-term future.',
    image: '/images/scholars.png',
    imageAlt: 'Students walking across a school courtyard in a Himalayan valley at morning',
    storyImage: '/images/scholars-story.png',
    storyImageAlt: 'Students reading at wooden desks in a sunlit classroom with mountains beyond the window',
  },
  {
    slug: 'ld-north-east-infra',
    index: '02',
    name: 'LD North East Infra',
    category: 'Construction & Transportation',
    summary:
      'The group’s construction and transportation business, focused on the infrastructure that connects communities across challenging Himalayan terrain.',
    statement: 'Connecting difficult terrain.',
    introduction:
      'LD North East Infra is the construction and transportation business of Kemjet Himalog. In a region defined by mountains, rivers and distance, infrastructure is not an abstraction — it is what connects people, places and possibility.',
    focus: [
      { title: 'Construction', description: 'Construction work suited to demanding mountain geography.' },
      { title: 'Transportation', description: 'Movement of materials and resources across the region.' },
      { title: 'Infrastructure', description: 'A long-term view of the systems that connect communities.' },
    ],
    storyLine: 'In the mountains, every road is a lifeline.',
    regional:
      'The North East’s terrain is as demanding as it is beautiful. LD North East Infra is shaped by that reality — building with respect for the land and for the communities it connects.',
    image: '/images/infra.png',
    imageAlt: 'Excavator and road roller working on a mountain road switchback in misty forested terrain',
    storyImage: '/images/infra-story.png',
    storyImageAlt: 'Workers building a reinforced concrete bridge pier above a rocky mountain river',
  },
  {
    slug: 'ld-construction',
    index: '03',
    name: 'LD Construction',
    category: 'Construction Products',
    summary:
      'The group’s construction products business, focused on the materials that form the foundation of lasting structures.',
    statement: 'Materials that endure.',
    introduction:
      'LD Construction is the construction products business of Kemjet Himalog. Every structure is only as strong as what it is made from — and in Himalayan conditions, durability is not optional.',
    focus: [
      { title: 'Construction Products', description: 'Products that serve as the foundation of the built environment.' },
      { title: 'Building Materials', description: 'Materials selected and made with structural integrity in mind.' },
      { title: 'Built to Last', description: 'A standard of quality suited to demanding conditions.' },
    ],
    storyLine: 'Quality begins with what we build with.',
    regional:
      'Building in the Himalayas asks more of every material. LD Construction is grounded in that understanding — supporting construction across the region with an emphasis on quality.',
    image: '/images/construction.png',
    imageAlt: 'Close-up of stacked precast concrete blocks and steel rebar in an industrial yard',
    storyImage: '/images/construction-story.png',
    storyImageAlt: 'Rows of concrete blocks curing inside a dusty, sunlit manufacturing shed',
  },
  {
    slug: 'kemjet-technology',
    index: '04',
    name: 'Kemjet Technology',
    category: 'Digital Platforms & Services',
    summary:
      'The group’s digital business, focused on digital platforms and services that bring modern capability to the region.',
    statement: 'Digital systems for a connected region.',
    introduction:
      'Kemjet Technology is the digital business of Kemjet Himalog. It represents the group’s forward edge — the belief that a company rooted in the Himalayas can and should build for a digital future.',
    focus: [
      { title: 'Digital Platforms', description: 'Platforms designed to be clear, reliable and useful.' },
      { title: 'Digital Services', description: 'Services that bring modern digital capability within reach.' },
      { title: 'Technology-Driven', description: 'Technology as a foundation across the wider group.' },
    ],
    storyLine: 'The next frontier is digital.',
    regional:
      'Distance has long shaped life in the North East. Digital systems can change that equation — and Kemjet Technology is the group’s commitment to being part of that change.',
    image: '/images/technology.png',
    imageAlt: 'A developer working at two monitors in a wooden workspace overlooking misty mountains',
    storyImage: '/images/technology-story.png',
    storyImageAlt: 'Fiber optic cables and softly glowing server lights in a dark room',
  },
  {
    slug: 'kemjet-permit-services',
    index: '05',
    name: 'Kemjet Permit Services',
    category: 'Permit Services',
    summary:
      'The group’s newest business, focused on permit services and a clear, orderly approach to permit-related processes.',
    statement: 'Clarity in process.',
    introduction:
      'Kemjet Permit Services is the newest business within Kemjet Himalog, focused on permit services. It is being shaped around a precise, orderly and professional approach to permit-related processes.',
    focus: [
      { title: 'Permit Services', description: 'Services related to permit processes.' },
      { title: 'Process Clarity', description: 'A structured, orderly and transparent way of working.' },
      { title: 'Professional Conduct', description: 'Precision, care and accountability in every interaction.' },
    ],
    storyLine: 'Precision is a form of respect.',
    regional:
      'As the newest part of the group, Kemjet Permit Services shares the same Himalayan foundation and the same commitment to responsible, professional conduct.',
    note: 'Further details about this business will be shared as it develops.',
    image: '/images/permit.png',
    imageAlt: 'Top-down view of neatly arranged documents, a topographic map and plan drawings on a desk',
    storyImage: '/images/permit-story.png',
    storyImageAlt: 'Hands arranging documents and folders into an orderly sequence on a wooden table',
  },
]

export function getBusiness(slug: string) {
  return BUSINESSES.find((b) => b.slug === slug)
}

export const VALUES = [
  { index: '01', name: 'Integrity', line: 'Responsible business' },
  { index: '02', name: 'Quality', line: 'Built to last' },
  { index: '03', name: 'Innovation', line: 'Technology-driven' },
  { index: '04', name: 'Community', line: 'Rooted locally' },
] as const

export const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Businesses', href: '/#businesses' },
  { label: 'Philosophy', href: '/#philosophy' },
  { label: 'Corporate', href: '/#corporate' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/#contact' },
] as const
