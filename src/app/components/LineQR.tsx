import Image from 'next/image';

const btnStyle: React.CSSProperties = {
  display: 'inline-block',
  background: '#06C755',
  color: '#fff',
  fontFamily: 'var(--font-space-mono)',
  fontSize: '.75rem',
  letterSpacing: '.15em',
  padding: '.9rem 2.5rem',
  borderRadius: '4px',
  textDecoration: 'none',
  marginBottom: '2rem',
  textTransform: 'uppercase'
};

export default function LineQR() {
  return (
    <section className="section" id="line">
      <div className="inner" style={{ textAlign: 'center' }}>
        <span className="label" style={{ textAlign: 'center' }}>— join</span>
        <p style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(1.2rem,2vw,1.8rem)',
          fontWeight: 300,
          lineHeight: 1.9,
          color: 'var(--text)',
          marginBottom: '1rem'
        }}>
          気になったら、<br />
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
            まず覗いてみてください。
          </em>
        </p>
        <p style={{
          fontSize: '.85rem',
          fontWeight: 300,
          color: 'var(--muted)',
          lineHeight: 2,
          letterSpacing: '.04em',
          marginBottom: '2.5rem'
        }}>
          次回の開催情報・申し込みは公式LINEにて。
        </p>
        <a href="https://lin.ee/your-line-id" target="_blank" rel="noopener noreferrer" style={btnStyle}>
          LINE で友だち追加
        </a>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '.5rem'
        }}>
          <p style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: '.55rem',
            letterSpacing: '.15em',
            color: 'var(--dim)',
            textTransform: 'uppercase'
          }}>— or scan QR</p>
          <div style={{
            padding: '1rem',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            display: 'inline-block'
          }}>
            <Image
              src="/line.jpg"
              alt="公式LINE QRコード"
              width={120}
              height={120}
              style={{ display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
