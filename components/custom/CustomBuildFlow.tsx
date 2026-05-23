'use client'

import React, { useState, useRef, useEffect } from 'react'

type BuildData = {
  pieceType:      string
  idea:           string
  name:           string
  phone:          string
  budget:         string
  uploadFile:     File | null
  uploadFileName: string
}

const EMPTY: BuildData = {
  pieceType:      '',
  idea:           '',
  name:           '',
  phone:          '',
  budget:         '',
  uploadFile:     null,
  uploadFileName: '',
}

const PIECES = [
  { id: 'custom-pendant', label: 'Custom Pendant' },
  { id: 'grillz',         label: 'Grillz' },
  { id: 'custom-chain',   label: 'Custom Chain' },
  { id: 'watch',          label: 'Watch' },
  { id: 'bracelet-ring',  label: 'Bracelet / Ring' },
  { id: 'not-sure',       label: 'Not Sure' },
]

const BUDGET_OPTIONS = [
  { id: 'not-sure-budget', label: 'Not sure yet' },
  { id: 'under-500',       label: 'Under $500' },
  { id: '500-1500',        label: '$500–$1,500' },
  { id: '1500-5000',       label: '$1,500–$5,000' },
  { id: '5000-plus',       label: '$5,000+' },
]

export function CustomBuildFlow() {
  const [data, setData]             = useState<BuildData>(EMPTY)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted]   = useState(false)
  const [dragOver, setDragOver]     = useState(false)
  const [errors, setErrors]         = useState({ pieceType: false, contact: false, idea: false })
  const fileInputRef                = useRef<HTMLInputElement>(null)
  const successRef                  = useRef<HTMLElement>(null)

  useEffect(() => {
    if (submitted) {
      successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [submitted])

  const selectPiece = (id: string) => {
    setData(d => ({ ...d, pieceType: id }))
    setErrors(e => ({ ...e, pieceType: false }))
  }

  const selectBudget = (id: string) => {
    setData(d => ({ ...d, budget: d.budget === id ? '' : id }))
  }

  const applyFile = (file: File | null) => {
    if (!file) return
    if (file.size > 5 * 1024 * 1024) return
    setData(d => ({ ...d, uploadFile: file, uploadFileName: file.name }))
    setErrors(e => ({ ...e, idea: false }))
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    applyFile(e.dataTransfer.files[0] ?? null)
  }

  const clearFile = () =>
    setData(d => ({ ...d, uploadFile: null, uploadFileName: '' }))

  const truncateFilename = (name: string, max = 24) =>
    name.length > max ? name.slice(0, max - 1) + '…' : name

  const handleSubmit = () => {
    const next = {
      pieceType: !data.pieceType,
      contact:   !data.name.trim() || !data.phone.trim(),
      idea:      !data.idea.trim() && !data.uploadFileName,
    }
    setErrors(next)
    if (Object.values(next).some(Boolean)) return

    setSubmitting(true)
    console.log('[2T Jewelers] Custom request payload:', {
      pieceType:      data.pieceType,
      idea:           data.idea,
      name:           data.name,
      phone:          data.phone,
      budget:         data.budget,
      uploadFileName: data.uploadFileName,
      submittedAt:    new Date().toISOString(),
    })
    setTimeout(() => { setSubmitting(false); setSubmitted(true) }, 600)
  }

  /* ── Success state ──────────────────────────────────────────────────────── */
  if (submitted) {
    return (
      <section
        id="custom-form"
        ref={successRef}
        style={{
          background: 'var(--color-brand-black)',
          borderTop:  '1px solid var(--color-brand-border)',
          padding:    'clamp(5rem, 12vw, 9rem) 1.5rem',
        }}
      >
        <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display:        'inline-flex',
            alignItems:     'center',
            justifyContent: 'center',
            width:          56,
            height:         56,
            borderRadius:   '50%',
            border:         '1px solid var(--color-brand-gold)',
            marginBottom:   '1.25rem',
          }}>
            <span style={{ fontSize: '1.2rem', color: 'var(--color-brand-gold)' }}>✦</span>
          </div>
          <p
            aria-hidden="true"
            style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.6rem',
              fontWeight:    700,
              letterSpacing: '0.18em',
              color:         'var(--color-brand-gold)',
              opacity:       0.7,
              marginBottom:  '1rem',
            }}
          >
            BANG.
          </p>
          <h2 style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(2rem, 5vw, 3rem)',
            fontWeight:    400,
            color:         'var(--color-brand-white)',
            letterSpacing: '-0.02em',
            marginBottom:  '0.875rem',
            lineHeight:    1.05,
          }}>
            Your request is in.
          </h2>
          <p style={{
            fontSize:     '0.9375rem',
            color:        'var(--color-brand-muted)',
            lineHeight:   1.65,
            maxWidth:     '38ch',
            margin:       '0 auto 2.5rem',
          }}>
            We&apos;ll review the details and follow up with next steps.
          </p>
          <a href="/" className="btn-outline-dim" style={{ display: 'inline-block' }}>
            ← Back to Home
          </a>
          <a
            href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%20just%20sent%20a%20request%20and%20have%20something%20to%20add."
            target="_blank"
            rel="noopener noreferrer"
            className="bypass-cta"
            style={{ display: 'block', marginTop: '1.5rem' }}
          >
            Have something to add? Hit us on WhatsApp →
          </a>
        </div>
      </section>
    )
  }

  /* ── Main flow ──────────────────────────────────────────────────────────── */
  return (
    <>
    <style>{`
      @media (max-width: 767px) {
        .custom-proof-strip {
          flex-direction: column;
          gap: 0.875rem;
        }
        .custom-proof-divider {
          display: none;
        }
      }
    `}</style>
    <section
      id="custom-form"
      className="custom-funnel-section"
    >
      <div style={{ maxWidth: 820, margin: '0 auto' }}>

        {/* ── Section header ──────────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(2rem, 5vw, 3.5rem)' }}>
          <p className="section-eyebrow" style={{ marginBottom: '1.125rem' }}>
            CUSTOM BUILD
          </p>
          <h2 style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(2.4rem, 7vw, 4.5rem)',
            fontWeight:    400,
            color:         'var(--color-brand-white)',
            lineHeight:    0.9,
            letterSpacing: '-0.03em',
          }}>
            Send the idea.
            <br />
            <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic' }}>
              We quote before the build.
            </em>
          </h2>
        </div>

        {/* ── Step 01 — What are you building? ────────────────────────────── */}
        <div className="build-step-block">
          <span className="step-numeral" aria-hidden="true">01</span>
          <p className="build-field-label" style={{ marginBottom: '0.875rem' }}>
            WHAT ARE YOU BUILDING?
          </p>

          <div className="piece-chip-grid">
            {PIECES.map(p => (
              <button
                key={p.id}
                type="button"
                className={`piece-chip${data.pieceType === p.id ? ' active' : ''}`}
                onClick={() => selectPiece(p.id)}
                aria-pressed={data.pieceType === p.id}
              >
                {p.label}
              </button>
            ))}
          </div>

          {errors.pieceType && (
            <p style={{ color: '#c0392b', fontSize: '0.75rem', marginTop: '0.75rem', letterSpacing: '0.03em' }}>
              Select a piece type to continue.
            </p>
          )}
        </div>

        {/* ── Mid-form WhatsApp escape ─────────────────────────────────────── */}
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-brand-muted)', marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)', lineHeight: 1.5 }}>
          Skip the form.{' '}
          <a
            href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20building%20a%20piece%20and%20want%20to%20chat."
            target="_blank"
            rel="noopener noreferrer"
            className="bypass-cta"
            style={{ display: 'inline', marginTop: 0 }}
          >
            Text 2T on WhatsApp →
          </a>
        </p>

        {/* ── Step 02 — Show us the idea ──────────────────────────────────── */}
        <div className="build-step-block">
          <span className="step-numeral" aria-hidden="true">02</span>
          <p className="build-field-label" style={{ marginBottom: '0.75rem' }}>
            SHOW US THE IDEA
          </p>

          <div className="build-idea-grid">
            {/* Upload hero — top on mobile, left on desktop */}
            <div className="build-idea-upload">
              <div
                className={`upload-hero${dragOver ? ' drag-over' : ''}${data.uploadFileName ? ' has-file' : ''}`}
                onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                onClick={() => !data.uploadFileName && fileInputRef.current?.click()}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && !data.uploadFileName && fileInputRef.current?.click()}
                aria-label="Upload reference file"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,.pdf"
                  style={{ display: 'none' }}
                  onChange={e => applyFile(e.target.files?.[0] ?? null)}
                  aria-hidden="true"
                />

                {data.uploadFileName ? (
                  <div className="upload-hero-file">
                    <span className="upload-hero-icon" style={{ fontSize: '1.1rem' }}>✓</span>
                    <span className="upload-hero-filename">{truncateFilename(data.uploadFileName)}&nbsp;—&nbsp;nice.</span>
                    <button
                      type="button"
                      className="upload-hero-clear"
                      onClick={e => { e.stopPropagation(); clearFile() }}
                      aria-label="Remove file"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="upload-hero-icon" aria-hidden="true">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                    </span>
                    <span className="upload-hero-label">DROP YOUR PHOTO, LOGO, OR SKETCH</span>
                    <span className="upload-hero-sub">Or describe it below — anything works.</span>
                  </>
                )}
              </div>
            </div>

            {/* Textarea — right on desktop, below on mobile */}
            <div className="build-idea-text">
              <textarea
                id="cf-idea"
                className="form-input"
                rows={4}
                placeholder="Describe the piece — a name, idea, reference, or anything you're imagining."
                value={data.idea}
                onChange={e => {
                  setData(d => ({ ...d, idea: e.target.value }))
                  setErrors(er => ({ ...er, idea: false }))
                }}
                style={{ resize: 'vertical', minHeight: 100 }}
              />
              {data.pieceType === 'grillz' && (
                <p style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.75rem',
                  color:         'var(--color-brand-gold)',
                  lineHeight:    1.55,
                  marginTop:     '0.625rem',
                  opacity:       0.9,
                  letterSpacing: '0.01em',
                }}>
                  For grillz: tell us top set, bottom set, or full mouth. Gold, stones, or both? We&apos;ll walk you through the next step.
                </p>
              )}
            </div>
          </div>

          {errors.idea && (
            <p style={{ color: '#c0392b', fontSize: '0.75rem', marginTop: '0.75rem', letterSpacing: '0.03em' }}>
              Add an idea or drop a reference — either works.
            </p>
          )}
        </div>

        {/* ── Approval / Proof process strip ──────────────────────────────── */}
        <div className="custom-proof-strip">
          <div className="custom-proof-step">
            <span className="custom-proof-num" aria-hidden="true">01</span>
            <div>
              <p className="custom-proof-label">SEND THE IDEA</p>
              <p className="custom-proof-body">Logo, sketch, photo, or rough idea.</p>
            </div>
          </div>
          <div className="custom-proof-divider" aria-hidden="true" />
          <div className="custom-proof-step">
            <span className="custom-proof-num" aria-hidden="true">02</span>
            <div>
              <p className="custom-proof-label">WE REVIEW THE DIRECTION</p>
              <p className="custom-proof-body">Piece type, material, and visual direction.</p>
            </div>
          </div>
          <div className="custom-proof-divider" aria-hidden="true" />
          <div className="custom-proof-step">
            <span className="custom-proof-num" aria-hidden="true">03</span>
            <div>
              <p className="custom-proof-label">WE QUOTE FIRST</p>
              <p className="custom-proof-body">We confirm the direction with you before production.</p>
            </div>
          </div>
        </div>

        {/* ── Step 03 — Contact ───────────────────────────────────────────── */}
        <div className="build-step-block">
          <span className="step-numeral" aria-hidden="true">03</span>
          <p className="build-field-label" style={{ marginBottom: '0.75rem' }}>HOW DO WE REACH YOU?</p>

          <div className="build-contact-grid">
            <div>
              <label htmlFor="cf-name" className="build-field-label">Your name</label>
              <input
                id="cf-name"
                type="text"
                className="form-input"
                placeholder="Your name"
                autoComplete="name"
                value={data.name}
                onChange={e => {
                  setData(d => ({ ...d, name: e.target.value }))
                  setErrors(er => ({ ...er, contact: false }))
                }}
              />
            </div>
            <div>
              <label htmlFor="cf-phone" className="build-field-label">WhatsApp or phone</label>
              <input
                id="cf-phone"
                type="tel"
                className="form-input"
                placeholder="Your number"
                autoComplete="tel"
                value={data.phone}
                onChange={e => {
                  setData(d => ({ ...d, phone: e.target.value }))
                  setErrors(er => ({ ...er, contact: false }))
                }}
              />
              <p className="field-micro">Best number for this build.</p>
            </div>
          </div>

          {errors.contact && (
            <p style={{ color: '#c0392b', fontSize: '0.75rem', marginTop: '0.75rem', letterSpacing: '0.03em' }}>
              Name and phone are required.
            </p>
          )}

          {/* ── Budget direction (optional) ──────────────────────────────── */}
          <div style={{ marginTop: '1.5rem' }}>
            <p className="build-field-label" style={{ marginBottom: '0.5rem' }}>
              Budget direction (optional):
            </p>
            <div className="piece-chip-grid">
              {BUDGET_OPTIONS.map(b => (
                <button
                  key={b.id}
                  type="button"
                  className={`piece-chip budget-chip${data.budget === b.id ? ' active' : ''}`}
                  onClick={() => selectBudget(b.id)}
                  aria-pressed={data.budget === b.id}
                  style={{ minHeight: '44px' }}
                >
                  {b.label}
                </button>
              ))}
            </div>
            <p style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.75rem',
              color:         'var(--color-brand-muted)',
              lineHeight:    1.5,
              marginTop:     '0.625rem',
              opacity:       0.8,
            }}>
              Budget range helps guide the conversation. It is not a final quote.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <div className="custom-trust-callout" style={{ marginBottom: '1.5rem' }}>
              <span className="trust-diamond" aria-hidden="true">◆</span>
              Send the idea first. No deposit. We quote before the build.
            </div>

            <button
              type="button"
              className="btn-primary"
              onClick={handleSubmit}
              disabled={submitting}
              style={{
                width:         '100%',
                padding:       '1rem 1.5rem',
                opacity:       submitting ? 0.7 : 1,
                fontSize:      '0.8125rem',
                letterSpacing: '0.1em',
                cursor:        submitting ? 'not-allowed' : 'pointer',
              }}
            >
              {submitting ? 'Sending…' : 'SEND REQUEST →'}
            </button>

            <a
              href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20building%20a%20piece%20and%20want%20to%20chat."
              target="_blank"
              rel="noopener noreferrer"
              className="bypass-cta"
            >
              Skip the form. Text 2T on WhatsApp →
            </a>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}
