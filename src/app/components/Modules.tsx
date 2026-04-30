'use client';

import { useState, useEffect } from 'react';

const LINE_URL = 'https://lin.ee/vOHgYdZ';

type Module = {
  id: string;
  label: string;
  cross: string;
  text: string;
  subtext: string;
  info: string;
  place: string;
  price: string;
  description: string;
  faqs: { q: string; a: string }[];
};

const modules: Module[] = [
  {
    id: '01',
    label: '1 day desk',
    cross: 'INNER × THINGS',
    text: '作業してもしなくてもいい。\nただ、机の前にいる。',
    subtext: '事物・内面との交差。',
    info: '港区リーブラ｜500円',
    place: '港区立男女平等参画センター リーブラ',
    price: '500円（出入り自由）',
    description:
      '机と椅子が並ぶ、静かな空間。少し変わった書籍や映画の断片が、庭のように置かれています。\n\n作業しても、ただ座っていても、ぼんやり眺めているだけでもいい。向き合うのは人ではなく、自分と事物そのものです。\n\n「何かしなければ」という空気のない場所で、自分のペースでいる時間をつくっています。',
    faqs: [
      { q: '作業しなくてもいいですか？', a: 'はい。ただいるだけで大丈夫です。本を読む、ぼーっとする、展示を眺める——何でも、何もしなくても構いません。' },
      { q: '一人での参加でも大丈夫ですか？', a: 'もちろんです。参加者の多くが一人で来ています。誰かと話したくなったら話せる、話したくなければ話さなくていい場所です。' },
      { q: '途中入退場はできますか？', a: 'できます。出入り自由なので、仕事帰りに少しだけ立ち寄る形でも歓迎しています。' },
    ],
  },
  {
    id: '02',
    label: '1 day bar',
    cross: 'SELF × OTHER',
    text: '何者でもない夜を、\n誰かと過ごす。',
    subtext: '他者との交差。',
    info: '馬喰町 Cafe & Bar HIVE｜1,000円',
    place: '馬喰町 Cafe & Bar HIVE',
    price: '1,000円（2ドリンク制）',
    description:
      '仕事帰りに、少しだけ寄り道する夜。知らない人と、あるいは顔見知りと、お酒を片手に、特に目的もなく過ごす場所です。\n\n深い話をしなくていい。盛り上がらなくていい。名刺を交換しなくていい。ただそこにいるだけの時間が、あとから少しだけ残るような——そんな余白の場です。\n\n隔週土曜の夜に開催しています。',
    faqs: [
      { q: 'お酒が飲めなくても参加できますか？', a: 'できます。ソフトドリンクも用意しています。飲めなくても、飲まなくても、気にしなくていい場所です。' },
      { q: '知り合いがいなくても大丈夫ですか？', a: 'はい。一人での参加が大半です。誰かと話したくなれば話せますし、一人でいても自然な場所です。' },
      { q: '途中参加・途中退場はできますか？', a: 'できます。来られる時間だけ来てもらえれば十分です。' },
    ],
  },
  {
    id: '03',
    label: '1 day topic',
    cross: 'THOUGHT × THOUGHT',
    text: '正解を出さなくていい。\nただ、言葉を置いていく。',
    subtext: '思考との交差。',
    info: '中央区エリア｜500円',
    place: '中央区エリア（詳細はLINEにて）',
    price: '500円',
    description:
      'ひとつのテーマについて、ゆるやかに言葉を置いていく場です。議論でも、勉強会でもありません。\n\n正解を出す必要はありません。「なんとなくそう思う」程度の言葉でも、場に出すことで何かが動くことがあります。自分の考えが整理されたり、思いがけない角度の言葉に出会ったり。\n\n毎週土曜に開催予定。テーマはLINEで事前にお知らせしています。',
    faqs: [
      { q: 'その分野の知識がなくても参加できますか？', a: 'できます。知識よりも、その場で感じたことや素直な疑問の方が、むしろ場を豊かにします。' },
      { q: 'うまく話せるか不安です。', a: '話すことが目的ではないので、聞いているだけでも大丈夫です。言葉が出てきたときに置いていく、という感覚でいてください。' },
    ],
  },
];

export default function Modules() {
  const [active, setActive] = useState<Module | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (active) {
      document.body.style.overflow = 'hidden';
      html.style.overflowX = 'hidden';
      html.style.touchAction = 'pan-y pinch-zoom';
    } else {
      document.body.style.overflow = '';
      html.style.overflowX = '';
      html.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      html.style.overflowX = '';
      html.style.touchAction = '';
    };
  }, [active]);

  return (
    <section className="section" id="modules">
      <style>{`
        .module-row {
          display: grid;
          grid-template-columns: 48px 180px 1fr auto;
          gap: 2.5rem;
          align-items: center;
          padding: 2.5rem 0;
          border-top: 1px solid var(--border);
          cursor: pointer;
          transition: background .18s;
        }
        .module-row:last-child { border-bottom: 1px solid var(--border); }
        .module-row:hover { background: var(--accent-light); }
        .module-arrow {
          font-size: .75rem; color: var(--accent);
          opacity: 0; transition: opacity .18s, transform .18s;
          font-family: var(--font-space-mono); letter-spacing: .1em; white-space: nowrap;
        }
        .module-row:hover .module-arrow { opacity: 1; transform: translateX(4px); }

        @media (max-width: 768px) {
          .module-row { grid-template-columns: 1fr auto; gap: 0.6rem; padding: 2rem 0; }
          .module-id { display: none; }
          .module-meta-col { display: none; }
          .module-arrow { opacity: 1; }
        }

        .modal-overlay {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(26,26,24,.55);
          backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
          display: flex; align-items: flex-end;
          opacity: 0; transition: opacity .28s; pointer-events: none;
          box-sizing: border-box;
        }
        .modal-overlay.open { opacity: 1; pointer-events: auto; }
        @media (min-width: 769px) { .modal-overlay { align-items: center; justify-content: center; } }

        .modal-panel {
          background: var(--surface);
          border-top: 1px solid var(--border);
          border-radius: 24px 24px 0 0;
          width: 100%;
          max-width: 100vw;
          max-height: 92dvh; overflow-y: auto; overflow-x: hidden;
          padding: 0 1.5rem 3rem;
          transform: translateY(40px);
          transition: transform .3s cubic-bezier(.16,1,.3,1);
          box-sizing: border-box;
          touch-action: pan-y pinch-zoom;
        }
        .modal-overlay.open .modal-panel { transform: translateY(0); }
        @media (min-width: 769px) {
          .modal-panel {
            max-width: 600px; width: 100%;
            border-radius: 20px; border: 1px solid var(--border);
            padding: 0 3rem 3rem; max-height: 88vh;
            transform: translateY(16px) scale(.98);
          }
          .modal-overlay.open .modal-panel { transform: translateY(0) scale(1); }
        }

        .modal-header {
          position: sticky; top: 0; z-index: 10;
          background: var(--surface);
          padding: 1rem 0 .8rem;
          margin-bottom: 1.2rem;
          border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
        }
        .modal-grip {
          width: 36px; height: 4px; background: var(--border-mid);
          border-radius: 99px;
        }
        @media (min-width: 769px) { .modal-grip { display: none; } }
        .modal-close {
          display: flex; align-items: center; gap: .5rem;
          background: none; border: none; cursor: pointer;
          font-family: var(--font-space-mono); font-size: .65rem;
          letter-spacing: .18em; color: var(--dim); text-transform: uppercase;
          transition: color .15s; padding: .2rem 0;
          margin-left: auto;
        }
        .modal-close:hover { color: var(--accent); }
        .modal-close-x {
          display: inline-flex; align-items: center; justify-content: center;
          width: 28px; height: 28px; border-radius: 50%;
          background: var(--accent-light); color: var(--accent);
          font-size: 1.1rem; line-height: 1;
          transition: background .15s;
        }
        .modal-close:hover .modal-close-x { background: var(--accent); color: #fff; }

        .modal-cross { font-family: var(--font-space-mono); font-size: .6rem; letter-spacing: .18em; color: var(--dim); text-transform: uppercase; margin-bottom: .6rem; }
        .modal-title { font-family: var(--font-cormorant); font-size: clamp(2rem,5vw,2.8rem); font-weight: 300; font-style: italic; color: var(--accent); line-height: 1.1; margin-bottom: 1.2rem; }
        .modal-tagline { font-family: var(--font-cormorant); font-size: 1.05rem; font-weight: 300; line-height: 1.9; color: var(--text); border-left: 2px solid var(--accent); padding-left: 1rem; margin-bottom: 2rem; white-space: pre-line; }
        .modal-divider { height: 1px; background: var(--border); margin: 1.8rem 0; }
        .modal-section-label { font-family: var(--font-space-mono); font-size: .6rem; letter-spacing: .2em; color: var(--accent); text-transform: uppercase; margin-bottom: 1rem; }
        .modal-desc { font-size: .9rem; line-height: 2.2; color: var(--muted); font-weight: 300; white-space: pre-line; }
        .modal-meta { display: flex; flex-direction: column; gap: .55rem; font-size: .85rem; line-height: 1.6; color: var(--muted); }
        .modal-meta-row { display: flex; gap: .6rem; align-items: baseline; }
        .modal-meta-icon { font-size: .75rem; flex-shrink: 0; width: 1.1rem; }
        .faq-list { display: flex; flex-direction: column; gap: 1.2rem; }
        .faq-q { font-size: .82rem; font-weight: 500; color: var(--text); letter-spacing: .02em; margin-bottom: .35rem; }
        .faq-q::before { content: 'Q. '; color: var(--accent); font-family: var(--font-space-mono); font-size: .7rem; }
        .faq-a { font-size: .82rem; line-height: 1.9; color: var(--muted); font-weight: 300; padding-left: 1.2rem; }
        .modal-cta {
          display: block; width: 100%; background: #06C755; color: #fff;
          font-family: var(--font-space-mono); font-size: .75rem; letter-spacing: .15em;
          text-transform: uppercase; padding: 1rem; border-radius: 6px;
          text-align: center; text-decoration: none; transition: opacity .18s; margin-top: 2rem;
        }
        .modal-cta:hover { opacity: .85; }
      `}</style>

      <div className="inner">
        <div style={{ marginBottom: '4rem' }}>
          <span className="label">— modules</span>
          <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.6rem,3vw,2.5rem)', fontWeight: 300, lineHeight: 1.6, marginBottom: '1.5rem' }}>
            日常の中で、<br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>自分の周縁を揺らす場所。</span>
          </p>
          <p style={{ fontFamily: 'var(--font-space-mono)', fontSize: '.7rem', letterSpacing: '.15em', color: 'var(--accent)', marginBottom: '1rem' }}>
            X は、あらゆる交差を意味する。
          </p>
          <p style={{ fontSize: '.9rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 2.5, letterSpacing: '.04em' }}>
            他者との交差。思考との交差。事物との交差。<br />それぞれに、一日だけの形がある。
          </p>
        </div>

        <div>
          {modules.map((mod) => (
            <div
              key={mod.id}
              className="module-row"
              onClick={() => setActive(mod)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActive(mod)}
              aria-label={`${mod.label}の詳細を見る`}
            >
              <span className="module-id" style={{ fontFamily: 'var(--font-space-mono)', fontSize: '.6rem', letterSpacing: '.2em', color: 'var(--dim)', paddingTop: '.2rem' }}>
                {mod.id}
              </span>
              <div className="module-meta-col">
                <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', fontWeight: 300, fontStyle: 'italic', color: 'var(--accent)', marginBottom: '.4rem' }}>{mod.label}</div>
                <div style={{ fontFamily: 'var(--font-space-mono)', fontSize: '.6rem', letterSpacing: '.14em', color: 'var(--dim)', marginBottom: '.8rem' }}>{mod.cross}</div>
                <div style={{ fontSize: '.75rem', letterSpacing: '.08em', color: 'var(--dim)', opacity: .8 }}>{mod.info}</div>
              </div>
              <div>
                <p style={{ fontSize: '.9rem', lineHeight: 2.4, color: 'var(--muted)', fontWeight: 300, letterSpacing: '.03em', marginBottom: '.8rem', whiteSpace: 'pre-line' }}>{mod.text}</p>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--accent)', letterSpacing: '.04em' }}>{mod.subtext}</p>
              </div>
              <span className="module-arrow">詳細 →</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`modal-overlay${active ? ' open' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) setActive(null); }}
        aria-modal="true"
        role="dialog"
        aria-label={active?.label ?? ''}
      >
        <div className="modal-panel">
          <div className="modal-header">
            <div className="modal-grip" />
            <button className="modal-close" onClick={() => setActive(null)}>
              <span>閉じる</span>
              <span className="modal-close-x">×</span>
            </button>
          </div>

          {active && (
            <>
              <div className="modal-cross">{active.cross}</div>
              <div className="modal-title">{active.label}</div>
              <div className="modal-tagline">{active.text}</div>

              <div className="modal-section-label">— about</div>
              <p className="modal-desc">{active.description}</p>

              <div className="modal-divider" />

              <div className="modal-section-label">— info</div>
              <div className="modal-meta">
                <div className="modal-meta-row"><span className="modal-meta-icon">📍</span><span>{active.place}</span></div>
                <div className="modal-meta-row"><span className="modal-meta-icon">💴</span><span>{active.price}</span></div>
              </div>

              <div className="modal-divider" />

              <div className="modal-section-label">— よくある問い</div>
              <div className="faq-list">
                {active.faqs.map((faq, i) => (
                  <div key={i} className="faq-item">
                    <div className="faq-q">{faq.q}</div>
                    <div className="faq-a">{faq.a}</div>
                  </div>
                ))}
              </div>

              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="modal-cta">
                LINE で友だち追加・申し込む
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}