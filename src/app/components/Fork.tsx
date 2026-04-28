const questions = [
  'それは何との交差か',
  'なぜ一日だけでよいのか',
  '主催者が前に出すぎていないか',
  '解散できる余白はあるか',
];

export default function Fork() {
  return (
    <section style={{
      padding: '7rem 3.5rem',
      borderBottom: '1px solid var(--border)'
    }} id="fork">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: '.58rem',
          letterSpacing: '.38em',
          color: 'var(--dim)',
          textTransform: 'uppercase',
          marginBottom: '2.5rem'
        }}>— fork</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'start'
        }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem,4vw,3.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: '2rem'
            }}>
              1 day <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>?</span>
              <br />
              <span style={{ color: 'var(--muted)', fontSize: '0.6em' }}>を勝手につくる。</span>
            </p>
            <p style={{
              fontSize: '.85rem',
              fontWeight: 200,
              color: 'var(--muted)',
              lineHeight: 2.4,
              letterSpacing: '.04em'
            }}>
              1 day X は許可制ではありません。<br />
              何と交差する場なのか、何を固定し、何を変異させるのか。<br />
              その問いに答えられるなら、誰でも一日だけの場を開くことができます。
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {questions.map((q) => (
              <div key={q} style={{
                padding: '1.2rem 1.5rem',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                background: 'var(--surface)',
                fontSize: '.85rem',
                fontWeight: 200,
                color: 'var(--text)',
                lineHeight: 1.8
              }}>
                {q}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}