import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function FizzCan() {
  return (
    <div className="can-wrap" aria-label="Illustration of a pink Itz Fizz can" data-testid="illustration-fizz-can">
      <svg className="can-svg" viewBox="0 0 300 520" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="body" x1="0" x2="1">
            <stop offset="0" stopColor="#c92d50" />
            <stop offset=".16" stopColor="#f44867" />
            <stop offset=".55" stopColor="#ff6680" />
            <stop offset=".85" stopColor="#ee3d5e" />
            <stop offset="1" stopColor="#b92b49" />
          </linearGradient>
          <linearGradient id="metal" x1="0" x2="0" y1="0" y2="1">
            <stop stopColor="#fff8db" />
            <stop offset=".45" stopColor="#c8c0ad" />
            <stop offset=".68" stopColor="#fffbe9" />
            <stop offset="1" stopColor="#a59d90" />
          </linearGradient>
          <linearGradient id="sheen" x1="0" x2="1">
            <stop stopColor="#fff" stopOpacity=".32" />
            <stop offset=".45" stopColor="#fff" stopOpacity="0" />
            <stop offset="1" stopColor="#701b35" stopOpacity=".13" />
          </linearGradient>
          <clipPath id="can-body"><path d="M63 61 Q64 48 78 43 L78 31 Q80 23 91 22 L209 22 Q220 23 222 31 L222 43 Q236 48 237 61 L250 454 Q251 477 232 486 Q150 507 68 486 Q49 477 50 454 Z" /></clipPath>
        </defs>
        <ellipse cx="150" cy="30" rx="72" ry="12" fill="url(#metal)" stroke="#a59d90" strokeWidth="2" />
        <path d="M83 30 Q150 41 217 30 L217 48 Q150 58 83 48Z" fill="#aaa393" />
        <ellipse cx="150" cy="29" rx="61" ry="8" fill="#f6efd9" />
        <ellipse cx="153" cy="29" rx="20" ry="4" fill="#928c80" />
        <path d="M63 61 Q64 48 78 43 L78 31 Q80 23 91 22 L209 22 Q220 23 222 31 L222 43 Q236 48 237 61 L250 454 Q251 477 232 486 Q150 507 68 486 Q49 477 50 454Z" fill="url(#body)" stroke="#ac2c49" strokeWidth="2" />
        <g clipPath="url(#can-body)">
          <rect x="50" y="40" width="200" height="465" fill="url(#sheen)" />
          <path d="M50 90 Q150 104 250 88 L250 100 Q150 117 50 102Z" fill="#d8f85b" />
          <path d="M50 411 Q150 426 250 408 L250 421 Q150 438 50 424Z" fill="#d8f85b" />
          <path d="M76 60 Q83 136 81 205" fill="none" stroke="#fff" strokeOpacity=".3" strokeWidth="5" className="can-glint" />
          <circle cx="90" cy="152" r="9" fill="none" stroke="#ffd5d8" strokeWidth="2" opacity=".8" />
          <circle cx="205" cy="132" r="5" fill="none" stroke="#ffd5d8" strokeWidth="2" opacity=".8" />
          <circle cx="198" cy="383" r="11" fill="none" stroke="#ffd5d8" strokeWidth="2" opacity=".75" />
          <circle cx="88" cy="355" r="5" fill="none" stroke="#ffd5d8" strokeWidth="2" opacity=".8" />
          <text x="150" y="180" textAnchor="middle" fill="#fff7d9" fontFamily="Space Grotesk, sans-serif" fontSize="20" fontWeight="700" letterSpacing="5">GOOD</text>
          <text x="150" y="201" textAnchor="middle" fill="#fff7d9" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="600" letterSpacing="3">VIBRATIONS</text>
          <text x="150" y="277" textAnchor="middle" fill="#fff7d9" fontFamily="Space Grotesk, sans-serif" fontSize="48" fontWeight="700" letterSpacing="-5">itz</text>
          <text x="150" y="327" textAnchor="middle" fill="#d8f85b" fontFamily="Space Grotesk, sans-serif" fontSize="49" fontWeight="700" letterSpacing="-4">fizz</text>
          <path d="M107 343 Q150 359 193 343" fill="none" stroke="#fff7d9" strokeWidth="2" />
          <text x="150" y="379" textAnchor="middle" fill="#fff7d9" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="2">PINK CITRUS / 12 FL OZ</text>
          <path d="M50 445 Q150 458 250 442 L250 510 L50 510Z" fill="#e53759" opacity=".5" />
        </g>
        <path d="M65 462 Q150 485 235 462" fill="none" stroke="url(#metal)" strokeWidth="12" />
        <path d="M67 472 Q150 492 233 472" fill="none" stroke="#a69e91" strokeWidth="2" />
      </svg>
      <span className="bubble one" /><span className="bubble two" /><span className="bubble three" />
    </div>
  );
}

function App() {
  const pageRef = useRef<HTMLDivElement>(null);
  const canRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const page = pageRef.current;
    const can = page?.querySelector<HTMLElement>('.can-wrap');
    if (!page || !can) return;
    canRef.current = can;
    const context = gsap.context(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      if (reduced) {
        gsap.set(['.hero-title .welcome', '.hero-title .itz', '.hero-title .fizz', '.hero-kicker', '.hero-index', '.hero-sticker'], { clearProps: 'all' });
        gsap.set('.hero-metric', { clearProps: 'all' });
      } else {
        intro.from('.hero-title .welcome', { y: 15, opacity: 0, duration: .6 })
          .from('.hero-title .itz', { y: 30, opacity: 0, duration: .65 }, '-=.28')
          .from('.hero-title .fizz', { y: 30, opacity: 0, duration: .65 }, '-=.46')
          .from(['.hero-kicker', '.hero-index', '.hero-sticker'], { opacity: 0, y: 12, duration: .5, stagger: .12 }, '-=.32')
          .from('.hero-metric', { opacity: 0, y: 15, duration: .5, stagger: .12 }, .35);
        gsap.from('.story-beat', {
          y: 35,
          opacity: 0,
          duration: .7,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.story-beat', start: 'top 82%', once: true },
        });
        gsap.fromTo(can, { rotation: -9, x: 0, y: 0 }, {
          rotation: 13,
          x: () => window.innerWidth < 700 ? 54 : 180,
          y: () => window.innerWidth < 700 ? 350 : 470,
          scale: .76,
          ease: 'none',
          scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.2 },
        });
      }
    }, page);
    return () => context.revert();
  }, []);

  return (
    <main className="fizz-page min-h-screen w-full" ref={pageRef}>
      <header className="topbar">
        <div className="wordmark" aria-label="Itz Fizz">itz<br />fizz<span>FEEL THE FIZZ</span></div>
        <div className="top-note">A little more sparkle<br />in the everyday.</div>
        <div className="menu-mark"><span>SCROLL TO SIP</span><i aria-hidden="true">↓</i></div>
      </header>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-index">A BRIGHTER KIND OF BUBBLE — 001</div>
        <p className="hero-kicker"><b>Not a mood.</b><br />A whole fizzy frequency.<br />Turn the ordinary up.</p>
        <h1 className="hero-title" id="hero-title">
          <span className="welcome">WELCOME</span>
          <span className="itz">ITZ</span><br />
          <span className="fizz">FIZZ</span>
        </h1>
        <div className="hero-metrics" aria-label="Illustrative experience metrics">
          <article className="hero-metric">
            <div className="hero-metric-number">87<span>%</span></div>
            <p>more little moments worth a second look.*</p>
          </article>
          <article className="hero-metric">
            <div className="hero-metric-number">64<span>%</span></div>
            <p>more color in the everyday, just because.*</p>
          </article>
          <article className="hero-metric">
            <div className="hero-metric-number">92<span>%</span></div>
            <p>more reasons to make a tiny moment yours.*</p>
          </article>
        </div>
        <FizzCan />
        <div className="hero-sticker">POP<br />INTO<br />YOUR DAY</div>
        <div className="hero-foot">
          <a className="scroll-cue" href="#story" data-testid="link-scroll-story"><span />SCROLL TO FEEL IT</a>
          <small>BRIGHT IDEAS<br />INSIDE THIS CAN</small>
        </div>
      </section>
      <section className="story" id="story" aria-labelledby="story-title">
        <div className="story-head">
          <div>
            <div className="story-eyebrow">02 / A TINY BIT OF EXTRA</div>
            <h2 className="story-title" id="story-title">A little fizz.<br /><em>A lot of feeling.</em></h2>
          </div>
          <p className="story-note">A playful pause in your day. A bright little reminder that ordinary can be extraordinary.</p>
        </div>
        <div className="story-beat">
          <div className="story-beat-number">A / LITTLE MOMENT</div>
          <p className="story-beat-copy">The first sip. The long way home. That song you play twice. Make room for the bits that brighten the in-between.</p>
          <div className="story-orbit" aria-hidden="true"><span>POP</span><i>!</i></div>
        </div>
        <p className="story-eyebrow" style={{ textAlign: 'center', marginTop: '8vh' }}>*Hero percentages are illustrative creative copy, not product or performance claims.</p>
      </section>
      <footer className="bottom-band">
        <div className="band-top"><span>Itz Fizz — keep it lively</span><span>03 / End on a high note</span></div>
        <div className="band-title">Stay a little<br />sparkly.</div>
        <div className="band-footer"><span>Made for the in-between moments.</span><a href="#hero-title" data-testid="link-back-to-top">BACK TO THE TOP ↑</a></div>
      </footer>
    </main>
  );
}

export default App;
