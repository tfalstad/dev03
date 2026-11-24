"use client";

import { useEffect, useState } from "react";
import {
    contact,
    cv,
    frame,
    hero,
    proof,
    research,
    speaking,
    story,
    together,
    work,
    workshop,
} from "../content/site";

type Build = {
    id: string;
    title: string;
    tag: string;
    group: "work" | "personal";
    summary: string;
    art: { src: string; fit: string; bg: string };
    role: string;
    body: string[];
    stats: { figure: string; label: string }[];
    statsNote: string;
    link: null | { href: string; label: string };
};

// Mixta first (it is current), then the other shipped products, then personal projects.
const shipped = [work.items[2], work.items[0], work.items[1]];
const builds: Build[] = [
    ...shipped.map((w) => ({
        id: w.title,
        title: w.title === "Creative Technologies" ? "Sirius" : w.title,
        tag: w.title === "Creative Technologies" ? "Federal" : w.tag,
        group: "work" as const,
        summary: w.summary,
        art: w.art,
        role: w.title === "Creative Technologies" ? `${w.role} at Creative Technologies` : w.role,
        body: w.body,
        stats: w.stats,
        statsNote: w.statsNote,
        link: w.link,
    })),
    ...workshop.items.map((i) => ({
        id: i.title,
        title: i.title,
        tag: i.status,
        group: "personal" as const,
        summary: i.summary,
        art: i.art,
        role: "Personal project",
        body: [i.body],
        stats: [],
        statsNote: "",
        link: i.href ? { href: i.href, label: `About ${i.title}` } : null,
    })),
];

const MailIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3.5 7l8.5 6 8.5-6" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
        <rect x="4" y="9.5" width="3.4" height="10.5" />
        <circle cx="5.7" cy="5.6" r="2" />
        <path d="M10.4 9.5h3.2v1.5c.6-1 1.8-1.8 3.4-1.8 2.7 0 3.6 1.7 3.6 4.4V20h-3.4v-5.6c0-1.3-.4-2.2-1.6-2.2s-1.8.9-1.8 2.2V20h-3.4z" />
    </svg>
);

const groups = [
    { id: "work" as const, label: frame.workLabel },
    { id: "personal" as const, label: frame.personalLabel },
];

type Tab = "cv" | "advisory";

export default function Frame() {
    const [tab, setTab] = useState<Tab>("cv");
    const [openId, setOpenId] = useState<string | null>(null);
    const open = builds.find((b) => b.id === openId) || null;

    // A link such as /#talespin or /#cv opens that project or tab.
    useEffect(() => {
        const hash = window.location.hash.slice(1).toLowerCase();
        if (!hash) return;
        if (hash in frame.tabs) setTab(hash as Tab);
        const hit = builds.find((b) => b.title.toLowerCase().replace(/\s+/g, "-") === hash);
        if (hit) setOpenId(hit.id);
    }, []);

    return (
        <div className="fr">
            <div className={`fr-stage${open ? " has-open" : ""}`}>
                <div className="fr-scene" aria-hidden="true" />

                <header className="fr-slab fr-title">
                    <h1>{hero.headline}</h1>
                    <p>{hero.lede}</p>
                </header>

                <section className="fr-dock" aria-label={frame.dockLabel}>
                    {open && (
                        <article className="fr-slab fr-detail" data-group={open.group}>
                            <div className="fr-detail-head">
                                <div>
                                    <h2>{open.title}</h2>
                                    <p className="fr-role">{open.role}</p>
                                </div>
                                <button className="fr-key fr-key-small" onClick={() => setOpenId(null)}>
                                    Close
                                </button>
                            </div>
                            <div className="fr-well fr-detail-body">
                                {open.body.map((p) => (
                                    <p key={p}>{p}</p>
                                ))}
                                {open.stats.length > 0 && (
                                    <div className="fr-stats">
                                        {open.stats.map((s) => (
                                            <div key={s.label} className="fr-stat">
                                                <b>{s.figure}</b>
                                                <span>{s.label}</span>
                                            </div>
                                        ))}
                                        {open.statsNote && <p className="fr-note">{open.statsNote}</p>}
                                    </div>
                                )}
                            </div>
                            {open.link && (
                                <a className="fr-key fr-key-small fr-detail-link" href={open.link.href} target={open.link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                                    {open.link.label}
                                </a>
                            )}
                        </article>
                    )}
                    <div className="fr-groups">
                        {groups.map((g) => (
                            <div key={g.id} className="fr-group" data-group={g.id}>
                                <span className="fr-plate">{g.label}</span>
                                <div className="fr-tiles">
                                    {builds.filter((b) => b.group === g.id).map((b) => (
                                        <button
                                            key={b.id}
                                            className={`fr-tile${openId === b.id ? " is-on" : ""}`}
                                            aria-pressed={openId === b.id}
                                            onClick={() => setOpenId(openId === b.id ? null : b.id)}
                                        >
                                            <span className="fr-tile-art" style={{ background: b.art.bg }}>
                                                <img src={b.art.src} alt="" style={{ objectFit: b.art.fit as "cover" | "contain" }} />
                                            </span>
                                            <span className="fr-tile-name">{b.title}</span>
                                            <span className="fr-tile-sum">{b.summary}</span>
                                            <span className="fr-tile-tag">{b.tag}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <aside className="fr-panel">
                <div className="fr-id">
                    <img src="/images/portrait.jpg" alt={story.portraitAlt} width={84} height={84} />
                    <div>
                        <p className="fr-name">{hero.name}</p>
                        {hero.roles.map((r) => (
                            <p key={r} className="fr-id-role">{r}</p>
                        ))}
                    </div>
                </div>

                <div className="fr-status">
                    <span className="fr-lamp" aria-hidden="true" />
                    {frame.status}
                </div>

                <div className="fr-tabs" role="tablist">
                    {(Object.keys(frame.tabs) as Tab[]).map((t) => (
                        <button key={t} role="tab" aria-selected={tab === t} className={`fr-key fr-tab${tab === t ? " is-on" : ""}`} onClick={() => setTab(t)}>
                            {frame.tabs[t]}
                        </button>
                    ))}
                </div>

                <div className="fr-body fr-well" role="tabpanel">
                    {tab === "cv" && (
                        <>
                            <div className="fr-proof">
                                {proof.map((p) => (
                                    <div key={p.figure} className="fr-proof-tile">
                                        <b>{p.figure}</b>
                                        <span>{p.label}</span>
                                    </div>
                                ))}
                            </div>
                            <h3 className="fr-h">{cv.experienceLabel}</h3>
                            <ul className="fr-rows">
                                {cv.experience.map((e) => (
                                    <li key={e.title + e.org}>
                                        <span className="fr-row-dates">{e.dates}</span>
                                        <b>{e.title}</b>
                                        <span>{e.org}</span>
                                    </li>
                                ))}
                            </ul>
                            <h3 className="fr-h">{cv.researchLabel}</h3>
                            <ul className="fr-rows">
                                {research.rows.map((r) => (
                                    <li key={r.where}>
                                        <span className="fr-row-dates">{r.what}</span>
                                        {r.href ? (
                                            <a className="fr-row-link" href={r.href} target="_blank" rel="noopener noreferrer">{r.where}</a>
                                        ) : (
                                            <span>{r.where}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <h3 className="fr-h">{speaking.label}</h3>
                            <ul className="fr-rows">
                                {speaking.rows.map((r) => (
                                    <li key={r.where}>
                                        <span className="fr-row-dates">{r.when}</span>
                                        <span>{r.where}</span>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    {tab === "advisory" && (
                        <>
                            <p className="fr-lead">{together.intro}</p>
                            {together.ways.map((w) => (
                                <div key={w.title} className="fr-way">
                                    <b>{w.title}</b>
                                    <span>{w.body}</span>
                                </div>
                            ))}
                            <p>{together.current}</p>
                            <p className="fr-note">{together.note}</p>
                        </>
                    )}
                </div>

                <div className="fr-tools">
                    <a className="fr-key fr-key-signal" href={`mailto:${contact.email}`}>
                        <MailIcon />
                        Email
                    </a>
                    <a className="fr-key" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                        LinkedIn
                    </a>
                </div>
            </aside>
        </div>
    );
}
