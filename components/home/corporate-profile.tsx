import Image from 'next/image'

import { Eyebrow } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import { COMPANY } from '@/lib/site'

const ROWS = [
  { label: 'Corporate Identity Number', value: COMPANY.cin, mono: true },
  { label: 'Incorporation', value: COMPANY.incorporation },
  { label: 'Status', value: COMPANY.status },
  { label: 'Registered State', value: COMPANY.registeredState },
  {
    label: 'Registered Office',
    value: COMPANY.registeredOffice.full,
    wide: true,
  },
]

const DIRECTORS = [
  {
    name: 'Lobsang Drema & Rinchin Gyatso',
    designation: 'Chairman & Managing Director',
    biography: '',
    photo: '/images/rinchin.png',
  },
  {
    name: 'Gollo Muze',
    designation: 'Director, Operations',
    biography: '',
    photo: '/images/gollo.jpeg',
  },
  {
    name: 'Licha Sama',
    designation: 'Director, Agri-Horticulture',
    biography: '',
    photo: '/images/licha.jpeg',
  },
  {
    name: 'Tenzin Lhamo',
    designation: 'Director, Education',
    biography: '',
    photo: '/images/tenzin.jpeg',
  },
]

const EMPLOYEES = [
  {
    name: 'Soruno Kent',
    role: 'Operations',
    photo: '/images/soruu.png',
  },
  {
    name: 'Vijay Kumar',
    role: 'Software Engineer',
    photo: '/images/vijay.jpeg',
  },
  {
    name: 'Souvik Bhattacharya',
    role: 'Software Engineer',
    photo: '/images/souvik.png',
  },
  {
    name: 'Madeshwari',
    role: 'Software Engineer',
    photo: '/images/madhu.jpeg',
  },
]

function ProfilePlaceholder({ compact = false }: { compact?: boolean }) {
  return (
    <div
      aria-label="Profile photo to be added"
      className={`relative flex w-full items-center justify-center overflow-hidden border border-[#DCCDB6] bg-[#EEE6D8] ${
        compact ? 'aspect-[3/4]' : 'aspect-[4/5]'
      }`}
    >
      <div className="flex flex-col items-center gap-2">
        <div
          className={`rounded-full bg-[#D8C2B3] ${
            compact ? 'size-8' : 'size-12'
          }`}
        />
        <div
          className={`rounded-t-full bg-[#D8C2B3] ${
            compact ? 'h-8 w-14' : 'h-12 w-20'
          }`}
        />
        <span className="mt-1 text-center text-[10px] uppercase tracking-[0.12em] text-[#817467]">
          Photo pending
        </span>
      </div>
    </div>
  )
}

function ProfilePhoto({
  src,
  name,
  compact = false,
}: {
  src: string
  name: string
  compact?: boolean
}) {
  if (!src) {
    return <ProfilePlaceholder compact={compact} />
  }

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#EEE6D8] ${
        compact ? 'aspect-[3/4]' : 'aspect-[4/5]'
      }`}
    >
      <Image
        src={src}
        alt={`Portrait of ${name}`}
        fill
        sizes={
          compact
            ? '(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 90vw'
            : '(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 90vw'
        }
        className="object-contain"
      />
    </div>
  )
}

export function CorporateProfile() {
  return (
    <section id="corporate" className="scroll-mt-20">
      {/* CORPORATE REGISTRATION */}
      <div className="bg-[#EFE8D6] py-24 md:py-36">
        <div className="container-editorial">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <Eyebrow>Corporate</Eyebrow>
                </Reveal>

                <Reveal delay={100}>
                  <h2
                    id="corporate-heading"
                    className="mt-8 font-serif text-5xl font-light uppercase leading-[0.95] text-forest md:text-6xl"
                  >
                    Corporate
                    <span className="block">Profile</span>
                  </h2>
                </Reveal>

                <Reveal delay={200}>
                  <p className="mt-8 max-w-sm font-serif text-xl italic text-moss">
                    {COMPANY.name}
                  </p>
                </Reveal>
              </div>
            </div>

            <Reveal delay={150} className="lg:col-span-7 lg:col-start-6">
              <dl className="grid border-t border-forest/25 sm:grid-cols-2">
                {ROWS.map((row, index) => (
                  <div
                    key={row.label}
                    className={`border-b border-forest/25 py-8 sm:py-10 ${
                      row.wide
                        ? 'sm:col-span-2'
                        : index % 2 === 0
                          ? 'sm:border-r sm:pr-8'
                          : 'sm:pl-8'
                    }`}
                  >
                    <dt className="eyebrow text-moss">{row.label}</dt>

                    <dd
                      className={
                        row.mono
                          ? 'mt-4 break-all font-sans text-xl font-medium tracking-[0.08em] text-forest tabular-nums md:text-2xl'
                          : 'mt-4 font-serif text-3xl leading-tight text-forest text-pretty md:text-4xl'
                      }
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-8 max-w-xl text-xs leading-relaxed text-muted-foreground">
                Statutory information is provided for reference and reflects
                the company’s registration details.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* BOARD OF DIRECTORS */}
      <div
        id="leadership"
        className="bg-[#203D32] py-20 text-[#FFF9F0] md:py-28"
      >
        <div className="container-editorial">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-[#D8BB7A]">
              Leadership
            </p>

            <h2 className="mt-4 font-serif text-5xl font-light leading-tight text-[#FAF7F0] md:text-7xl">
              Board of Directors
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#DCE5DA] md:text-lg">
              The people who guide {COMPANY.name}.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-7">
            {DIRECTORS.map((director, index) => (
              <Reveal
                key={`${director.name}-${index}`}
                delay={index * 80}
              >
                <article className="min-w-0">
                  <div className="overflow-hidden rounded-t-[5rem] rounded-b-sm bg-[#F7F3E9]">
                    <ProfilePhoto
                      src={director.photo}
                      name={director.name}
                    />
                  </div>

                  <div className="pt-4">
                    <h3 className="font-serif text-xl leading-tight text-white md:text-2xl">
                      {director.name}
                    </h3>

                    <p className="mt-1 text-sm leading-snug text-[#D8BB7A] md:text-base">
                      {director.designation}
                    </p>

                    {director.biography && (
                      <p className="mt-3 text-xs leading-relaxed text-[#DCE5DA] md:text-sm">
                        {director.biography}
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* OUR TEAM */}
      <div id="team" className="bg-[#FAF7F0] py-20 md:py-28">
        <div className="container-editorial">
          <Reveal>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <span className="h-3 w-2 rounded-[1px] bg-[#3768B1]" />
                <span className="h-3 w-2 rounded-[1px] bg-white ring-1 ring-[#D9D0C2]" />
                <span className="h-3 w-2 rounded-[1px] bg-[#B83C36]" />
                <span className="h-3 w-2 rounded-[1px] bg-[#E9BD43]" />
              </div>

              <p className="text-sm font-medium text-[#9A2D2D]">
                Our team
              </p>
            </div>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl font-light leading-tight text-[#1F252B] md:text-7xl">
              The people behind our work
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4 sm:gap-x-6 md:mt-16 md:gap-x-8">
            {EMPLOYEES.map((employee, index) => (
              <Reveal key={employee.name} delay={index * 80}>
                <article className="min-w-0">
                  <ProfilePhoto
                    src={employee.photo}
                    name={employee.name}
                    compact
                  />

                  <div className="pt-3">
                    <h3 className="font-serif text-lg leading-snug text-[#20262B] md:text-xl">
                      {employee.name}
                    </h3>

                    <p className="mt-1 text-sm text-[#9A2D2D]">
                      {employee.role}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}