export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '8rem 3.5rem 6rem',
      borderBottom: '1px solid var(--border)'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
        alignItems: 'center',
        maxWidth: '1000px'
      }}>
        <div>
          <p style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: '.6rem',
            letterSpacing: '.4em',
            color: 'var(--dim)',
            textTransform: 'uppercase',
            marginBottom: '2.5rem'
          }}>
            偶然の交差の場 — Tokyo
          </p>
          <h1 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(4rem,10vw,8rem)',
            fontWeight: 300,
            lineHeight: .9
          }}>
            1 day <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>X</span>
          </h1>
        </div>
        <div style={{
          padding: '1.8rem 1.4rem',
          border: '1px solid var(--border-mid)',
          borderRadius: '8px',
          background: 'var(--surface)'
        }}>
          <div style={{
            width: '40px', height: '1px',
            background: 'var(--accent)',
            opacity: .4, marginBottom: '2.5rem'
          }} />
          <p style={{
            fontSize: '.92rem', fontWeight: 200,
            color: 'var(--muted)', lineHeight: 2.5,
            letterSpacing: '.04em', marginBottom: '2.5rem'
          }}>
            目的があると、同じ目的を持つ人しか集まらない。<br />
            評価があると、人はいつのまにか比べることを意識し始める。<br /><br />
            どちらもない場所の価値を、もう一度考えてみたい。
          </p>
          <p style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '1.3rem', fontWeight: 300,
            lineHeight: 1.7, color: 'var(--text)'
          }}>
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              交差の形は、これからも増えていく。
            </em>
          </p>
        </div>
      </div>
    </section>
  );
}