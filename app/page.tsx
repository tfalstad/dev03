import "./home.css";
import {
    closing,
    contact,
    hero,
    proof,
    research,
    story,
    together,
    work,
    workshop,
} from "../content/site";

const MailIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3.5 7l8.5 6 8.5-6" />
    </svg>
);

const CalendarIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
        <rect x="4" y="9.5" width="3.4" height="10.5" />
        <circle cx="5.7" cy="5.6" r="2" />
        <path d="M10.4 9.5h3.2v1.5c.6-1 1.8-1.8 3.4-1.8 2.7 0 3.6 1.7 3.6 4.4V20h-3.4v-5.6c0-1.3-.4-2.2-1.6-2.2s-1.8.9-1.8 2.2V20h-3.4z" />
    </svg>
);

function ContactKeys() {
    return (
        <div className="fd-keys">
            <a className="fd-key fd-key-signal" href={`mailto:${contact.email}`}>
                <MailIcon />
                <span>Email me</span>
            </a>
            <a className="fd-key" href={contact.calendar} target="_blank" rel="noopener noreferrer">
                <CalendarIcon />
                <span>Book a call</span>
            </a>
            <a className="fd-key" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
                <span>LinkedIn</span>
            </a>
        </div>
    );
}

export default function Home() {
    const person = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: hero.name,
        url: "https://falstad.dev",
        jobTitle: "Chief Product Officer",
        worksFor: { "@type": "Organization", name: "Mixta", url: "https://mixta.ai" },
        sameAs: [contact.linkedin],
    };

    return (
        <div className="fd">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
            {/* Review aid: ?look=photo or ?look=both shows the other looks. Remove once one is chosen. */}
            <script dangerouslySetInnerHTML={{ __html: "document.documentElement.dataset.look=new URLSearchParams(location.search).get('look')||'clay'" }} />
            <div className="fd-scene" aria-hidden="true" />

            <nav className="fd-rail" aria-label="Contact">
                <a className="fd-round fd-key-signal" href={`mailto:${contact.email}`} aria-label="Email Travis" title="Email">
                    <MailIcon />
                </a>
                <a className="fd-round" href={contact.calendar} target="_blank" rel="noopener noreferrer" aria-label="Book a call" title="Book a call">
                    <CalendarIcon />
                </a>
                <a className="fd-round" href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                    <LinkedInIcon />
                </a>
            </nav>

            <main className="fd-col">
                <header className="fd-card fd-hero">
                    <p className="fd-name">{hero.name}</p>
                    <ul className="fd-roles">
                        {hero.roles.map((r) => (
                            <li key={r} className="fd-chip">{r}</li>
                        ))}
                    </ul>
                    <h1>{hero.headline}</h1>
                    <p className="fd-lede">{hero.lede}</p>
                    <ContactKeys />
                </header>

                <section className="fd-proof" aria-label="Proof points">
                    {proof.map((p) => (
                        <div key={p.figure} className="fd-card fd-tile">
                            <p className="fd-figure">{p.figure}</p>
                            <p className="fd-tile-label">{p.label}</p>
                        </div>
                    ))}
                </section>

                <section className="fd-section">
                    <h2 className="fd-plate">{story.plate}</h2>
                    <div className="fd-card fd-story">
                        <img className="fd-portrait" src="/images/portrait.jpg" alt={story.portraitAlt} width={160} height={160} />
                        <div>
                            {story.paragraphs.map((p) => (
                                <p key={p}>{p}</p>
                            ))}
                            <p className="fd-aside">{story.aside}</p>
                        </div>
                    </div>
                </section>

                <section className="fd-section">
                    <h2 className="fd-plate">{work.plate}</h2>
                    {work.items.map((w) => (
                        <article key={w.title} className="fd-card fd-work">
                            <div className="fd-work-head">
                                <div>
                                    <h3>{w.title}</h3>
                                    <p className="fd-role">{w.role}</p>
                                </div>
                                <span className="fd-chip fd-chip-ink">{w.tag}</span>
                            </div>
                            {w.body.map((p) => (
                                <p key={p}>{p}</p>
                            ))}
                            {w.stats.length > 0 && (
                                <div className="fd-stats">
                                    {w.stats.map((s) => (
                                        <div key={s.label} className="fd-stat">
                                            <span className="fd-stat-figure">{s.figure}</span>
                                            <span className="fd-stat-label">{s.label}</span>
                                        </div>
                                    ))}
                                    {w.statsNote && <p className="fd-stats-note">{w.statsNote}</p>}
                                </div>
                            )}
                            {w.link && (
                                <a className="fd-key fd-key-small" href={w.link.href} target="_blank" rel="noopener noreferrer">
                                    {w.link.label}
                                </a>
                            )}
                        </article>
                    ))}
                    <p className="fd-card fd-earlier">{work.earlier}</p>
                </section>

                <section className="fd-section">
                    <h2 className="fd-plate">{together.plate}</h2>
                    <div className="fd-card">
                        <p className="fd-intro">{together.intro}</p>
                        <div className="fd-ways">
                            {together.ways.map((w) => (
                                <div key={w.title} className="fd-way">
                                    <h3>{w.title}</h3>
                                    <p>{w.body}</p>
                                </div>
                            ))}
                        </div>
                        <p>{together.current}</p>
                        <p className="fd-aside">{together.note}</p>
                    </div>
                </section>

                <section className="fd-section">
                    <h2 className="fd-plate">{workshop.plate}</h2>
                    <div className="fd-card">
                        <p className="fd-intro">{workshop.intro}</p>
                        <ul className="fd-bench">
                            {workshop.items.map((i) => (
                                <li key={i.title}>
                                    <div className="fd-bench-head">
                                        <h3>{i.href ? <a href={i.href}>{i.title}</a> : i.title}</h3>
                                        <span className="fd-chip">{i.status}</span>
                                    </div>
                                    <p>{i.body}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="fd-section">
                    <h2 className="fd-plate">{research.plate}</h2>
                    <div className="fd-card">
                        <dl className="fd-rows">
                            {research.rows.map((r) => (
                                <div key={r.where}>
                                    <dt>{r.what}</dt>
                                    <dd>{r.where}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                <footer className="fd-card fd-closing">
                    <h2>{closing.headline}</h2>
                    <p>{closing.body}</p>
                    <ContactKeys />
                    <p className="fd-foot">
                        {hero.name} | {closing.location}
                    </p>
                </footer>
            </main>
        </div>
    );
}
