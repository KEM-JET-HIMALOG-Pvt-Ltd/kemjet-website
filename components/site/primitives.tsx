import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type TopoVariant = 'light' | 'dark' | 'gold'

export function Topo({ variant = 'light', className }: { variant?: TopoVariant; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 bg-cover bg-center', className)}
      style={{ backgroundImage: `url(/textures/topo-${variant}.svg)` }}
    />
  )
}

export function Eyebrow({
  children,
  className,
  tone = 'dark',
}: {
  children: React.ReactNode
  className?: string
  tone?: 'dark' | 'light'
}) {
  return (
    <p className={cn('eyebrow flex items-center gap-3', tone === 'dark' ? 'text-moss' : 'text-sand', className)}>
      <span aria-hidden="true" className="h-px w-8 bg-gold" />
      {children}
    </p>
  )
}

export function ArrowLink({
  href,
  children,
  tone = 'dark',
  variant = 'solid',
  className,
}: {
  href: string
  children: React.ReactNode
  tone?: 'dark' | 'light'
  variant?: 'solid' | 'line'
  className?: string
}) {
  const styles =
    variant === 'solid'
      ? tone === 'light'
        ? 'bg-ivory text-deep hover:bg-gold'
        : 'bg-forest text-ivory hover:bg-deep'
      : tone === 'light'
        ? 'border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory/10'
        : 'border border-charcoal/30 text-forest hover:border-forest hover:bg-forest/5'
  return (
    <Link
      href={href}
      className={cn(
        'group eyebrow inline-flex min-h-12 items-center gap-4 px-6 py-4 transition-colors duration-300',
        styles,
        className,
      )}
    >
      {children}
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform duration-300 ease-editorial group-hover:translate-x-1"
      />
    </Link>
  )
}
