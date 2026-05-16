'use client'

import { useState } from 'react'
import Link from 'next/link'

type FormData = {
  name:      string
  phone:     string
  email:     string
  pieceType: string
  idea:      string
  material:  string
  stone:     string
  budget:    string
  notes:     string
}

const EMPTY: FormData = {
  name:      '',
  phone:     '',
  email:     '',
  pieceType: '',
  idea:      '',
  material:  '',
  stone:     '',
  budget:    '',
  notes:     '',
}

const PIECE_OPTIONS = [
  'Name Piece',
  'Logo Piece',
  'Photo Pendant',
  'Number Piece',
  'Iced-Out Pendant',
  'Custom Chain',
]

const LABEL_STYLE: React.CSSProperties = {
  display:       'block',
  fontFamily:    'var(--font-body)',
  fontSize:      '0.68rem',
  fontWeight:    600,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color:         'var(--color-brand-gold)',
  marginBottom:  '0.5rem',
}

export function CustomForm() {
  const [data,       setData]       = useState<FormData>(EMPTY)
  const [submitting, setSubmitting] = useState(false)
  const [submitted,  setSubmitted]  = useState(false)

  function field(key: keyof FormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setData((prev) => ({ ...prev, [key]: e.target.value }))
  }

  function selectPiece(name: string) {
    setData((prev) => ({ ...prev, pieceType: prev.pieceType === name ? '' : name }))
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 600))
    setSubmitting(false)
    setSubmitted(true)
  }

  /* ── Success state ──────────────────────────────────────────────────────── */
  if (submitted) {
    return (
      <section
        id="custom-form"
        style={{
          backgroundColor: 'var(--color-brand-black)',
          borderTop:       '1px solid var(--color-brand-border)',
          paddingTop:      'clamp(3rem, 7vw, 5rem)',
          paddingBottom:   'clamp(3rem, 7vw, 5rem)',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            style={{
              maxWidth:        '560px',
              padding:         '2.5rem',
              backgroundColor: 'var(--color-brand-charcoal)',
              border:          '1px solid var(--color-brand-gold-dim)',
            }}
          >
            <span className="section-eyebrow" style={{ display: 'block', marginBottom: '0.875rem' }}>
              Request Received
            </span>
            <p
              style={{
                fontFamily:   'var(--font-display)',
                fontSize:     'clamp(1.4rem, 3vw, 2rem)',
                fontWeight:   400,
                color:        'var(--color-brand-white)',
                lineHeight:   1.2,
                marginBottom: '1rem',
              }}
            >
              Your request was received.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '0.9rem',
                color:      'var(--color-brand-muted)',
                lineHeight: 1.65,
              }}
            >
              We&apos;ll review the details and follow up with next-step information.
            </p>
            <Link
              href="/"
              className="btn-outline-dim"
              style={{ marginTop: '1.75rem', display: 'inline-block' }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    )
  }

  /* ── Form ───────────────────────────────────────────────────────────────── */
  return (
    <section
      id="custom-form"
      style={{
        backgroundColor: 'var(--color-brand-black)',
        borderTop:       '1px solid var(--color-brand-border)',
        paddingTop:      'clamp(3rem, 7vw, 5rem)',
        paddingBottom:   'clamp(3rem, 7vw, 5rem)',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 1.5rem' }}>
        <span className="section-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          Custom Piece Request
        </span>
        <h2
          style={{
            fontFamily:   'var(--font-display)',
            fontSize:     'clamp(1.6rem, 3.5vw, 2.5rem)',
            fontWeight:   400,
            color:        'var(--color-brand-white)',
            lineHeight:   1.08,
            marginBottom: '0.75rem',
            marginTop:    '0.5rem',
          }}
        >
          Tell us the vision. We build it.
        </h2>
        <p
          style={{
            fontFamily:   'var(--font-body)',
            fontSize:     '0.85rem',
            color:        'var(--color-brand-muted)',
            lineHeight:   1.6,
            marginBottom: '2rem',
            maxWidth:     '50ch',
          }}
        >
          Pick a piece type below or describe your own. Any idea is a valid starting point.
        </p>

        {/* Piece type chips */}
        <div style={{ marginBottom: '2.25rem' }}>
          <p style={LABEL_STYLE}>What are you building?</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.25rem' }}>
            {PIECE_OPTIONS.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => selectPiece(name)}
                className={`piece-selector${data.pieceType === name ? ' piece-selector-active' : ''}`}
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.75rem' }}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ maxWidth: '720px', display: 'grid', gap: '1.5rem' }}>

          {/* Name + Phone */}
          <div style={{ display: 'grid', gap: '1.5rem' }} className="md:grid-cols-2">
            <div>
              <label htmlFor="cf-name" style={LABEL_STYLE}>Name *</label>
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={data.name}
                onChange={field('name')}
                className="form-input"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="cf-phone" style={LABEL_STYLE}>Phone *</label>
              <input
                id="cf-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                value={data.phone}
                onChange={field('phone')}
                className="form-input"
                placeholder="Your phone number"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="cf-email" style={LABEL_STYLE}>Email <span style={{ opacity: 0.55 }}>(optional)</span></label>
            <input
              id="cf-email"
              name="email"
              type="email"
              autoComplete="email"
              value={data.email}
              onChange={field('email')}
              className="form-input"
              placeholder="your@email.com"
            />
          </div>

          {/* Piece Type — kept as dropdown for "Other" and confirmation */}
          <div>
            <label htmlFor="cf-piece" style={LABEL_STYLE}>Piece Type *</label>
            <select
              id="cf-piece"
              name="pieceType"
              required
              value={data.pieceType}
              onChange={field('pieceType')}
              className="form-input"
              style={{ cursor: 'pointer' }}
            >
              <option value="" disabled>Select a piece type</option>
              <option value="Name Piece">Name Piece</option>
              <option value="Logo Piece">Logo Piece</option>
              <option value="Photo Pendant">Photo Pendant</option>
              <option value="Number Piece">Number Piece</option>
              <option value="Iced-Out Pendant">Iced-Out Pendant</option>
              <option value="Custom Chain">Custom Chain</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Describe Your Idea */}
          <div>
            <label htmlFor="cf-idea" style={LABEL_STYLE}>Describe Your Idea *</label>
            <textarea
              id="cf-idea"
              name="idea"
              required
              rows={4}
              value={data.idea}
              onChange={field('idea')}
              className="form-input"
              style={{ resize: 'vertical' }}
              placeholder="Describe the piece — name, shape, style, size, anything you have in mind"
            />
          </div>

          {/* Material + Stone */}
          <div style={{ display: 'grid', gap: '1.5rem' }} className="md:grid-cols-2">
            <div>
              <label htmlFor="cf-material" style={LABEL_STYLE}>Material Direction</label>
              <select
                id="cf-material"
                name="material"
                value={data.material}
                onChange={field('material')}
                className="form-input"
                style={{ cursor: 'pointer' }}
              >
                <option value="">Not Sure</option>
                <option value="925 Silver">925 Silver</option>
                <option value="Gold-Plated">Gold-Plated</option>
                <option value="Vermeil">Vermeil</option>
                <option value="10K Gold">10K Gold</option>
                <option value="14K Gold">14K Gold</option>
                <option value="Not Sure">Not Sure</option>
              </select>
            </div>
            <div>
              <label htmlFor="cf-stone" style={LABEL_STYLE}>Stone Direction</label>
              <select
                id="cf-stone"
                name="stone"
                value={data.stone}
                onChange={field('stone')}
                className="form-input"
                style={{ cursor: 'pointer' }}
              >
                <option value="">Not Sure</option>
                <option value="None">None</option>
                <option value="CZ">CZ</option>
                <option value="Moissanite">Moissanite</option>
                <option value="Lab Diamond">Lab Diamond</option>
                <option value="Natural Diamond Inquiry">Natural Diamond Inquiry</option>
                <option value="Not Sure">Not Sure</option>
              </select>
            </div>
          </div>

          {/* Budget */}
          <div>
            <label htmlFor="cf-budget" style={LABEL_STYLE}>
              Budget Range{' '}
              <span style={{ fontWeight: 400, opacity: 0.55, textTransform: 'none', letterSpacing: 0 }}>
                — helps guide the conversation, not a final quote
              </span>
            </label>
            <select
              id="cf-budget"
              name="budget"
              value={data.budget}
              onChange={field('budget')}
              className="form-input"
              style={{ cursor: 'pointer' }}
            >
              <option value="">Not Sure</option>
              <option value="Under $500">Under $500</option>
              <option value="$500–$1,000">$500–$1,000</option>
              <option value="$1,000–$2,500">$1,000–$2,500</option>
              <option value="$2,500–$5,000">$2,500–$5,000</option>
              <option value="$5,000+">$5,000+</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>

          {/* Reference Upload — styled dropzone */}
          <div>
            <p style={LABEL_STYLE}>
              Reference <span style={{ opacity: 0.55 }}>(optional)</span>
            </p>
            <label htmlFor="cf-upload" className="form-dropzone" style={{ display: 'block', marginTop: '0.5rem' }}>
              <span style={{
                display:    'block',
                fontSize:   '1.4rem',
                lineHeight: 1,
                color:      'var(--color-brand-gold)',
                marginBottom: '0.5rem',
              }}>
                ⬆
              </span>
              <span style={{
                display:       'block',
                fontFamily:    'var(--font-body)',
                fontSize:      '0.78rem',
                fontWeight:    700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color:         'var(--color-brand-white)',
              }}>
                Drop your reference
              </span>
              <span style={{
                display:    'block',
                fontFamily: 'var(--font-body)',
                fontSize:   '0.7rem',
                color:      'var(--color-brand-muted)',
                marginTop:  '0.3rem',
              }}>
                Sketch · Photo · Logo · Max 5MB
              </span>
              <input
                id="cf-upload"
                name="reference"
                type="file"
                accept="image/*,.pdf"
                style={{ display: 'none' }}
              />
            </label>
          </div>

          {/* Notes */}
          <div>
            <label htmlFor="cf-notes" style={LABEL_STYLE}>Notes <span style={{ opacity: 0.55 }}>(optional)</span></label>
            <textarea
              id="cf-notes"
              name="notes"
              rows={3}
              value={data.notes}
              onChange={field('notes')}
              className="form-input"
              style={{ resize: 'vertical' }}
              placeholder="Anything else we should know"
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary"
              style={{
                width:         '100%',
                border:        'none',
                cursor:        submitting ? 'not-allowed' : 'pointer',
                opacity:       submitting ? 0.7 : 1,
                textAlign:     'center',
                padding:       '1rem 1.5rem',
                fontSize:      '0.9rem',
                letterSpacing: '0.08em',
              }}
            >
              {submitting ? 'Sending…' : 'SEND REQUEST →'}
            </button>
            <p className="trust-signal" style={{ marginTop: '0.875rem', textAlign: 'center' }}>
              No deposit. No rush. We quote first.
            </p>
          </div>

        </form>
      </div>
    </section>
  )
}
