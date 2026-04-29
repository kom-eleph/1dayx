const modules = [
  {
    id: '01',
    label: '1 day desk',
    cross: 'INNER × THINGS',
    text: '作業してもしなくてもいい。\nただ、机の前にいる。',
    subtext: '事物・内面との交差。',
    info: '港区リーブラ｜500円',
  },
  {
    id: '02',
    label: '1 day bar',
    cross: 'SELF × OTHER',
    text: '何者でもない夜を、\n誰かと過ごす。',
    subtext: '他者との交差。',
    info: '馬喰町 Cafe & Bar HIVE｜1,000円',
  },
  {
    id: '03',
    label: '1 day topic',
    cross: 'THOUGHT × THOUGHT',
    text: '正解を出さなくていい。\nただ、言葉を置いていく。',
    subtext: '思考との交差。',
    info: '中央区エリア｜500円',
  },
];

export default function Modules() {
  return (
    <section className="section" id="modules">
      <style>{`
        .module-row {
          display: grid;
          grid-template-columns: 48px 180px 1fr;
          gap: 2.5rem;
          align-items: start;
          padding: 2.5rem 0;
          border-top: 1px solid var(--border);
        }
        .module-row:last-child {
          border-bottom: 1px solid var(--border);
        }
        @media (max-width: 768px) {
          .module-row {
            grid-template-columns: 1fr;
            gap: 0.6rem;
            padding: 2rem 0;
          }
          .module-id { display: none; }
          .module-meta { display: flex; align-items: baseline; gap: 1rem; flex-wrap: wrap; }
        }
      `}</style>
      <div className="inner">
        <div style={{ marginBottom: '4rem' }}>
          <span className="label">— modules</span>
          <p style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1.6rem,3vw,2.5rem)',
            fontWeight: 300,
            lineHeight: 1.6,
            marginBottom: '1.5rem'
          }}>
            日常の中で、<br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              自分の周縁を揺らす場所。
            </span>
          </p>
          <p style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: '.7rem',
            letterSpacing: '.15em',
            color: 'var(--accent)',
            marginBottom: '1rem'
          }}>
            X は、あらゆる交差を意味する。
          </p>
          <p style={{
            fontSize: '.9rem',
            fontWeight: 300,
            color: 'var(--muted)',
            lineHeight: 2.5,
            letterSpacing: '.04em'
          }}>
            他者との交差。思考との交差。事物との交差。<br />
            それぞれに、一日だけの形がある。
          </p>
        </div>
        <div>
          {modules.map((mod) => (
            <div key={mod.id} className="module-row">
              <span className="module-id" style={{
                fontFamily: 'var(--font-space-mono)',
                fontSize: '.6rem',
                letterSpacing: '.2em',
                color: 'var(--dim)',
                paddingTop: '.2rem'
              }}>
                {mod.id}
              </span>
              <div className="module-meta">
                <div style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.4rem',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--accent)',
                  marginBottom: '.4rem'
                }}>
                  {mod.label}
                </div>
                <div style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: '.6rem',
                  letterSpacing: '.14em',
                  color: 'var(--dim)',
                  marginBottom: '.8rem'
                }}>
                  {mod.cross}
                </div>
                <div style={{
                  fontSize: '.75rem',
                  letterSpacing: '.08em',
                  color: 'var(--dim)',
                  opacity: .8
                }}>
                  {mod.info}
                </div>
              </div>
              <div>
                <p style={{
                  fontSize: '.9rem',
                  lineHeight: 2.4,
                  color: 'var(--muted)',
                  fontWeight: 300,
                  letterSpacing: '.03em',
                  marginBottom: '.8rem',
                  whiteSpace: 'pre-line'
                }}>
                  {mod.text}
                </p>
                <p style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  color: 'var(--accent)',
                  letterSpacing: '.04em'
                }}>
                  {mod.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
