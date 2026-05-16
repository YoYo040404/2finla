'use client'

import React, { useState, useRef } from 'react'

type BuildData = {
  pieceType:         string
  idea:              string
  materialDirection: string
  budget:            string
  name:              string
  phone:             string
  uploadFile:        File | null
  uploadFileName:    string
}

const EMPTY: BuildData = {
  pieceType:         '',
  idea:              '',
  materialDirection: '',
  budget:            '',
  name:              '',
  phone:             '',
  uploadFile:        null,
  uploadFileName:    '',
}

const PIECES = [
  { id: 'name-piece',    label: 'Name Piece',      helper: 'Names that hit' },
  { id: 'logo-piece',    label: 'Logo Piece',       helper: 'Send your logo' },
  { id: 'photo-pendant', label: 'Photo Pendant',    helper: 'Turn a photo into a piece' },
  { id: 'number-piece',  label: 'Number Piece',     helper: 'Your number, your style' },
  { id: 'iced-pendant',  label: 'Iced-Out Pendant', helper: 'Full iced, all the way' },
  { id: 'custom-chain',  label: 'Custom Chain',     helper: 'Length, link, weight — your call' },
  { id: 'grillz',        label: 'Grillz',           helper: 'Top, bottom, or both' },
  { id: 'watch',         label: 'Watch',            helper: 'Custom face, band, or stones' },
  { id: 'not-sure',      label: 'Not Sure Yet',     helper: "We'll figure it out" },
]

const MATERIALS = ['Not Sure', 'Yellow Gold', 'White Gold', 'Silver', 'Moissanite', 'Diamonds', 'Two-Tone']
const BUDGETS   = ['Not Sure', 'Under $500', '$500–1K', '$1K–2.5K', '$2.5K–5K', '$5K+']

export function CustomBuildFlow() {
  const [data, setData]           = useState<BuildData>(EMPTY)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted]  = useState(false)
  const [dragOver, setDragOver]    = useState(false)
  const [errors, setErrors]        = useState({ pieceType: false, contact: false, idea: false })
  const fileInputRef               = useRef<HTMLInputElement>(null)

  const selectPiece = (id: string) => {
    setData(d => ({ ...d, pieceType: id }))
    setErrors(e => ({ ...e, pieceType: false }))
  }

  const toggleMaterial = (m: string) =>
    setData(d => ({ ...d, materialDirection: d.materialDirection === m ? '' : m }))

  const toggleBudget = (b: string) =>
    setData(d => ({ ...d, budget: d.budget === b ? '' : b }))

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
      pieceType:         data.pieceType,
      idea:              data.idea,
      materialDirection: data.materialDirection,
      budget:            data.budget,
      name:              data.name,
      phone:             data.phone,
      uploadFileName:    data.uploadFileName,
      submittedAt:       new Date().toISOString(),
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
            Request received.
          </h2>
          <p style={{
            fontSize:     '0.9375rem',
            color:        'var(--color-brand-muted)',
            lineHeight:   1.65,
            marginBottom: '2.5rem',
            maxWidth:     '38ch',
            margin:       '0 auto 2.5rem',
          }}>
            We'll review the details and follow up with next-step information.
          </p>
          <a href="/" className="btn-outline-dim" style={{ display: 'inline-block' }}>
            ← Back to Home
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
        <div style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}>
          <p className="section-eyebrow" style={{ marginBottom: '1.125rem' }}>
            Custom Build
          </p>
          <h2 style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(2.4rem, 7vw, 4.5rem)',
            fontWeight:    400,
            color:         'var(--color-brand-white)',
            lineHeight:    0.9,
            letterSpacing: '-0.03em',
            marginBottom:  '1.25rem',
          }}>
            Pick the piece.
            <br />
            <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic' }}>
              Drop the idea.
            </em>
          </h2>
          <p style={{
            fontSize:  '0.9375rem',
            color:     'var(--color-brand-muted)',
            maxWidth:  '46ch',
            lineHeight: 1.6,
          }}>
            Logo, photo, sketch, name, number — start with whatever you got.
          </p>
        </div>

        {/* ── STEP 01 — Pick the piece ─────────────────────────────────────── */}
        <div className="build-step-block">
          <div className="build-step-label">
            <span className="build-step-num">01</span>
            <span>Pick the piece</span>
          </div>

          <div className="build-card-grid">
            {PIECES.map(p => (
              <button
                key={p.id}
                type="button"
                className={`build-card${data.pieceType === p.id ? ' build-card-active' : ''}`}
                onClick={() => selectPiece(p.id)}
                aria-pressed={data.pieceType === p.id}
              >
                <span className="build-card-label">{p.label}</span>
                <span className="build-card-helper">{p.helper}</span>
              </button>
            ))}
          </div>

          {errors.pieceType && (
            <p style={{ color: '#c0392b', fontSize: '0.75rem', marginTop: '0.75rem', letterSpacing: '0.03em' }}>
              Select a piece type to continue.
            </p>
          )}
        </div>

        {/* ── STEP 02 — Drop the idea ──────────────────────────────────────── */}
        <div className="build-step-block">
          <div className="build-step-label">
            <span className="build-step-num">02</span>
            <span>Send the idea</span>
          </div>

          <div className="build-idea-grid">
            {/* Upload hero — left on desktop, bottom on mobile */}
            <div className="build-idea-upload">
              <label className="build-field-label">Drop your reference</label>
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
                    <span className="upload-hero-label">Drop your reference</span>
                    <span className="upload-hero-sub">Sketch · Photo · Logo · PDF · Max 5MB</span>
                  </>
                )}
              </div>
              <p style={{ fontSize: '0.68rem', color: 'var(--color-brand-muted)', marginTop: '0.625rem', lineHeight: 1.5 }}>
                Got a screenshot? Drop it. Got a logo? Drop it. Got just an idea? Type it.
              </p>
            </div>

            {/* Textarea — right on desktop, top on mobile */}
            <div className="build-idea-text">
              <label htmlFor="cf-idea" className="build-field-label">Tell us the idea</label>
              <textarea
                id="cf-idea"
                className="form-input"
                rows={7}
                placeholder="Logo, photo, sketch, grillz, pendant, chain — start with whatever you got."
                value={data.idea}
                onChange={e => {
                  setData(d => ({ ...d, idea: e.target.value }))
                  setErrors(er => ({ ...er, idea: false }))
                }}
                style={{ resize: 'vertical', minHeight: 180 }}
              />
            </div>
          </div>

          {errors.idea && (
            <p style={{ color: '#c0392b', fontSize: '0.75rem', marginTop: '0.75rem', letterSpacing: '0.03em' }}>
              Add an idea or drop a reference — either works.
            </p>
          )}
        </div>

        {/* ── STEP 03 — Pick the direction ─────────────────────────────────── */}
        <div className="build-step-block">
          <div className="build-step-label">
            <span className="build-step-num">03</span>
            <span>Pick the direction</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.375rem' }}>
            <div>
              <p className="build-field-label" style={{ marginBottom: '0.625rem' }}>Material direction</p>
              <div className="chip-row">
                {MATERIALS.map(m => (
                  <button
                    key={m}
                    type="button"
                    className={`direction-chip${data.materialDirection === m ? ' direction-chip-active' : ''}`}
                    onClick={() => toggleMaterial(m)}
                    aria-pressed={data.materialDirection === m}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="build-field-label" style={{ marginBottom: '0.625rem' }}>Budget range</p>
              <div className="chip-row">
                {BUDGETS.map(b => (
                  <button
                    key={b}
                    type="button"
                    className={`direction-chip${data.budget === b ? ' direction-chip-active' : ''}`}
                    onClick={() => toggleBudget(b)}
                    aria-pressed={data.budget === b}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p style={{ fontSize: '0.7rem', color: 'var(--color-brand-muted)', marginTop: '1rem', lineHeight: 1.55 }}>
            Not sure yet? That's fine. Pick a direction or leave it open. Material and budget are guide signals — not a final quote.
          </p>
        </div>

        {/* ── STEP 04 — Lock the contact ───────────────────────────────────── */}
        <div className="build-step-block">
          <div className="build-step-label">
            <span className="build-step-num">04</span>
            <span>Leave your number</span>
          </div>

          <div className="build-contact-grid">
            <div>
              <label htmlFor="cf-name" className="build-field-label">Name</label>
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
              <label htmlFor="cf-phone" className="build-field-label">Phone</label>
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
            <p className="trust-signal" style={{ marginTop: '0.875rem', textAlign: 'center' }}>
              No deposit. No rush. We quote first.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
