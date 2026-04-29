import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <section className="section">
        <div className="inner" style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1.3rem,2.5vw,2.2rem)',
            fontWeight: 300,
            lineHeight: 2,
            color: 'var(--muted)',
            letterSpacing: '.04em',
            marginBottom: '2.5rem'
          }}>
            いつもと、ほとんど同じ。<br />
            <em style={{ fontStyle: 'normal', color: 'var(--text)' }}>
              でも、どこか少しだけ違う。
            </em>
          </p>
          <p style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(.9rem,1.8vw,1.3rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--accent)',
            marginBottom: '1.5rem'
          }}>
            気になったら、まず覗いてみてください。
          </p>
          <div style={{
            display: 'inline-block',
            padding: '1rem',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '8px'
          }}>
            <Image
              src="/line.jpg"
              alt="公式LINE QRコード"
              width={100}
              height={100}
              style={{ display: 'block' }}
            />
          </div>
        </div>
      </section>
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '2.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'var(--surface)',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <span style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: '1.1rem',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'var(--accent)'
        }}>
          1 day X
        </span>
        <span style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: '.6rem',
          letterSpacing: '.18em',
          color: 'var(--dim)'
        }}>
          desk · bar · topic — Tokyo
        </span>
      </footer>
    </>
  );
}
