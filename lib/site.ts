export const COMPANY = {
  name: 'Kemjet Himalog Technologies Private Limited',
  shortName: 'Kemjet Himalog',
  tagline: 'Rooted in the Himalayas. Built for what comes next.',
  cin: 'U52210AR2026PTC014371',
  incorporation: '13 February 2026',
  status: 'Active • Private Company',
  registeredOffice: {
    lines: [
      'New Shyo Village, Lower Monastery Road',
      'Tawang, Arunachal Pradesh – 790104',
    ],
    full: 'New Shyo Village, Lower Monastery Road, Tawang, Arunachal Pradesh – 790104',
  },
  registeredState: 'Arunachal Pradesh, India',
} as const

export type Focus = {
  title: string
  description: string
}

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
    slug: 'kemjet-technology',
    index: '01',
    name: 'Kemjet Technology',
    category: 'Technology & Permit Services',
    summary:
      'The group’s technology business, covering digital platforms, digital services and Inner Line Permit (ILP) services.',
    statement: 'Digital systems for a connected region.',
    introduction:
      'Kemjet Technology is the digital business of Kemjet Himalog. It focuses on digital platforms and services, including Inner Line Permit (ILP) services as part of its permit-related activities.',
    focus: [
      {
        title: 'Digital Platforms',
        description:
          'Platforms designed to be clear, reliable and useful.',
      },
      {
        title: 'Digital Services',
        description:
          'Services that bring modern digital capabilities within reach.',
      },
      {
        title: 'Inner Line Permit (ILP)',
        description:
          'Permit-related services and assistance with ILP processes.',
      },
    ],
    storyLine: 'The next frontier is digital.',
    regional:
      'Distance has long shaped life in the North East. Digital systems and accessible services can help people navigate processes more clearly.',
    image: '/images/technology.png',
    imageAlt:
      'A developer working at two monitors in a wooden workspace overlooking misty mountains',
    storyImage: '/images/technology-story.png',
    storyImageAlt:
      'Fiber optic cables and softly glowing server lights in a dark room',
  },
  {
    slug: 'ld-scholars-home',
    index: '02',
    name: 'Kemjet Education & Youth Development',
    category: 'Education & Sports',
    summary:
      'The group’s education and youth development business, bringing together L D Scholars Home and L D Sports Academy.',
    statement: 'Learning, growth and opportunity.',
    introduction:
      'Kemjet Education & Youth Development represents the group’s commitment to education, sports and young people. Its initiatives include L D Scholars Home and L D Sports Academy.',
    focus: [
      {
        title: 'L D Scholars Home',
        description:
          'The school education initiative, supporting learning and student development.',
      },
      {
        title: 'L D Sports Academy',
        description:
          'The sports initiative, supporting participation, physical development and youth potential.',
      },
      {
        title: 'Youth Development',
        description:
          'Encouraging learning, discipline, confidence and opportunities for young people.',
      },
    ],
    storyLine: 'Education is the most enduring form of infrastructure.',
    regional:
      'Strong communities begin with learning and opportunity. This business reflects the group’s commitment to education, sports and the development of young people.',
    image: '/images/scholars.png',
    imageAlt:
      'Students walking across a school courtyard in a Himalayan valley at morning',
    storyImage: '/images/scholars-story.png',
    storyImageAlt:
      'Students reading at wooden desks in a sunlit classroom with mountains beyond the window',
  },
  {
    slug: 'ld-construction',
    index: '03',
    name: 'LD Construction',
    category: 'Construction Products',
    summary:
      'The group’s construction products business, focused on materials that form the foundation of lasting structures.',
    statement: 'Materials that endure.',
    introduction:
      'LD Construction is the construction products business of Kemjet Himalog. Every structure is only as strong as what it is made from, and in Himalayan conditions, durability matters.',
    focus: [
      {
        title: 'Construction Products',
        description:
          'Products that serve as the foundation of the built environment.',
      },
      {
        title: 'Building Materials',
        description:
          'Materials selected with structural integrity in mind.',
      },
      {
        title: 'Built to Last',
        description:
          'A focus on quality suited to demanding conditions.',
      },
    ],
    storyLine: 'Quality begins with what we build with.',
    regional:
      'Building in the Himalayas asks more of every material. LD Construction supports construction across the region with an emphasis on quality.',
    image: '/images/construction.png',
    imageAlt:
      'Close-up of stacked precast concrete blocks and steel rebar in an industrial yard',
    storyImage: '/images/construction-story.png',
    storyImageAlt:
      'Rows of concrete blocks curing inside a dusty, sunlit manufacturing shed',
  },
  {
    slug: 'farming',
    index: '04',
    name: 'Kemjet Himalayan Agro',
    category: 'Agriculture & Horticulture',
    summary:
      'The group’s agriculture and horticulture business, including cultivation of vanilla and macadamia.',
    statement: 'Cultivating what grows next.',
    introduction:
      'Kemjet Himalayan Agro represents the agriculture and horticulture business of Kemjet Himalog, with a focus on cultivation and agricultural activity, including crops such as vanilla and macadamia.',
    focus: [
      {
        title: 'Agriculture',
        description:
          'Agricultural activity rooted in the region and its growing conditions.',
      },
      {
        title: 'Horticulture',
        description:
          'Horticultural cultivation with a focus on selected crops and long-term development.',
      },
      {
        title: 'Vanilla & Macadamia',
        description:
          'Cultivation of vanilla and macadamia as part of the business’s horticultural activities.',
      },
    ],
    storyLine: 'Growing from the land, toward the future.',
    regional:
      'Agriculture and horticulture are closely connected to the land and communities of the North East. Kemjet Himalayan Agro extends the group’s focus into cultivation and agricultural development.',
    note:
      'The business focuses on agriculture and horticulture, including vanilla and macadamia cultivation.',
    image: '/images/farming.png',
    imageAlt:
      'Agricultural landscape representing farming and horticulture in the Himalayan region',
    storyImage: '/images/farming-story.png',
    storyImageAlt:
      'Horticultural cultivation representing vanilla and macadamia farming',
  },
  {
    slug: 'ld-north-east-infra',
    index: '05',
    name: 'LD North East Infra',
    category: 'Construction & Transportation',
    summary:
      'The group’s construction and transportation business, focused on infrastructure that connects communities across challenging Himalayan terrain.',
    statement: 'Connecting difficult terrain.',
    introduction:
      'LD North East Infra is the construction and transportation business of Kemjet Himalog. In a region defined by mountains, rivers and distance, infrastructure connects people, places and opportunity.',
    focus: [
      {
        title: 'Construction',
        description:
          'Construction work suited to demanding mountain geography.',
      },
      {
        title: 'Transportation',
        description:
          'Movement of materials and resources across the region.',
      },
      {
        title: 'Infrastructure',
        description:
          'A long-term view of the systems that connect communities.',
      },
    ],
    storyLine: 'In the mountains, every road is a lifeline.',
    regional:
      'The North East’s terrain is as demanding as it is beautiful. LD North East Infra is shaped by that reality, with a focus on infrastructure and the communities it connects.',
    image: '/images/infra.png',
    imageAlt:
      'Excavator and road roller working on a mountain road switchback in misty forested terrain',
    storyImage: '/images/infra-story.png',
    storyImageAlt:
      'Workers building a reinforced concrete bridge pier above a rocky mountain river',
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