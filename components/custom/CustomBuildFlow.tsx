'use client'

import React, { useState, useRef } from 'react'

type BuildData = {
  pieceType:      string
  idea:           string
  name:           string
  phone:          string
  uploadFile:     File | null
  uploadFileName: string
}

const EMPTY: BuildData = {
  pieceType:      '',
  idea:           '',
  name:           '',
  phone:          '',
  uploadFile:     null,
  uploadFileName: '',
}

const PIECES = [
  { id: 'custom-pendant', label: 'Custom Pendant',  sub: 'logo, name, or custom artwork in metal' },
  { id: 'grillz',         label: 'Grillz',          sub: 'custom fit, full set or single' },
  { id: 'custom-chain',   label: 'Custom Chain',    sub: 'custom length, style, and stone' },
  { id: 'watch',          label: 'Watch',           sub: 'iced bezel, dial, or custom band' },
  { id: 'bracelet-ring',  label: 'Bracelet / Ring', sub: 'custom shape, stone, or engraving' },
  { id: 'not-sure',       label: 'Not Sure',        sub: "describe what you're imagining" },
]

export function CustomBuildFlow() {
  const [data, setData]             = useState<BuildData>(EMPTY)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted]   = useState(false)
  const [dragOver, setDragOver]     = useState(false)
  const [errors, setErrors]         = useState({ pieceType: false, contact: false, idea: false })
  const fileInputRef                = useRef<HTMLInputElement>(null)

  const selectPiece = (id: string) => {
    setData(d => ({ ...d, pieceType: id }))
    setErrors(e => ({ ...e, pieceType: false }))
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
        style={{
          background:  'var(--color-brand-black)',
          borderTop:   '1px solid var(--color-brand-border)',
          padding:     'clamp(5rem, 12vw, 9rem) 1.5rem',
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
            marginBottom:   '2rem',
          }}>
            <span style={{ fontSize: '1.2rem', color: 'var(--color-brand-gold)' }}>✦</span>
          </div>
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
            marginBottom: '2.5rem',
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
    <section
      id="custom-form"
      style={{
        background: 'var(--color-brand-black)',
        borderTop:  '1px solid var(--color-brand-border)',
        padding:    'clamp(3.5rem, 8vw, 6rem) 1.5rem',
      }}
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
              We build the direction.
            </em>
          </h2>
        </div>

        {/* ── Field 01 — What are you building? ───────────────────────────── */}
        <div className="build-step-block">
          <p className="build-field-label" style={{ marginBottom: '0.875rem' }}>
            WHAT ARE YOU BUILDING?
          </p>

          <div className="build-card-grid">
            {PIECES.map(p => (
              <button
                key={p.id}
                type="button"
                className={`build-card${data.pieceType === p.id ? ' build-card-active' : ''}${p.id === 'not-sure' ? ' build-card-not-sure' : ''}`}
                onClick={() => selectPiece(p.id)}
                aria-pressed={data.pieceType === p.id}
                style={{ minHeight: '56px' }}
              >
                <span className="build-card-label">{p.label}</span>
                <span style={{
                  fontSize:   '0.65rem',
                  color:      data.pieceType === p.id ? 'var(--color-brand-gold)' : 'var(--color-brand-muted)',
                  lineHeight: 1.3,
                  marginTop:  '0.2rem',
                  letterSpacing: '0.01em',
                  transition: 'color 160ms ease',
                }}>
                  {p.sub}
                </span>
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
          Rather talk it through?{' '}
          <a
            href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20building%20a%20piece%20and%20want%20to%20chat."
            target="_blank"
            rel="noopener noreferrer"
            className="bypass-cta"
            style={{ display: 'inline', marginTop: 0 }}
          >
            Hit us on WhatsApp →
          </a>
        </p>

        {/* ── Field 02 — Show us your vision ──────────────────────────────── */}
        <div className="build-step-block">
          <p className="build-field-label" style={{ marginBottom: '0.75rem' }}>
            SHOW US THE IDEA
          </p>

          <div className="build-idea-grid">
            {/* Upload hero — left on desktop, top on mobile */}
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
                style={{ boxShadow: '0 0 0 1px var(--color-brand-gold-dim)' }}
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
                    <span className="upload-hero-filename">{data.uploadFileName}</span>
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
                    <span className="upload-hero-label">Drop a logo, sketch, or photo</span>
                    <span className="upload-hero-sub">Image · PDF · Max 5MB</span>
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
                placeholder="Drop a logo, sketch, or photo — or just describe what you're imagining."
                value={data.idea}
                onChange={e => {
                  setData(d => ({ ...d, idea: e.target.value }))
                  setErrors(er => ({ ...er, idea: false }))
                }}
                style={{ resize: 'vertical', minHeight: 100 }}
              />
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

        {/* ── Field 03 — Contact ───────────────────────────────────────────── */}
        <div className="build-step-block">
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
            </div>
          </div>

          {errors.contact && (
            <p style={{ color: '#c0392b', fontSize: '0.75rem', marginTop: '0.75rem', letterSpacing: '0.03em' }}>
              Name and phone are required.
            </p>
          )}

          <div style={{ marginTop: '2rem' }}>
            <div className="custom-trust-callout" style={{ marginBottom: '1.5rem' }}>
              <span className="trust-diamond" aria-hidden="true">◆</span>
              Ask before you build. We quote first.
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
              Not sure yet? Hit us on WhatsApp →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
