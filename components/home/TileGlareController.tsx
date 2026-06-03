'use client';
import { useEffect } from 'react';

export function TileGlareController() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if ('ontouchstart' in window) return;

    const tiles = Array.from(
      document.querySelectorAll<HTMLElement>('.pb-tile-3d')
    );

    const handlers = tiles.map((tile) => {
      const onMove = (e: MouseEvent) => {
        const r = tile.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const rx = (((e.clientY - cy) / (r.height / 2)) * -5).toFixed(2);
        const ry = (((e.clientX - cx) / (r.width / 2)) * 7).toFixed(2);
        const gx = (((e.clientX - r.left) / r.width) * 100).toFixed(1);
        const gy = (((e.clientY - r.top) / r.height) * 100).toFixed(1);
        tile.style.setProperty('--tile-rx', rx);
        tile.style.setProperty('--tile-ry', ry);
        tile.style.setProperty('--glare-x', `${gx}%`);
        tile.style.setProperty('--glare-y', `${gy}%`);
      };
      const onLeave = () => {
        tile.style.setProperty('--tile-rx', '0');
        tile.style.setProperty('--tile-ry', '0');
        tile.style.setProperty('--glare-x', '50%');
        tile.style.setProperty('--glare-y', '50%');
      };
      tile.addEventListener('mousemove', onMove);
      tile.addEventListener('mouseleave', onLeave);
      return { tile, onMove, onLeave };
    });

    return () => {
      handlers.forEach(({ tile, onMove, onLeave }) => {
        tile.removeEventListener('mousemove', onMove);
        tile.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return null;
}
