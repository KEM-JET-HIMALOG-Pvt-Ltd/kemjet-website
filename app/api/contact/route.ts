
import { Resend } from 'resend'

export const runtime = 'nodejs'

const recipient = 'info@kemjethimalog.com'

type ContactPayload = {
  type?: 'business' | 'careers'
  name?: string
  email?: string
  phone?: string
  company?: string
  businessArea?: string
  experience?: string
  position?: string
  message?: string
}

function escapeHtml(value: string): string {
  const entities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }

  return value.replace(/[&<>"']/g, (character) => entities[character])
}

function clean(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLength)
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || ''

    if (!contentType.includes('application/json')) {
      return Response.json(
        { error: 'Unsupported request format.' },
        { status: 415 },
      )
    }

    const body = (await request.json()) as ContactPayload

    const type = body.type
    const name = clean(body.name, 120)
    const email = clean(body.email, 254)
    const phone = clean(body.phone, 40)
    const company = clean(body.company, 160)
    const businessArea = clean(body.businessArea, 120)
    const experience = clean(body.experience, 80)
    const position = clean(body.position, 160)
    const message = clean(body.message, 5000)

    if (type !== 'business' && type !== 'careers') {
      return Response.json({ error: 'Invalid form type.' }, { status: 400 })
    }

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: 'Please provide a valid name and email address.' },
        { status: 400 },
      )
    }

    if (type === 'business' && (!businessArea || !message)) {
      return Response.json(
        { error: 'Please provide a business area and message.' },
        { status: 400 },
      )
    }

    if (type === 'careers' && !position) {
      return Response.json(
        { error: 'Please provide the position or department.' },
        { status: 400 },
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    const from = process.env.RESEND_FROM_EMAIL

    if (!apiKey || !from) {
      console.error('Email configuration is incomplete.')
      return Response.json(
        { error: 'Email service is not configured yet.' },
        { status: 503 },
      )
    }

    const resend = new Resend(apiKey)
    const isCareers = type === 'careers'
    const subject = isCareers
      ? `Careers application: ${position}`
      : `Website enquiry: ${businessArea}`

    const fields: [string, string][] = isCareers
      ? [
          ['Position / department', position],
          ['Experience', experience || 'Not provided'],
        ]
      : [
          ['Business area', businessArea],
          ['Company', company || 'Not provided'],
        ]

    fields.push(
      ['Name', name],
      ['Email', email],
      ['Phone', phone || 'Not provided'],
    )

    const detailsHtml = fields
      .map(
        ([label, value]) =>
          `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`,
      )
      .join('')

    const safeMessage = escapeHtml(message || 'No message provided.')

    const { error } = await resend.emails.send({
      from,
      to: [recipient],
      replyTo: email,
      subject,
      html: `
        <h2>${isCareers ? 'Careers application' : 'Business enquiry'}</h2>
        ${detailsHtml}
        <h3>Message</h3>
        <p>${safeMessage.replace(/\n/g, '<br>')}</p>
      `,
      text: [
        isCareers ? 'Careers application' : 'Business enquiry',
        ...fields.map(([label, value]) => `${label}: ${value}`),
        '',
        'Message:',
        message || 'No message provided.',
      ].join('\n'),
    })

    if (error) {
      console.error('Resend email delivery request failed:', error.name)
      return Response.json(
        { error: 'We could not send your enquiry. Please try again later.' },
        { status: 502 },
      )
    }

    return Response.json(
      { success: true, message: 'Your enquiry has been submitted.' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Contact API failed:', error)
    return Response.json(
      { error: 'The request could not be processed. Please try again.' },
      { status: 500 },
    )
  }
}
