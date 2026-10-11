
'use client'

import { useState } from 'react'
import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { ContactDialog } from '@/components/forms/contact-dialog'
import { cn } from '@/lib/utils'

type ContactDialogTriggerProps = {
  children?: ReactNode
  initialType?: 'business' | 'careers'
  className?: string
  light?: boolean
}

export function ContactDialogTrigger({
  children = 'Get in touch',
  initialType = 'business',
  className,
  light = false,
}: ContactDialogTriggerProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          'inline-flex min-h-12 items-center justify-center gap-3 border px-6 py-4 text-sm font-medium transition-colors',
          light
            ? 'border-ivory/50 text-ivory hover:border-sand hover:bg-ivory/10'
            : 'border-forest bg-forest text-ivory hover:bg-deep',
          className,
        )}
      >
        {children}
        <ArrowRight aria-hidden="true" className="size-4" />
      </button>

      <ContactDialog
        open={open}
        onClose={() => setOpen(false)}
        initialType={initialType}
      />
    </>
  )
}
