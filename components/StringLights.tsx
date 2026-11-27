"use client";

import { useEffect, useRef, useState } from "react";

// A string of lights threaded around whatever element this sits inside.
// The parent needs position: relative.

const PAD = 18; // how far the drawing reaches outside the parent
const INSET = 9; // the wire runs this far inside the drawing's edge
const RADIUS = 30;
const SPACING = 52;
const COLORS = ["#d9432a", "#f2b632", "#4fa3bd", "#8f7fc9", "#5fae6a"];

type Pt = { x: number; y: number; nx: number; ny: number };

// A point (and its outward direction) at distance d along a rounded rectangle, clockwise from the top left.
function pointAt(d: number, w: number, h: number, r: number): Pt {
    const sw = w - 2 * r;
    const sh = h - 2 * r;
    const arc = (Math.PI * r) / 2;
    const corner = (cx: number, cy: number, start: number, t: number): Pt => {
        const a = start + (t / arc) * (Math.PI / 2);
        return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a), nx: Math.cos(a), ny: Math.sin(a) };
    };
    const legs: [number, (t: number) => Pt][] = [
        [sw, (t) => ({ x: r + t, y: 0, nx: 0, ny: -1 })],
        [arc, (t) => corner(w - r, r, -Math.PI / 2, t)],
        [sh, (t) => ({ x: w, y: r + t, nx: 1, ny: 0 })],
        [arc, (t) => corner(w - r, h - r, 0, t)],
        [sw, (t) => ({ x: w - r - t, y: h, nx: 0, ny: 1 })],
        [arc, (t) => corner(r, h - r, Math.PI / 2, t)],
        [sh, (t) => ({ x: 0, y: h - r - t, nx: -1, ny: 0 })],
        [arc, (t) => corner(r, r, Math.PI, t)],
    ];
    let left = d;
    for (const [len, at] of legs) {
        if (left <= len) return at(left);
        left -= len;
    }
    return legs[0][1](0);
}

export default function StringLights() {
    const ref = useRef<SVGSVGElement>(null);
    const [size, setSize] = useState<{ w: number; h: number } | null>(null);

    useEffect(() => {
        const host = ref.current?.parentElement;
        if (!host) return;
        const measure = () => setSize({ w: host.offsetWidth + 2 * PAD, h: host.offsetHeight + 2 * PAD });
        measure();
        const watcher = new ResizeObserver(measure);
        watcher.observe(host);
        return () => watcher.disconnect();
    }, []);

    let wire = "";
    let bulbs: Pt[] = [];
    if (size) {
        const w = size.w - 2 * INSET;
        const h = size.h - 2 * INSET;
        const around = 2 * (w - 2 * RADIUS) + 2 * (h - 2 * RADIUS) + 2 * Math.PI * RADIUS;
        const count = Math.max(8, Math.round(around / SPACING));
        const step = around / count;
        bulbs = Array.from({ length: count }, (_, i) => {
            const p = pointAt(i * step + step / 2, w, h, RADIUS);
            return { ...p, x: p.x + INSET, y: p.y + INSET };
        });
        // The wire sags a little between each pair of lights.
        wire = bulbs
            .map((p, i) => {
                const q = bulbs[(i + 1) % count];
                const mx = (p.x + q.x) / 2;
                const my = (p.y + q.y) / 2 + 7;
                return `${i === 0 ? `M${p.x.toFixed(1)} ${p.y.toFixed(1)}` : ""} Q${mx.toFixed(1)} ${my.toFixed(1)} ${q.x.toFixed(1)} ${q.y.toFixed(1)}`;
            })
            .join("");
    }

    return (
        <svg ref={ref} className="fr-lights" aria-hidden="true" width={size?.w} height={size?.h}>
            {size && (
                <>
                    <path className="fr-lights-wire" d={wire} />
                    {bulbs.map((p, i) => {
                        const turn = (Math.atan2(p.ny, p.nx) * 180) / Math.PI - 90;
                        return (
                            <g key={i} transform={`translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) rotate(${turn.toFixed(1)})`}>
                                <rect className="fr-lights-cap" x={-3.5} y={-2} width={7} height={6} rx={1.5} />
                                <ellipse
                                    className="fr-lights-bulb"
                                    cx={0}
                                    cy={10}
                                    rx={5}
                                    ry={7}
                                    style={{ fill: COLORS[i % COLORS.length], color: COLORS[i % COLORS.length], animationDelay: `${((i * 7) % 10) * -0.42}s` }}
                                />
                            </g>
                        );
                    })}
                </>
            )}
        </svg>
    );
}
