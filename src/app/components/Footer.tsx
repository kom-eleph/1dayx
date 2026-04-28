export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '3rem 3.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'var(--surface)'
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
        fontSize: '.55rem',
        letterSpacing: '.2em',
        color: 'var(--dim)'
      }}>
        desk · bar · topic — Tokyo
      </span>
    </footer>
  );
}