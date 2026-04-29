'use client';

import { useEffect } from 'react';

const posts = [
  'https://www.instagram.com/reel/DSMinj5D4k8/',
  'https://www.instagram.com/p/DV5o2WeD5zF/',
  'https://www.instagram.com/p/DP9GykDDz-S/',
];

const linkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-space-mono)',
  fontSize: '.65rem',
  letterSpacing: '.14em',
  color: 'var(--accent)',
  textDecoration: 'none',
  textTransform: 'uppercase',
  borderBottom: '1px solid rgba(0,165,191,.3)',
  paddingBottom: '.1rem'
};

export default function Instagram() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="section" id="instagram">
      <style>{`
        .ig-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
        }
        .ig-item { overflow: hidden; border-radius: 4px; }
        @media (max-width: 768px) {
          .ig-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <div className="inner">
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: '1.8rem'
        }}>
          <span className="label" style={{ marginBottom: 0 }}>— instagram @1_day_bar</span>
          <a href="https://www.instagram.com/1_day_bar/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            もっと見る
          </a>
        </div>
        <div className="ig-grid">
          {posts.map((url) => (
            <div key={url} className="ig-item" dangerouslySetInnerHTML={{
              __html: `<blockquote class="instagram-media" data-instgrm-permalink="${url}?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style="min-width:0;max-width:100%;width:100%;margin:0;"></blockquote>`
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
