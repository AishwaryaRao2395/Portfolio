import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { works, workIndex } from "./data";

function App() {
  const location = useLocation();
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const next = Math.min(100, Math.round(((now - start) / 1100) * 100));
      setProgress(next);
      if (next < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setLoading(false), 250);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    if (!containerRef.current || loading) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-animate='header-line']",
        { yPercent: 115 },
        { yPercent: 0, duration: 1.2, ease: "expo.out", stagger: 0.07 }
      );

      gsap.fromTo(
        "[data-animate='work-item']",
        { xPercent: 100, scale: 0.6, opacity: 0 },
        {
          xPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.045,
          delay: 0.2,
        }
      );

      gsap.fromTo(
        "[data-animate='section']",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.08,
          clearProps: "all",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [location.pathname, loading]);

  return (
    <>
      {loading && <Preloader progress={progress} />}
      <div
        ref={containerRef}
        className={`site-shell ${loading ? "is-loading" : ""}`}
      >
        <SiteChrome />
        <main id="app">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work/:slug" element={<WorkPage />} />
          </Routes>
        </main>
        <GridHelper />
      </div>
    </>
  );
}

function Preloader({ progress }) {
  return (
    <div className="preloader">
      <div className="preloader__percentage">{progress}%</div>
    </div>
  );
}

function SiteChrome() {
  return (
    <header className="header">
      <div className="header__inner">
        <button className="dimensions" type="button">
          <span className="o-hidden">
            <span data-animate="header-line">Dimensions</span>
          </span>
        </button>
        <nav className="header-navigation">
          <ul className="header-navigation__list">
            <li className="o-hidden">
              <Link data-animate="header-line" className="header-navigation__link" to="/">
                Featured Works,
              </Link>
            </li>
            <li className="o-hidden">
              <a
                data-animate="header-line"
                className="header-navigation__link"
                href="mailto:aishwaryagondlyala@gmail.com"
              >
                Contact
              </a>
            </li>
            <li className="o-hidden">
              <span data-animate="header-line" className="header-navigation__link">
                About
              </span>
            </li>
          </ul>
        </nav>
        <div className="availability">
          <div className="availability__icon">
            <div className="availability__icon-square" />
          </div>
          <div className="o-hidden">
            <span data-animate="header-line">Available for Product Design Roles</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomePage() {
  const [activeSlug, setActiveSlug] = useState(works[0].slug);
  const activeWork = workIndex.get(activeSlug);

  return (
    <div className="fw page">
      <div className="fw-titles">
        <div className="fw-titles__items">
          <div className="fw-titles__group">
            <div className="o-hidden">
              <h1 data-animate="header-line">Aishwarya Gondlyala</h1>
            </div>
            <div className="o-hidden">
              <h2 data-animate="header-line">Product Designer</h2>
            </div>
          </div>
          <div className="fw-titles__group">
            <div className="o-hidden">
              <span data-animate="header-line">Issue N°005 / Coll. 2024</span>
            </div>
            <div className="o-hidden">
              <span data-animate="header-line">Ref. AG-CS-2024</span>
            </div>
          </div>
        </div>
        <div className="fw-title">
          <span className="fw-title__icon">AG</span>
        </div>
      </div>

      <div className="fw-stage">
        <div className="fw-preview" data-animate="section">
          <div className={`fw-preview__frame ${activeWork.gallery[0]?.dark ? "is-dark" : ""}`}>
            <img src={activeWork.gallery[0]?.image} alt={activeWork.title} />
          </div>
          <div className="fw-preview__meta">
            <span>{activeWork.kicker}</span>
            <p>{activeWork.summary}</p>
          </div>
        </div>

        <div className="fw-works">
          <ul className="fw-works__items">
            {Array.from({ length: 5 }).flatMap((_, cloneIndex) =>
              works.map((work) => (
                <li key={`${cloneIndex}-${work.slug}`} className="fw-work" data-animate="work-item">
                  <Link
                    className={`fw-work__link ${activeSlug === work.slug ? "is-active" : ""}`}
                    to={`/work/${work.slug}`}
                    onMouseEnter={() => setActiveSlug(work.slug)}
                    onFocus={() => setActiveSlug(work.slug)}
                  >
                    <span className="fw-work__title">{work.title}</span>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

function WorkPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const work = slug ? workIndex.get(slug) : null;
  const nextWork = useMemo(() => {
    if (!work) return works[0];
    const currentIndex = works.findIndex((entry) => entry.slug === work.slug);
    return works[(currentIndex + 1) % works.length];
  }, [work]);

  useEffect(() => {
    if (!work) navigate("/");
  }, [navigate, work]);

  if (!work) return null;

  return (
    <div className="work page">
      <section className="work-case">
        <aside className="work-case__aside" data-animate="section">
          <div className="work-case__aside-infos">
            <div className="content-block">
              <div className="content-block__title">Case Study</div>
              <div className="work-case__eyebrow">
                <span>{work.shortCode}</span>
                <span>{work.year}</span>
              </div>
            </div>
            <div className="content-block">
              <div className="content-block__title">Summary</div>
              <p>{work.summary}</p>
            </div>
            <div className="content-block">
              <div className="content-block__title">Role</div>
              <p>{work.role}</p>
            </div>
            <div className="content-block">
              <div className="content-block__title">Problem</div>
              <p>{work.problem}</p>
            </div>
            <div className="content-block">
              <div className="content-block__title">Approach</div>
              <p>{work.approach}</p>
            </div>
            <div className="content-block">
              <div className="content-block__title">Outcome</div>
              <p>{work.outcome}</p>
            </div>
          </div>
        </aside>

        <div className="work-case__gallery">
          <section className="work-hero" data-animate="section">
            <div className="work-hero__kicker">{work.kicker}</div>
            <h1>{work.title}</h1>
            <p>{work.intro}</p>
            <div className="work-tags">
              {work.tags.map((tag) => (
                <span key={tag} className="work-tag">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section className="editorial-copy" data-animate="section">
            <h2>Project Overview</h2>
            {work.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          {work.sections.map((section) => (
            <section className="editorial-copy" data-animate="section" key={section.title}>
              <h2>{section.title}</h2>
              {section.body?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.list ? (
                <ul className="editorial-list">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          {work.gallery.map((item, index) => (
            <article className="gallery-card" data-animate="section" key={`${item.title}-${index}`}>
              <div className="gallery-card__header">
                <span className="gallery-card__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className={`gallery-card__media ${item.dark ? "is-dark" : ""}`}>
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="next-work">
        <div className="next-work__title">Next Work</div>
        <Link className="next-work__link" to={`/work/${nextWork.slug}`}>
          <span>{nextWork.title}</span>
          <span>{nextWork.title}</span>
        </Link>
      </section>
    </div>
  );
}

function GridHelper() {
  return (
    <div className="grid-helper" aria-hidden="true">
      {Array.from({ length: 12 }).map((_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

export default App;
