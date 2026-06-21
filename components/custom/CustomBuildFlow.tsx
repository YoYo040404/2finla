'use client'

import React, { useState, useRef, useEffect } from 'react'

type BuildData = {
  pieceType:      string
  idea:           string
  name:           string
  phone:          string
  budget:         string
  metalDirection: '' | 'gold' | 'silver' | 'not-sure-metal'
  stoneDirection: '' | 'diamond' | 'moissanite' | 'no-stones' | 'not-sure-stone'
}

type UploadItem = { file: File; preview: string | null }

const EMPTY: BuildData = {
  pieceType:      '',
  idea:           '',
  name:           '',
  phone:          '',
  budget:         '',
  metalDirection: '',
  stoneDirection: '',
}

const METAL_OPTIONS = [
  { value: 'gold',           label: 'Gold' },
  { value: 'silver',         label: 'Silver' },
  { value: 'not-sure-metal', label: 'Not Sure' },
] as const

const STONE_OPTIONS = [
  { value: 'diamond',        label: 'Diamonds' },
  { value: 'moissanite',     label: 'Moissanite' },
  { value: 'no-stones',      label: 'No Stones' },
  { value: 'not-sure-stone', label: 'Not Sure' },
] as const

function metalActiveStyle(value: string): React.CSSProperties {
  switch (value) {
    case 'gold':   return { background: '#C9A449', borderColor: '#C9A449', color: '#050505' }
    case 'silver': return { background: '#DDE6ED', borderColor: '#DDE6ED', color: '#050505' }
    default:       return { background: 'rgba(201,168,76,0.1)', borderColor: 'rgba(201,168,76,0.45)', color: '#C9A449' }
  }
}

function stoneActiveStyle(value: string): React.CSSProperties {
  switch (value) {
    case 'diamond':    return { background: '#D0EEFF', borderColor: '#D0EEFF', color: '#050505' }
    case 'moissanite': return { background: '#BDE0FF', borderColor: '#BDE0FF', color: '#050505' }
    case 'no-stones':  return { background: '#1E1E1E', borderColor: '#3C3C3C', color: '#888888' }
    default:           return { background: 'rgba(201,168,76,0.1)', borderColor: 'rgba(201,168,76,0.45)', color: '#C9A449' }
  }
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

const MAX_FILE_BYTES = 5 * 1024 * 1024
const MAX_FILES      = 3

const WA_CHAT_URL =
  'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20building%20a%20piece%20and%20want%20to%20chat.'
const WA_FILE_URL =
  'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20my%20reference%20file%20is%20too%20big%20to%20upload.%20Can%20I%20send%20it%20here%3F'

/* Recap strip — selected directions, "not sure" values excluded */
const RECAP_PIECE: Record<string, string> = {
  'custom-pendant': 'CUSTOM PENDANT',
  grillz:           'GRILLZ',
  'custom-chain':   'CUSTOM CHAIN',
  watch:            'WATCH',
  'bracelet-ring':  'BRACELET / RING',
}
const RECAP_METAL: Record<string, string> = { gold: 'GOLD', silver: 'SILVER' }
const RECAP_STONE: Record<string, string> = { diamond: 'DIAMONDS', moissanite: 'MOISSANITE', 'no-stones': 'NO STONES' }

/* WhatsApp prefill phrases */
const WA_PIECE_PHRASE: Record<string, string> = {
  'custom-pendant': 'a custom pendant',
  grillz:           'custom grillz',
  'custom-chain':   'a custom chain',
  watch:            'a custom watch',
  'bracelet-ring':  'a custom bracelet or ring',
}

export function CustomBuildFlow() {
  const [data, setData]              = useState<BuildData>(EMPTY)
  const [files, setFiles]            = useState<UploadItem[]>([])
  const [submitting, setSubmitting]  = useState(false)
  const [submitted, setSubmitted]    = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [dragOver, setDragOver]      = useState(false)
  const [fileTooBig, setFileTooBig]  = useState(false)
  const [errors, setErrors]          = useState({ pieceType: false, contact: false, idea: false })
  const fileInputRef                 = useRef<HTMLInputElement>(null)
  const successRef                   = useRef<HTMLElement>(null)
  const filesRef                     = useRef<UploadItem[]>([])

  useEffect(() => { filesRef.current = files }, [files])
  useEffect(() => () => {
    filesRef.current.forEach(f => f.preview && URL.revokeObjectURL(f.preview))
  }, [])

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

  const applyFiles = (incoming: File[]) => {
    if (!incoming.length) return
    const room = MAX_FILES - files.length
    const valid: UploadItem[] = []
    let tooBig = false
    for (const file of incoming) {
      if (file.size > MAX_FILE_BYTES) { tooBig = true; continue }
      if (valid.length < room) {
        valid.push({
          file,
          preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
        })
      }
    }
    setFileTooBig(tooBig)
    if (valid.length) {
      setFiles(prev => [...prev, ...valid].slice(0, MAX_FILES))
      setErrors(e => ({ ...e, idea: false }))
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    applyFiles(Array.from(e.dataTransfer.files))
  }

  const removeFile = (index: number) => {
    setFileTooBig(false)
    setFiles(prev => {
      const target = prev[index]
      if (target?.preview) URL.revokeObjectURL(target.preview)
      return prev.filter((_, i) => i !== index)
    })
  }

  const openChooser = () => {
    if (files.length < MAX_FILES) fileInputRef.current?.click()
  }

  const truncateFilename = (name: string, max = 24) =>
    name.length > max ? name.slice(0, max - 1) + '…' : name

  /* Recap parts from current selections */
  const recapParts = [
    RECAP_PIECE[data.pieceType],
    RECAP_METAL[data.metalDirection],
    RECAP_STONE[data.stoneDirection],
  ].filter(Boolean) as string[]

  /* WhatsApp link that carries the build selections */
  const waBuildHref = () => {
    const extras: string[] = []
    if (RECAP_METAL[data.metalDirection]) extras.push(data.metalDirection)
    if (data.stoneDirection === 'diamond')         extras.push('diamonds')
    else if (data.stoneDirection === 'moissanite') extras.push('moissanite')
    else if (data.stoneDirection === 'no-stones')  extras.push('no stones')
    const piece =
      WA_PIECE_PHRASE[data.pieceType] ??
      (data.pieceType || extras.length ? 'a custom piece' : '')
    if (!piece) return WA_CHAT_URL
    const msg = `Hey 2T — I want to build ${piece}${extras.length ? ', ' + extras.join(', ') : ''}. Here's my idea:`
    return `https://wa.me/14124524343?text=${encodeURIComponent(msg)}`
  }

  const handleSubmit = async () => {
    setSubmitError(false)

    const next = {
      pieceType: !data.pieceType,
      contact:   !data.name.trim() || !data.phone.trim(),
      idea:      !data.idea.trim() && files.length === 0,
    }
    setErrors(next)
    if (Object.values(next).some(Boolean)) return

    setSubmitting(true)
    try {
      const body = new FormData()
      body.append('pieceType', data.pieceType)
      body.append('idea',      data.idea)
      body.append('name',      data.name)
      body.append('phone',     data.phone)
      body.append('budget',    data.budget)
      if (data.metalDirection) body.append('metalDirection', data.metalDirection)
      if (data.stoneDirection) body.append('stoneDirection', data.stoneDirection)
      files.forEach(f => body.append('uploadFile', f.file, f.file.name))

      const res = await fetch('/api/custom-request', { method: 'POST', body })
      if (!res.ok) { setSubmitError(true); return }
      setSubmitted(true)
    } catch {
      setSubmitError(true)
    } finally {
      setSubmitting(false)
    }
  }

  /* ── Success ────────────────────────────────────────────────────────────── */
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
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 56, height: 56, borderRadius: '50%',
            border: '1px solid var(--color-brand-gold)', marginBottom: '1.25rem',
          }}>
            <span style={{ fontSize: '1.2rem', color: 'var(--color-brand-gold)' }}>✦</span>
          </div>
          <p aria-hidden="true" style={{
            fontFamily: 'var(--font-body)', fontSize: '0.6rem', fontWeight: 700,
            letterSpacing: '0.18em', color: 'var(--color-brand-gold)', opacity: 0.7, marginBottom: '1rem',
          }}>
            BANG.
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 400, color: 'var(--color-brand-white)',
            letterSpacing: '-0.02em', marginBottom: '0.875rem', lineHeight: 1.05,
          }}>
            Your request is in.
          </h2>
          {recapParts.length > 0 && (
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600,
              letterSpacing: '0.12em', color: 'var(--color-brand-gold)',
              marginBottom: '0.875rem',
            }}>
              {recapParts.join(' · ')}
            </p>
          )}
          <p style={{
            fontSize: '0.9375rem', color: 'var(--color-brand-muted)',
            lineHeight: 1.65, maxWidth: '38ch', margin: '0 auto 2.5rem',
          }}>
            We&apos;ll review the details and follow up with next steps.
          </p>
          <a href="/" className="btn-outline-dim" style={{ display: 'inline-block' }}>
            ← Back to Home
          </a>
          <a
            href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%20just%20sent%20a%20request%20and%20have%20something%20to%20add."
            target="_blank" rel="noopener noreferrer"
            className="bypass-cta" style={{ display: 'block', marginTop: '1.5rem' }}
          >
            Have something to add? Hit us on WhatsApp →
          </a>
        </div>
      </section>
    )
  }

  /* ── Main flow ──────────────────────────────────────────────────────────── */
  return (
    <section id="custom-form" className="custom-funnel-section">
      <div style={{ maxWidth: 760, margin: '0 auto' }}>

        {/* ── Header + quiet process line ────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(2rem, 5vw, 3rem)' }}>
          <p className="section-eyebrow" style={{ marginBottom: '0.5rem' }}>
            START YOUR BUILD
          </p>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.9375rem',
            color: 'var(--color-brand-silver)', lineHeight: 1.6,
            maxWidth: '48ch', marginBottom: '0.875rem',
          }}>
            Send the idea first. We quote before the build.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--color-brand-muted)', lineHeight: 1.7,
          }}>
            Send the idea <span aria-hidden="true" style={{ color: 'var(--color-brand-gold)' }}>→</span> We
            review the direction <span aria-hidden="true" style={{ color: 'var(--color-brand-gold)' }}>→</span> We
            quote first
          </p>
        </div>

        {/* ── 01 — THE PIECE ─────────────────────────────────────────────── */}
        <div className="build-decision-block">
          <div className="build-decision-header">
            <span className="build-decision-num">01</span>
            <span className="build-decision-text">THE PIECE</span>
          </div>
          <div className="piece-select-grid">
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
            <p className="cf-error" style={{ marginTop: '0.625rem', marginBottom: 0 }}>Select a piece type to continue.</p>
          )}
        </div>

        {/* ── 02 — THE SHINE ─────────────────────────────────────────────── */}
        <div className="build-decision-block">
          <div className="build-decision-header">
            <span className="build-decision-num">02</span>
            <span className="build-decision-text">THE SHINE</span>
          </div>

          <p className="cf-field-label">METAL</p>
          <div className="metal-chip-row" style={{ marginBottom: '1rem' }}>
            {METAL_OPTIONS.map(({ value, label }) => {
              const sel = data.metalDirection === value
              return (
                <button
                  key={value}
                  type="button"
                  className="material-chip"
                  style={sel ? metalActiveStyle(value) : undefined}
                  onClick={() => setData(d => ({
                    ...d,
                    metalDirection: (d.metalDirection === value ? '' : value) as BuildData['metalDirection'],
                  }))}
                  aria-pressed={sel}
                >
                  {label}
                </button>
              )
            })}
          </div>

          <p className="cf-field-label">STONE</p>
          <div className="stone-chip-grid">
            {STONE_OPTIONS.map(({ value, label }) => {
              const sel = data.stoneDirection === value
              return (
                <button
                  key={value}
                  type="button"
                  className="material-chip"
                  style={sel ? stoneActiveStyle(value) : undefined}
                  onClick={() => setData(d => ({
                    ...d,
                    stoneDirection: (d.stoneDirection === value ? '' : value) as BuildData['stoneDirection'],
                  }))}
                  aria-pressed={sel}
                >
                  {label}
                </button>
              )
            })}
          </div>
          <p className="cf-hint" style={{ marginTop: '0.875rem' }}>
            Gold or silver. Diamonds or moissanite. Details confirmed per piece.
          </p>
        </div>

        {/* ── 03 — THE IDEA ──────────────────────────────────────────────── */}
        <div className="build-decision-block">
          <div className="build-decision-header">
            <span className="build-decision-num">03</span>
            <span className="build-decision-text">THE IDEA</span>
          </div>

          <div
            className={`upload-hero${dragOver ? ' drag-over' : ''}${files.length >= MAX_FILES ? ' has-file' : ''}`}
            style={{ marginBottom: '0.875rem' }}
            onDragOver={e => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={openChooser}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && openChooser()}
            aria-label={files.length ? 'Add another reference file' : 'Upload reference file'}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,.pdf"
              multiple
              style={{ display: 'none' }}
              onChange={e => {
                applyFiles(Array.from(e.target.files ?? []))
                e.target.value = ''
              }}
              aria-hidden="true"
            />
            {files.length > 0 ? (
              <div className="upload-file-list">
                {files.map((f, i) => (
                  <div key={`${f.file.name}-${i}`} className="upload-file-item">
                    {f.preview ? (
                      // eslint-disable-next-line @next/next/no-img-element -- blob: preview, next/image not applicable
                      <img src={f.preview} alt={`Reference preview — ${f.file.name}`} className="upload-thumb" />
                    ) : (
                      <span className="upload-file-doc" aria-hidden="true">PDF</span>
                    )}
                    <span className="upload-hero-filename">{truncateFilename(f.file.name)}</span>
                    <button
                      type="button"
                      className="upload-hero-clear"
                      onClick={e => { e.stopPropagation(); removeFile(i) }}
                      aria-label={`Remove ${f.file.name}`}
                    >
                      ✕
                    </button>
                  </div>
                ))}
                {files.length < MAX_FILES && (
                  <span className="upload-add-more">+ Add another ({files.length}/{MAX_FILES})</span>
                )}
              </div>
            ) : (
              <>
                <span className="upload-hero-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                </span>
                <span className="upload-hero-label upload-label-touch">TAP TO ADD YOUR PHOTO, LOGO, OR SKETCH</span>
                <span className="upload-hero-label upload-label-pointer">DROP YOUR PHOTO, LOGO, OR SKETCH</span>
                <span className="upload-hero-sub">Up to {MAX_FILES} files — or describe it below. Anything works.</span>
              </>
            )}
          </div>
          {fileTooBig && (
            <p className="cf-error" style={{ marginBottom: '0.875rem' }}>
              That file&apos;s over 5MB. Try a smaller one — or{' '}
              <a
                href={WA_FILE_URL}
                target="_blank" rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'underline' }}
              >
                send it to us on WhatsApp →
              </a>
            </p>
          )}

          <p className="cf-upload-confidence">
            <span className="trust-diamond" aria-hidden="true">◆</span>
            Your logo, photo, or sketch stays yours. We review it, then quote.
          </p>

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
              fontFamily: 'var(--font-body)', fontSize: '0.75rem',
              color: 'var(--color-brand-gold)', lineHeight: 1.55,
              marginTop: '0.5rem', opacity: 0.9, letterSpacing: '0.01em',
            }}>
              For grillz: tell us top set, bottom set, or full mouth. Gold, stones, or both? We&apos;ll walk you through the next step.
            </p>
          )}
          {errors.idea && (
            <p className="cf-error">Add an idea or drop a reference — either works.</p>
          )}
        </div>

        {/* ── 04 — YOU ───────────────────────────────────────────────────── */}
        <div className="build-decision-block">
          <div className="build-decision-header">
            <span className="build-decision-num">04</span>
            <span className="build-decision-text">YOU</span>
          </div>

          <div className="build-contact-grid" style={{ marginBottom: '1.25rem' }}>
            <div>
              <label htmlFor="cf-name" className="cf-field-label">YOUR NAME</label>
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
              <label htmlFor="cf-phone" className="cf-field-label">WHATSAPP OR PHONE</label>
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
            <p className="cf-error" style={{ marginTop: '-0.5rem', marginBottom: '1rem' }}>
              Name and phone are required.
            </p>
          )}

          <div>
            <p className="cf-field-label" style={{ marginBottom: '0.5rem' }}>
              BUDGET{' '}
              <span style={{ fontWeight: 400, opacity: 0.5, textTransform: 'lowercase', letterSpacing: 0, fontSize: '0.65rem' }}>
                optional
              </span>
            </p>
            <div className="piece-chip-grid" style={{ marginBottom: '0.5rem' }}>
              {BUDGET_OPTIONS.map(b => (
                <button
                  key={b.id}
                  type="button"
                  className={`piece-chip budget-chip${data.budget === b.id ? ' active' : ''}`}
                  onClick={() => selectBudget(b.id)}
                  aria-pressed={data.budget === b.id}
                >
                  {b.label}
                </button>
              ))}
            </div>
            <p className="cf-hint">Budget helps guide the conversation. Not a final quote.</p>
          </div>
        </div>

        {/* ── SUBMIT ─────────────────────────────────────────────────────── */}
        <div className="cf-group">
          {recapParts.length > 0 && (
            <div className="build-recap-strip" aria-live="polite">
              <span className="build-recap-label">YOUR BUILD</span>
              <span className="build-recap-value">{recapParts.join(' · ')}</span>
            </div>
          )}

          <div className="custom-trust-callout" style={{ marginBottom: '1.25rem' }}>
            <span className="trust-diamond" aria-hidden="true">◆</span>
            No deposit. No rush. We quote first.
          </div>

          <button
            type="button"
            className="btn-primary"
            onClick={handleSubmit}
            disabled={submitting}
            style={{
              width: '100%', padding: '1rem 1.5rem',
              opacity: submitting ? 0.7 : 1, fontSize: '0.8125rem',
              letterSpacing: '0.1em', cursor: submitting ? 'not-allowed' : 'pointer',
              marginBottom: '0.75rem',
            }}
          >
            {submitting ? 'Sending…' : 'SEND REQUEST →'}
          </button>

          <a
            href={waBuildHref()}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '0.45rem', width: '100%', padding: '0.9rem 1.5rem',
              fontFamily: 'var(--font-body)', fontSize: '0.8125rem',
              fontWeight: 600, letterSpacing: '0.07em', color: '#25D366',
              border: '1px solid rgba(37,211,102,0.35)', borderRadius: '2px',
              textDecoration: 'none', boxSizing: 'border-box',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            TEXT 2T ON WHATSAPP →
          </a>

          {submitError && (
            <p style={{
              color: '#c0392b', fontSize: '0.8125rem',
              marginTop: '0.875rem', lineHeight: 1.5, letterSpacing: '0.01em',
            }}>
              Something went wrong.{' '}
              <a
                href={WA_CHAT_URL}
                target="_blank" rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'underline' }}
              >
                Text 2T on WhatsApp →
              </a>
            </p>
          )}
        </div>

      </div>
    </section>
  )
}
