# Custom Form Backend — Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the fake `console.log + setTimeout` submission in `CustomBuildFlow.tsx` with a real Next.js API route that emails leads via Resend, including optional file attachments.

**Architecture:** A new `app/api/custom-request/route.ts` POST handler receives `multipart/form-data`, validates all fields server-side, and calls the Resend SDK to deliver a formatted email to the business inbox. The component replaces its fake timeout with a real `fetch` to this route and shows a real error state on failure.

**Tech Stack:** Next.js 16 App Router API routes, Resend SDK (`resend` npm package), `multipart/form-data` via the Web Streams `FormData` API (built into Next.js edge-compatible runtime).

---

## Pre-flight: Business Approvals Required Before Any Code

Do NOT start coding until these are confirmed by the business owner:

| # | Question | Why it blocks |
|---|---|---|
| 1 | **What email address should leads go to?** | Required for `LEAD_EMAIL_TO` env var |
| 2 | **File uploads via email attachment or route to WhatsApp only?** | Determines if attachment code is needed |
| 3 | **What "from" address to use?** | Resend sandbox uses `onboarding@resend.dev`; a custom domain like `leads@2tjewelers.com` requires DNS verification on Resend |

Safest unblocked start (sandbox mode): leads go to `yaniv00@gmail.com` using `onboarding@resend.dev` as the from address. No domain verification needed. Switch to production domain later.

---

## Research Summary

### 1. Current Form Behavior

`CustomBuildFlow.tsx:85–104` — `handleSubmit`:
- Runs client-side validation (piece type required, name + phone required, idea OR file required)
- On pass: sets `submitting = true`, logs payload to `console.log`, waits 600ms via `setTimeout`, then sets `submitted = true`
- **No network request is made. No backend exists. `app/api/` is empty.**
- The success screen at line 108–181 shows regardless of whether data was delivered
- The uploaded `File` object is held in React state and never sent anywhere

### 2. Recommended Backend Option: Resend + Next.js API Route

**Winner: Resend SDK + `app/api/custom-request/route.ts`**

Rationale vs alternatives:

| Option | Pro | Con | Decision |
|---|---|---|---|
| **Resend API route** | TypeScript-first, attachment support, 3K emails/month free, API key is server-only | Requires `npm install resend` + account | **CHOSEN** |
| Formspree | Zero backend code | No file attachments on free tier, submissions go to Formspree dashboard not inbox, less control over email format | Skip |
| Zapier webhook | Flexible routing | No native file upload support, free tier limited, adds external dependency | Skip |
| Nodemailer + Gmail SMTP | No new service | Requires Gmail App Password, SMTP setup is fiddly, attachment encoding manual | Skip |

Resend free tier: 3,000 emails/month, 100/day. Sufficient for a prototype. Sandbox mode delivers to any verified email without domain verification.

### 3. How to Handle File Uploads Safely

The form enforces `accept="image/*,.pdf"` and a 5MB client-side size check (`CustomBuildFlow.tsx:67–69`). The upload is stored as a `File` object in React state.

Safe path for Phase 1:
- Send the file as a base64-encoded email attachment via Resend's `attachments` field
- Re-validate size on the server (5MB raw → ~6.7MB base64; Resend's email attachment limit is effectively ~10MB base64, so this is safe)
- No file storage service (S3, Cloudinary, Supabase) needed for Phase 1
- If the file is absent, the email simply has no attachment — no error

**CLAIM_SAFETY concern:** The current upload zone label reads "DROP YOUR PHOTO, LOGO, OR SKETCH" and sub-label "Or describe it below — anything works." These are safe — no delivery promise. Do not add any copy implying the file will be stored, returned, or used for a render/CAD.

### 4. Required Files to Change

| File | Action | Purpose |
|---|---|---|
| `app/api/custom-request/route.ts` | **Create** | POST handler: parse FormData, validate, send email via Resend |
| `components/custom/CustomBuildFlow.tsx` | **Modify** | Replace fake timeout with real `fetch`, add real error state |
| `.env.local` | **Create** | `RESEND_API_KEY`, `LEAD_EMAIL_TO`, `LEAD_EMAIL_FROM` |

### 5. Required Env Vars

```
RESEND_API_KEY=re_xxxxxxxxxxxx          # from resend.com dashboard
LEAD_EMAIL_TO=yaniv00@gmail.com         # or business email — where leads land
LEAD_EMAIL_FROM=onboarding@resend.dev   # sandbox; replace with verified domain later
```

For Vercel deployment, these must also be added to the Vercel project environment variables (Settings → Environment Variables).

### 6. Claim-Safety / Copy Risks

| Risk | Current state | Required action |
|---|---|---|
| Success message makes delivery promise | "Your request is in. We'll review the details and follow up with next steps." — **SAFE** (matches CLAIM_SAFETY approved phrase) | No change needed |
| Error state is missing entirely | No error copy exists | Must add — use "Something went wrong. Try again, or text 2T on WhatsApp →" |
| Upload label implies file storage | "DROP YOUR PHOTO, LOGO, OR SKETCH" / "Or describe it below — anything works." — **SAFE** | No change needed |
| Success shown before API call completes | Currently the success state fires after 600ms regardless | Fix: only show success on `200 OK` response from API |
| No response timeout shown to user | Form hangs if network is slow | Add: if `fetch` throws or returns non-200, show error state |

### 7. Success / Error State Behavior

**Current (broken):**
- `submitted = true` fires after 600ms, no matter what

**Required:**
- `submitted = true` only when API responds `200 OK`
- New `error` state (string or boolean) shown inline below the submit button when API returns error or network fails
- Error copy: `"Something went wrong. Try again, or text 2T on WhatsApp →"` with the WhatsApp link already in the component
- While submitting: button shows "Sending…" and is `disabled` (already implemented)
- On error: button re-enables so user can retry

---

## File Structure

```
app/
  api/
    custom-request/
      route.ts          ← NEW: POST handler
components/
  custom/
    CustomBuildFlow.tsx ← MODIFY: real fetch, real error state
.env.local              ← NEW: env vars (gitignored already via .gitignore)
```

---

## Task 1: Install Resend and Create the API Route

**Files:**
- Create: `app/api/custom-request/route.ts`

- [ ] **Step 1: Install Resend**

```powershell
cd C:\Users\yaniv\Downloads\2t-jewelers-next
npm install resend
```

Expected output: `added 1 package` (Resend has minimal dependencies).

- [ ] **Step 2: Create `.env.local`**

Create file at project root (already in `.gitignore` via Next.js default):

```
RESEND_API_KEY=re_xxxxxxxxxxxx
LEAD_EMAIL_TO=yaniv00@gmail.com
LEAD_EMAIL_FROM=onboarding@resend.dev
```

Replace `re_xxxxxxxxxxxx` with the real key from [resend.com/api-keys](https://resend.com/api-keys).
Use `onboarding@resend.dev` as the from address until a domain is verified on Resend.

- [ ] **Step 3: Create the API route**

Create `app/api/custom-request/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const MAX_FILE_BYTES = 5 * 1024 * 1024 // 5MB

export async function POST(req: NextRequest) {
  let formData: FormData
  try {
    formData = await req.formData()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const pieceType  = (formData.get('pieceType')  as string | null)?.trim() ?? ''
  const idea       = (formData.get('idea')        as string | null)?.trim() ?? ''
  const name       = (formData.get('name')        as string | null)?.trim() ?? ''
  const phone      = (formData.get('phone')       as string | null)?.trim() ?? ''
  const budget     = (formData.get('budget')      as string | null)?.trim() ?? ''
  const uploadFile = formData.get('uploadFile') as File | null

  // Server-side validation (mirrors client-side rules)
  if (!pieceType)                   return NextResponse.json({ error: 'pieceType required.' }, { status: 400 })
  if (!name || !phone)              return NextResponse.json({ error: 'name and phone required.' }, { status: 400 })
  if (!idea && !uploadFile?.name)   return NextResponse.json({ error: 'idea or file required.' }, { status: 400 })

  // Build email attachments
  const attachments: { filename: string; content: string }[] = []
  if (uploadFile && uploadFile.size > 0) {
    if (uploadFile.size > MAX_FILE_BYTES) {
      return NextResponse.json({ error: 'File exceeds 5MB limit.' }, { status: 400 })
    }
    const arrayBuffer = await uploadFile.arrayBuffer()
    const base64 = Buffer.from(arrayBuffer).toString('base64')
    attachments.push({ filename: uploadFile.name, content: base64 })
  }

  // Build email body
  const submittedAt = new Date().toISOString()
  const html = `
    <h2>New Custom Request — 2T Jewelers</h2>
    <table style="border-collapse:collapse;font-family:monospace;font-size:14px">
      <tr><td style="padding:4px 12px 4px 0;color:#888">Piece type</td><td>${escape(pieceType)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#888">Name</td><td>${escape(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#888">Phone</td><td>${escape(phone)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#888">Budget</td><td>${escape(budget) || '—'}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#888">Idea</td><td>${escape(idea) || '—'}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#888">File</td><td>${uploadFile?.name ? escape(uploadFile.name) : 'None'}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#888">Submitted</td><td>${submittedAt}</td></tr>
    </table>
    ${attachments.length ? '<p>Reference file attached.</p>' : ''}
  `

  const to   = process.env.LEAD_EMAIL_TO   ?? ''
  const from = process.env.LEAD_EMAIL_FROM ?? 'onboarding@resend.dev'

  if (!to) {
    console.error('[2T] LEAD_EMAIL_TO env var is not set.')
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
  }

  const { error: resendError } = await resend.emails.send({
    from,
    to,
    subject: `New custom request — ${pieceType} — ${name}`,
    html,
    attachments: attachments.length ? attachments : undefined,
  })

  if (resendError) {
    console.error('[2T] Resend error:', resendError)
    return NextResponse.json({ error: 'Failed to send.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true }, { status: 200 })
}

function escape(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
```

- [ ] **Step 4: Verify TypeScript build passes**

```powershell
npx tsc --noEmit
```

Expected: no errors. If Resend types error, run `npm install --save-dev @types/node` (already in devDeps, should be fine).

- [ ] **Step 5: Commit**

```powershell
git add app/api/custom-request/route.ts package.json package-lock.json
git commit -m "feat: add custom-request API route using Resend"
```

---

## Task 2: Update CustomBuildFlow to Call the Real API

**Files:**
- Modify: `components/custom/CustomBuildFlow.tsx`

The changes are confined to:
1. The `useState` declarations — add `error` state
2. The `handleSubmit` function — replace `console.log + setTimeout` with `fetch`
3. The error UI — add below the submit button

- [ ] **Step 1: Add error state to the component**

In `CustomBuildFlow.tsx`, find the existing state declarations (lines 43–50) and add one line:

```typescript
// Before:
const [submitting, setSubmitting] = useState(false)
const [submitted, setSubmitted]   = useState(false)

// After:
const [submitting, setSubmitting] = useState(false)
const [submitted, setSubmitted]   = useState(false)
const [submitError, setSubmitError] = useState(false)
```

- [ ] **Step 2: Replace handleSubmit with real fetch**

Replace the entire `handleSubmit` function (lines 85–105):

```typescript
const handleSubmit = async () => {
  // Reset error on new attempt
  setSubmitError(false)

  const next = {
    pieceType: !data.pieceType,
    contact:   !data.name.trim() || !data.phone.trim(),
    idea:      !data.idea.trim() && !data.uploadFileName,
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
    if (data.uploadFile) {
      body.append('uploadFile', data.uploadFile, data.uploadFileName)
    }

    const res = await fetch('/api/custom-request', { method: 'POST', body })

    if (!res.ok) {
      setSubmitError(true)
      return
    }

    setSubmitted(true)
  } catch {
    setSubmitError(true)
  } finally {
    setSubmitting(false)
  }
}
```

Note: `handleSubmit` must be declared `async` now. The button `onClick` remains `onClick={handleSubmit}` — React handles async event handlers fine.

- [ ] **Step 3: Add error state UI below the submit button**

Find the submit button block (around lines 460–491). After the `<button>` closing tag and before the bypass CTA `<a>`, add:

```tsx
{submitError && (
  <p style={{
    color:         '#c0392b',
    fontSize:      '0.8125rem',
    marginTop:     '0.875rem',
    lineHeight:    1.5,
    letterSpacing: '0.01em',
  }}>
    Something went wrong.{' '}
    <a
      href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20building%20a%20piece%20and%20want%20to%20chat."
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'inherit', textDecoration: 'underline' }}
    >
      Text 2T on WhatsApp →
    </a>
  </p>
)}
```

- [ ] **Step 4: Verify TypeScript build passes**

```powershell
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Commit**

```powershell
git add components/custom/CustomBuildFlow.tsx
git commit -m "feat: wire CustomBuildFlow to real /api/custom-request endpoint"
```

---

## Task 3: Manual Verification

No test framework is installed in this project. Verify manually before marking complete.

- [ ] **Step 1: Start the dev server**

```powershell
npm run dev
```

Expected: server starts at `http://localhost:3000` with no errors.

- [ ] **Step 2: Verify a successful submission**

Using Playwright or browser — go to `http://localhost:3000/custom`.

Fill in:
- Piece type: Custom Pendant
- Idea: "test idea"
- Name: "Test User"
- Phone: "555-0100"
- Budget: Under $500
- No file upload

Click SEND REQUEST →.

Expected:
- Button shows "Sending…" briefly
- Success section renders: "Your request is in."
- Email arrives at `LEAD_EMAIL_TO` inbox
- Email subject: `New custom request — custom-pendant — Test User`
- Email body includes all fields

- [ ] **Step 3: Verify error state**

Temporarily rename `.env.local` to `.env.local.bak` and restart the dev server. Submit the form.

Expected:
- Button re-enables after submission attempt
- Error copy appears: "Something went wrong. Text 2T on WhatsApp →"
- Success section does NOT render

Restore `.env.local.bak` → `.env.local` after verifying.

- [ ] **Step 4: Verify file attachment**

Submit with a small image file (< 5MB).

Expected:
- Email arrives with the image attached
- Attachment filename matches what was uploaded

- [ ] **Step 5: Verify the 5MB client-side size guard still works**

Attempt to attach a file > 5MB using browser devtools or a large test file.

Expected: file is silently rejected by `applyFile` (no error message shown; current behavior). The upload zone stays empty. This is acceptable for Phase 1.

- [ ] **Step 6: Run TypeScript and lint**

```powershell
npx tsc --noEmit
npx eslint . --max-warnings 0
```

Expected: clean pass.

- [ ] **Step 7: Commit QA confirmation note**

```powershell
git commit --allow-empty -m "chore: manual QA pass — custom form backend verified"
```

---

## Task 4: Vercel Environment Variables (pre-deploy only)

Do this immediately before deploying to Vercel — not before.

- [ ] **Step 1: Add env vars to Vercel project**

In Vercel dashboard → Project → Settings → Environment Variables, add:

```
RESEND_API_KEY     = re_xxxxxxxxxxxx     (Production + Preview)
LEAD_EMAIL_TO      = <business email>    (Production + Preview)
LEAD_EMAIL_FROM    = onboarding@resend.dev OR leads@2tjewelers.com
```

- [ ] **Step 2: Redeploy**

Vercel will pick up the new env vars on next deploy. No code change needed.

---

## Claim-Safety QA Checklist (run before marking Phase 1 complete)

- [ ] Success message is exactly: "Your request is in. / We'll review the details and follow up with next steps." — no delivery promise, no timeline, no CAD/render
- [ ] Error copy does NOT promise retry or investigation
- [ ] Upload zone does NOT say "we'll store your file," "free render," "CAD," or any turnaround language
- [ ] No new copy added beyond what was planned in this document
- [ ] The 20% promo bar copy is unchanged

---

## What Is NOT Included in Phase 1

- CRM / lead database (Notion, Airtable, Supabase) — future phase
- SMS/WhatsApp automated reply — future phase
- File storage (S3, Cloudinary, Supabase Storage) — files go as email attachments only
- Analytics events on form submission — future phase
- Formspree fallback — not needed given Resend is simpler
- Domain verification on Resend — not needed for sandbox/demo; required before public launch

---

## Notes on the No-Test-Framework Situation

This project has no Jest or Playwright test runner configured (`package.json` has no test script). Phase 1 verification is manual (Task 3 above). If test infrastructure is added later, the API route should be tested with:

```typescript
// Suggested future test: POST with valid FormData → returns 200
// POST with missing pieceType → returns 400
// POST with file > 5MB → returns 400
// POST with RESEND_API_KEY unset → returns 500 (mock Resend in test)
```
