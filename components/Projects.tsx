"use client";

/* eslint-disable @next/next/no-img-element */
import { useMemo, useState } from "react";
import { data } from "@/lib/data";
import type { Project } from "@/lib/types";
import { Section, Chips } from "./Section";

const tagsOf = (p: Project) => (p.tags?.length ? p.tags : p.tech ?? []);

export function Projects() {
  const [active, setActive] = useState("All");

  const tags = useMemo(
    () => ["All", ...Array.from(new Set(data.projects.flatMap(tagsOf))).sort()],
    []
  );

  const shown = useMemo(
    () => (active === "All" ? data.projects : data.projects.filter((p) => tagsOf(p).includes(active))),
    [active]
  );

  if (!data.projects.length) return null;

  return (
    <Section id="projects" title="Projects">
      <div className="sec__body">
        <div className="filters" role="group" aria-label="Filter projects by area">
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              className="filter"
              aria-pressed={t === active}
              onClick={() => setActive(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {shown.length === 0 ? (
          <p className="empty">No projects match that filter.</p>
        ) : (
          <div className="cards">
            {shown.map((p) => (
              <article
                className={p.featured && active === "All" ? "card card--wide" : "card"}
                key={p.title}
              >
                {p.image && <img className="card__img" src={p.image} alt="" loading="lazy" />}
                <h3 className="card__title">{p.title}</h3>
                <p className="card__blurb">{p.blurb}</p>
                <Chips items={p.tech ?? []} />

                {(p.demo || p.repo) && (
                  <div className="card__links">
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noopener noreferrer">Live demo</a>
                    )}
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noopener noreferrer">Source code</a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
