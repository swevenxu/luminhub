import { CSSProperties } from 'react';

export const colors = {
  brand: '#8f21d1',
  brandLight: '#a855f7',
  brandDark: '#6b21a8',
};

export const glassEffect: CSSProperties = {
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
  backdropFilter: 'blur(40px) saturate(180%)',
  WebkitBackdropFilter: 'blur(40px) saturate(180%)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
};

export const gridBackground: CSSProperties = {
  backgroundImage: `
    linear-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
  `,
  backgroundSize: '25px 25px',
};

export const fonts = {
  heading: "'Khand', sans-serif",
  display: "'Plein', sans-serif",
  body: "'Bespoke Sans', sans-serif",
  accent: "'Expose', sans-serif",
};
