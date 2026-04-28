const modules = [
  {
    id: '01',
    label: '1 day desk',
    name: 'もくもく会',
    cross: 'INNER × THINGS',
    color: 'var(--accent)',
    text: [
      '作業でも、ただ座っていてもいい。人と比べない時間が、ここにはある。',
      '場には記事や論考が散りばめられている。承認されなくても、うまく語れなくても、何かに夢中になれる余地がある。',
    ],
  },
  {
    id: '02',
    label: '1 day bar',
    name: '一日バー',
    cross: 'SELF × OTHER',
    color: 'var(--green)',
    text: [
      '肩書きも、役割も、あまり関係ない。何者でもないままで、隣に座れる場所。',
      '何かを証明しなくていい。ただ同じ空間に居合わせて、偶然の会話や刺激がそっと生まれればいい。',
    ],
  },
  {
    id: '03',
    label: '1 day topic',
    name: '読書会',
    cross: 'THOUGHT × THOUGHT',
    color: 'var(--purple)',
    text: [
      '肩書きを外して、言葉だけで向き合う。そんな対話が生まれやすい場にしたい。',
      '正解も不正解もなく、語られた言葉がただそこにある。そういう時間があってもいいと思う。',
    ],
  },
];

export default function Modules() {
  return (
    <section style={{
      padding: '7rem 3.5rem',
      borderBottom: '1px solid var(--border)'
    }} id="modules">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: '.58rem',
          letterSpacing: '.38em',
          color: 'var(--dim)',
          textTransform: 'uppercase',
          marginBottom: '4rem'
        }}>— modules</p>
        <div>
          {modules.map((mod) => (
            <div key={mod.id} style={{
              display: 'grid',
              gridTemplateColumns: '48px 190px 1fr',
              gap: '3rem',
              alignItems: 'start',
              padding: '3rem 0',
              borderTop: '1px solid var(--border)',
            }}>
              <span style={{
                fontFamily: 'var(--font-space-mono)',
                fontSize: '.55rem',
                letterSpacing: '.2em',
                color: 'var(--dim)',
                paddingTop: '.2rem'
              }}>
                {mod.id}
              </span>
              <div>
                <div style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.4rem',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  letterSpacing: '.08em',
                  color: 'var(--dim)',
                  marginBottom: '.5rem'
                }}>
                  {mod.label}
                </div>
                <div style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.9rem',
                  fontWeight: 300,
                  lineHeight: 1,
                  marginBottom: '1rem',
                  color: mod.color
                }}>
                  {mod.name}
                </div>
                <div style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: '.55rem',
                  letterSpacing: '.16em',
                  color: 'var(--dim)'
                }}>
                  {mod.cross}
                </div>
              </div>
              <div style={{
                fontSize: '.82rem',
                lineHeight: 2.4,
                color: 'var(--muted)',
                fontWeight: 200,
                letterSpacing: '.03em'
              }}>
                {mod.text.map((t, i) => (
                  <p key={i} style={{ marginTop: i > 0 ? '1em' : 0 }}>{t}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}