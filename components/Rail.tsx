"use client";

import { useEffect, useRef, useState } from "react";
import { data } from "@/lib/data";
import { sections, activeLinks, LINK_LABELS, hrefFor } from "@/lib/sections";
import { LinkIcon, MenuIcon } from "./icons";
import { ThemeIconButton } from "./ThemeProvider";

export function Rail({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [current, setCurrent] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const markerRef = useRef<HTMLSpanElement>(null);

  // Highlight whichever section occupies the middle band of the viewport.
  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setCurrent(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  // Slide the accent marker to the active link.
  useEffect(() => {
    const marker = markerRef.current;
    const nav = navRef.current;
    if (!marker || !nav) return;

    const link = nav.querySelector<HTMLElement>(`[data-for="${current}"]`);
    if (link) {
      marker.style.opacity = "1";
      marker.style.transform = `translateY(${link.offsetTop + link.offsetHeight / 2 - 11}px)`;
    } else {
      marker.style.opacity = "0";
    }
  }, [current]);

  // Lock background scrolling while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <aside className="rail" data-open={menuOpen} id="rail">
        <div className="rail__top">
          <a className="rail__id" href="#top" onClick={() => setMenuOpen(false)}>
            <span className="rail__name">{data.name}</span>
            <span className="rail__role mono">{data.role}</span>
          </a>
        </div>

        <nav className="rail__nav" ref={navRef} aria-label="Sections">
          <span className="rail__marker" ref={markerRef} aria-hidden />
          {sections.map((s) => (
            <a
              key={s.id}
              className="rail__link"
              href={`#${s.id}`}
              data-for={s.id}
              aria-current={current === s.id ? "true" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="rail__bottom">
          <div className="rail__social">
            {activeLinks.map(([k, url]) => (
              <a
                key={k}
                href={hrefFor(k, url)}
                aria-label={LINK_LABELS[k] ?? k}
                title={LINK_LABELS[k] ?? k}
                {...(k === "email" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              >
                <LinkIcon name={k} />
              </a>
            ))}
          </div>

          <button className="rail__key mono" type="button" onClick={onOpenPalette}>
            <span>Jump to…</span>
            <kbd>⌘K</kbd>
          </button>
        </div>
      </aside>

      <header className="topbar">
        <span className="topbar__name">{data.name}</span>
        <div className="topbar__actions">
          <ThemeIconButton />
          <button
            className="iconbtn"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      {menuOpen && <div className="scrim" onClick={() => setMenuOpen(false)} />}
    </>
  );
}
