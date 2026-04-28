'use client';

import { useEffect } from 'react';

const posts = [
  'https://www.instagram.com/reel/DSMinj5D4k8/',
  'https://www.instagram.com/p/DV5o2WeD5zF/',
  'https://www.instagram.com/p/DP9GykDDz-S/',
];

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
    <section style={{ padding: '7rem 3.5rem', borderBottom: '1px solid var(--border)' }} id="instagram">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1.8rem' }}>
          <p style={{ fontFamily: 'var(--font-space-mono)', fontSize: '.55rem', letterSpacing: '.2em', color: 'var(--dim)', textTransform: 'uppercase' }}>
            — instagram @1_day_bar
          </p>
          <a href="https://www.instagram.com/1_day_bar/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-space-mono)', fontSize: '.52rem', letterSpacing: '.14em', color: 'var(--accent)', textDecoration: 'none', textTransform: 'uppercase', borderBottom: '1px solid rgba(122,106,78,.3)', paddingBottom: '.1rem' }}>
            もっと見る
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.2rem' }}>
          {posts.map((url) => (
            <div key={url} dangerouslySetInnerHTML={{ __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${url}?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style="min-width:0;max-width:100%;width:100%;margin:0;"></blockquote>` }} />
          ))}
        </div>
      </div>
    </section>
  );
}