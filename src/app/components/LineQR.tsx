import Image from 'next/image';

export default function LineQR() {
  return (
    <section style={{
      padding: '7rem 3.5rem',
      borderBottom: '1px solid var(--border)'
    }} id="line">
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <p style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: '.58rem',
          letterSpacing: '.38em',
          color: 'var(--dim)',
          textTransform: 'uppercase',
          marginBottom: '2.5rem'
        }}>— join</p>
        <p style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(1.5rem,3vw,2.5rem)',
          fontWeight: 300,
          lineHeight: 1.7,
          color: 'var(--text)',
          marginBottom: '1.5rem'
        }}>
          公式LINEから、<br />
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>ふらっと参加する。</em>
        </p>
        <p style={{
          fontSize: '.85rem',
          fontWeight: 200,
          color: 'var(--muted)',
          lineHeight: 2.2,
          letterSpacing: '.04em',
          marginBottom: '3rem'
        }}>
          次回の開催情報・申し込みは公式LINEにて。<br />
          QRコードを読み取って友だち追加してください。
        </p>
        <div style={{
          padding: '2rem',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          display: 'inline-block'
        }}>
          <Image
            src="/line.jpg"
            alt="公式LINE QRコード"
            width={200}
            height={200}
            style={{ display: 'block' }}
          />
        </div>
      </div>
    </section>
  );
}