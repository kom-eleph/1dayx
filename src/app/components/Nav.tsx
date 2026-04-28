export default function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '1.6rem 3.5rem', display: 'flex', alignItems: 'center',
      background: 'rgba(247,246,242,0.93)', backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border)'
    }}>
      <a href="#" style={{
        fontFamily: 'var(--font-cormorant)',
        fontSize: '1.6rem', fontWeight: 300,
        letterSpacing: '.04em', color: 'var(--text)', textDecoration: 'none'
      }}>
        1 day <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>X</span>
      </a>
    </nav>
  );
}