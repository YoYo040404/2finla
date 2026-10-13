'use client'

import { useEffect, useRef, useState } from 'react'
import s from '@/app/home-preview.module.css'

type Props = { src: string }

// Decorative concept footage. The server-rendered poster remains beneath it.
export function HomeHeroMotion({ src }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const userPaused = useRef(false)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const connection = (navigator as Navigator & { connection?: EventTarget & { saveData?: boolean } }).connection
    const applyPreference = () => {
      if (reducedMotion.matches || connection?.saveData) {
        video.pause()
        return
      }
      if (userPaused.current) return
      if (!video.getAttribute('src')) video.src = src
      void video.play().catch(() => { /* Poster and explicit play button remain available. */ })
    }
    applyPreference()
    reducedMotion.addEventListener('change', applyPreference)
    connection?.addEventListener('change', applyPreference)
    return () => {
      reducedMotion.removeEventListener('change', applyPreference)
      connection?.removeEventListener('change', applyPreference)
      video.pause()
      video.removeAttribute('src')
      video.load()
    }
  }, [src])

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (!video.paused) {
      userPaused.current = true
      video.pause()
      return
    }
    userPaused.current = false
    if (!video.getAttribute('src')) video.src = src
    void video.play().catch(() => { /* Autoplay restrictions are not an application error. */ })
  }

  return <>
    <video ref={videoRef} className={`${s.heroVideo} ${ready && !failed ? s.videoReady : ''}`}
      muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1}
      onLoadedData={() => setReady(true)} onPlaying={() => setPlaying(true)}
      onPause={() => setPlaying(false)} onError={() => setFailed(true)} />
    {!failed ? <button type="button" className={s.motionControl} onClick={togglePlayback}
      aria-label={playing ? 'Pause background video' : 'Play background video'}>
      {playing ? 'PAUSE VIDEO' : 'PLAY VIDEO'}
    </button> : null}
  </>
}
