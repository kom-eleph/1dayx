const checklist = [
  'それは何との交差か',
  'なぜ一日だけでいいのか',
  '主催者が前に出すぎていないか',
  '目的を強制していないか',
  '評価が生まれる構造になっていないか',
  '解散できる余白があるか',
  '次に誰かが真似できる余地があるか',
];

export default function Fork() {
  return (
    <section className="section" id="fork">
      <style>{`
        .fork-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .fork-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
      <div className="inner">
        <span className="label">— fork</span>
        <div className="fork-grid">
          <div>
            <p style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.6rem,3vw,2.8rem)',
              fontWeight: 300,
              lineHeight: 1.4,
              marginBottom: '1.5rem'
            }}>
              1 day{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>?</span>
              {' '}を、<br />勝手につくっていい。
            </p>
            <p style={{
              fontSize: '.9rem',
              fontWeight: 300,
              color: 'var(--muted)',
              lineHeight: 2.4,
              letterSpacing: '.04em'
            }}>
              許可はいらない。<br />
              ただ、何と交差するかを決めること。
            </p>
          </div>
          <div>
            <p style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: '.65rem',
              letterSpacing: '.2em',
              color: 'var(--dim)',
              textTransform: 'uppercase',
              marginBottom: '1.2rem'
            }}>— checklist</p>
            <div style={{
              border: '1px solid var(--border)',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              {checklist.map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '.8rem',
                  padding: '.9rem 1.2rem',
                  borderBottom: i === checklist.length - 1 ? 'none' : '1px solid var(--border)',
                  background: 'var(--surface)'
                }}>
                  <span style={{
                    color: 'var(--accent)',
                    fontSize: '.8rem',
                    flexShrink: 0,
                    paddingTop: '.1rem'
                  }}>□</span>
                  <span style={{
                    fontSize: '.85rem',
                    fontWeight: 300,
                    color: 'var(--text)',
                    lineHeight: 1.8,
                    letterSpacing: '.03em'
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
