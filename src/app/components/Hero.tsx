export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '5rem 2rem 8rem',
      borderBottom: '1px solid var(--border)',
      position: 'relative'
    }}>
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: var(--inner-width);
          margin: 0 auto;
          width: 100%;
        }
        .scroll-hint {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: .4rem;
          opacity: .3;
          animation: scrollBounce 2s infinite;
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(5px); }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
      <div className="hero-grid">
        <div>
          <span className="label">Tokyo — 1 day X</span>
          <h1 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1.6rem,3.2vw,2.8rem)',
            fontWeight: 300,
            lineHeight: 1.8,
            letterSpacing: '.02em'
          }}>
            いつもと同じ一日を、<br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              少しだけ違う角度で<br />終わらせる。
            </span>
          </h1>
        </div>
        <div style={{
          padding: '2rem',
          border: '1px solid var(--border-mid)',
          borderRadius: '8px',
          background: 'var(--surface)'
        }}>
          <div style={{
            width: '32px',
            height: '1px',
            background: 'var(--accent)',
            marginBottom: '1.5rem'
          }} />
          <p style={{
            fontSize: '.9rem',
            fontWeight: 300,
            color: 'var(--muted)',
            lineHeight: 2.6,
            letterSpacing: '.06em'
          }}>
            目的もない。評価もない。<br />
            何者でもなくていい、<br />
            一日だけの場所。
          </p>
        </div>
      </div>
      <div className="scroll-hint">
        <span style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: '.5rem',
          letterSpacing: '.2em',
          color: 'var(--dim)',
          textTransform: 'uppercase'
        }}>scroll</span>
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
          <rect x="5.5" y="0.5" width="3" height="4" rx="1.5" fill="var(--accent)" opacity=".6"/>
          <rect x="0.5" y="0.5" width="13" height="21" rx="6.5" stroke="var(--accent)" strokeOpacity=".4"/>
        </svg>
      </div>
    </section>
  );
}
