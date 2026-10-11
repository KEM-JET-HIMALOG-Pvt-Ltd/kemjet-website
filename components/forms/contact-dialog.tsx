
'use client'

import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import {
  ArrowRight,
  BriefcaseBusiness,
  Mail,
  Upload,
  X,
} from 'lucide-react'

import { BUSINESSES } from '@/lib/site'

type ContactType = 'business' | 'careers'

type ContactDialogProps = {
  open: boolean
  onClose: () => void
  initialType?: ContactType
}

export function ContactDialog({
  open,
  onClose,
  initialType = 'business',
}: ContactDialogProps) {
  const [type, setType] = useState<ContactType>(initialType)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formMessage, setFormMessage] = useState('')
  const [messageType, setMessageType] = useState<
    'success' | 'error' | ''
  >('')

  useEffect(() => {
    if (open) {
      setType(initialType)
      setFormMessage('')
      setMessageType('')
    }
  }, [open, initialType])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !isSubmitting) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose, isSubmitting])

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    if (isSubmitting) return

    const form = event.currentTarget
    const formData = new FormData(form)
    const resume = formData.get('resume')

    // CV uploads require a separate secure upload implementation.
    if (
      type === 'careers' &&
      resume instanceof File &&
      resume.size > 0
    ) {
      setMessageType('error')
      setFormMessage(
        'CV uploads are not enabled yet. Please remove your attachment before submitting. You can submit your application without a CV for now.',
      )
      return
    }

    setIsSubmitting(true)
    setFormMessage('')
    setMessageType('')

    const payload = {
      type,
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      company: String(formData.get('company') || ''),
      businessArea: String(formData.get('business') || ''),
      experience: String(formData.get('experience') || ''),
      position: String(formData.get('position') || ''),
      message: String(formData.get('message') || ''),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      
const responseText = await response.text()

let result: { error?: string; success?: boolean } = {}

try {
  result = responseText
    ? JSON.parse(responseText)
    : {}
} catch {
  result = {}
}

if (!response.ok) {
  throw new Error(
    result.error ||
      `The server returned an error (${response.status}). Check the terminal for details.`,
  )
}

if (!result.success) {
  throw new Error(
    'The server response was unexpected. Please check the terminal.',
  )
}


      setMessageType('success')
      setFormMessage(
        type === 'careers'
          ? 'Your application has been submitted successfully.'
          : 'Your enquiry has been submitted successfully.',
      )

      form.reset()
    } catch (error) {
      setMessageType('error')
      setFormMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-deep/80 p-4 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget &&
          !isSubmitting
        ) {
          onClose()
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-dialog-title"
        className="relative my-auto w-full max-w-2xl border border-gold/30 bg-ivory text-deep shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          disabled={isSubmitting}
          aria-label="Close contact form"
          className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center border border-deep/15 transition-colors hover:bg-deep hover:text-ivory disabled:opacity-50"
        >
          <X className="size-5" />
        </button>

        <div className="bg-forest px-6 py-8 text-ivory sm:px-10 sm:py-10">
          <p className="eyebrow mb-3 text-gold">
            KEMJET HIMALOG
          </p>

          <h2
            id="contact-dialog-title"
            className="font-serif text-4xl font-light sm:text-5xl"
          >
            Let&apos;s connect.
          </h2>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/75 sm:text-base">
            Tell us how we can help. Choose the type of request
            to get started.
          </p>
        </div>

        <form
          className="max-h-[65vh] space-y-6 overflow-y-auto p-6 sm:p-10"
          onSubmit={handleSubmit}
        >
          <fieldset disabled={isSubmitting}>
            <legend className="eyebrow mb-3 text-deep/70">
              I&apos;m contacting you about
            </legend>

            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => {
                  setType('business')
                  setFormMessage('')
                  setMessageType('')
                }}
                aria-pressed={type === 'business'}
                className={`flex min-h-14 items-center gap-3 border p-4 text-left transition-colors ${
                  type === 'business'
                    ? 'border-forest bg-forest text-ivory'
                    : 'border-deep/15 hover:border-forest'
                }`}
              >
                <Mail className="size-5 shrink-0 text-gold" />
                <span className="text-sm font-medium">
                  Business enquiry
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setType('careers')
                  setFormMessage('')
                  setMessageType('')
                }}
                aria-pressed={type === 'careers'}
                className={`flex min-h-14 items-center gap-3 border p-4 text-left transition-colors ${
                  type === 'careers'
                    ? 'border-forest bg-forest text-ivory'
                    : 'border-deep/15 hover:border-forest'
                }`}
              >
                <BriefcaseBusiness className="size-5 shrink-0 text-gold" />
                <span className="text-sm font-medium">
                  Careers / Job application
                </span>
              </button>
            </div>
          </fieldset>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-medium"
              >
                Full name *
              </label>
              <input
                id="contact-name"
                name="name"
                required
                maxLength={120}
                autoComplete="name"
                placeholder="Your full name"
                className="w-full border border-deep/20 bg-white px-4 py-3 outline-none transition focus:border-forest"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium"
              >
                Email address *
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full border border-deep/20 bg-white px-4 py-3 outline-none transition focus:border-forest"
              />
            </div>

            <div>
              <label
                htmlFor="contact-phone"
                className="mb-2 block text-sm font-medium"
              >
                Phone number
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                maxLength={40}
                autoComplete="tel"
                placeholder="Your phone number"
                className="w-full border border-deep/20 bg-white px-4 py-3 outline-none transition focus:border-forest"
              />
            </div>

            {type === 'business' ? (
              <div>
                <label
                  htmlFor="contact-company"
                  className="mb-2 block text-sm font-medium"
                >
                  Company / Organisation
                </label>
                <input
                  id="contact-company"
                  name="company"
                  maxLength={160}
                  placeholder="Organisation name"
                  className="w-full border border-deep/20 bg-white px-4 py-3 outline-none focus:border-forest"
                />
              </div>
            ) : (
              <div>
                <label
                  htmlFor="contact-experience"
                  className="mb-2 block text-sm font-medium"
                >
                  Experience
                </label>
                <select
                  id="contact-experience"
                  name="experience"
                  defaultValue=""
                  className="w-full border border-deep/20 bg-white px-4 py-3 outline-none focus:border-forest"
                >
                  <option value="">Select experience</option>
                  <option value="Fresher">Fresher</option>
                  <option value="1–3 years">1–3 years</option>
                  <option value="4–7 years">4–7 years</option>
                  <option value="8+ years">8+ years</option>
                </select>
              </div>
            )}
          </div>

          {type === 'business' ? (
            <div>
              <label
                htmlFor="contact-business"
                className="mb-2 block text-sm font-medium"
              >
                Business area *
              </label>
              <select
                id="contact-business"
                name="business"
                required
                defaultValue=""
                className="w-full border border-deep/20 bg-white px-4 py-3 outline-none focus:border-forest"
              >
                <option value="">Select a business area</option>
                <option value="General / Corporate Enquiry">
                  General / Corporate Enquiry
                </option>
                {BUSINESSES.map((business) => (
                  <option
                    key={business.slug}
                    value={business.name}
                  >
                    {business.name}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <>
              <div>
                <label
                  htmlFor="contact-position"
                  className="mb-2 block text-sm font-medium"
                >
                  Position / Department *
                </label>
                <input
                  id="contact-position"
                  name="position"
                  required
                  maxLength={160}
                  placeholder="Role you are interested in"
                  className="w-full border border-deep/20 bg-white px-4 py-3 outline-none focus:border-forest"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-resume"
                  className="mb-2 block text-sm font-medium"
                >
                  Resume / CV
                </label>
                <label
                  htmlFor="contact-resume"
                  className="flex cursor-pointer items-center gap-3 border border-dashed border-deep/30 bg-white p-4 transition hover:border-forest"
                >
                  <Upload className="size-5 shrink-0 text-forest" />
                  <span className="text-sm text-deep/70">
                    Choose a PDF or DOCX file
                  </span>
                </label>
                <input
                  id="contact-resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="sr-only"
                />
                <p className="mt-2 text-xs text-deep/60">
                  Secure CV uploads are not enabled yet. You can
                  submit your application without an attachment.
                </p>
              </div>
            </>
          )}

          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-medium"
            >
              {type === 'business'
                ? 'Tell us about your enquiry *'
                : 'Message (optional)'}
            </label>
            <textarea
              id="contact-message"
              name="message"
              required={type === 'business'}
              maxLength={5000}
              rows={4}
              placeholder={
                type === 'business'
                  ? 'How can Kemjet Himalog help you?'
                  : 'Tell us a little about yourself...'
              }
              className="w-full resize-y border border-deep/20 bg-white px-4 py-3 outline-none focus:border-forest"
            />
          </div>

          {formMessage && (
            <p
              role="status"
              aria-live="polite"
              className={`text-sm leading-relaxed ${
                messageType === 'success'
                  ? 'text-green-700'
                  : 'text-red-700'
              }`}
            >
              {formMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-forest px-6 py-4 text-sm font-medium text-ivory transition-colors hover:bg-deep disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting
              ? 'Submitting...'
              : type === 'business'
                ? 'Submit Enquiry'
                : 'Submit Application'}
            <ArrowRight className="size-4" />
          </button>

          <p className="text-center text-xs leading-relaxed text-deep/60">
            Enquiries are sent to info@kemjethimalog.com.
          </p>
        </form>
      </section>
    </div>
  )
}
