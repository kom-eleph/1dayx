const principles = [
  {
    main: '目的のない場所である。',
    sub: 'ただ、何かが残ることがある。',
  },
  {
    main: '交流を目的にしない場所である。',
    sub: 'ただ、気づけば誰かと話している。',
  },
  {
    main: 'うまく話せなくていい場所である。',
    sub: 'ただ、言葉を置いていける。',
  },
  {
    main: '一日だけ存在する場所である。',
    sub: 'ただ、また来てもいい。',
  },
];

export default function Principles() {
  return (
    <section className="section" id="principles">
      <div className="inner">
        <span className="label">— principles</span>
        <div>
          {principles.map((p, i) => (
            <div key={i} style={{
              padding: '2rem 0',
              borderTop: '1px solid var(--border)',
              ...(i === principles.length - 1 ? { borderBottom: '1px solid var(--border)' } : {})
            }}>
              <p style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.2rem,2.5vw,1.7rem)',
                fontWeight: 300,
                color: 'var(--text)',
                letterSpacing: '.04em',
                marginBottom: '.6rem'
              }}>
                {p.main}
              </p>
              <p style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1rem,2vw,1.3rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--accent)',
                letterSpacing: '.04em'
              }}>
                {p.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
