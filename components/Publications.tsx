import { data } from "@/lib/data";
import { Section } from "./Section";

export function Publications() {
  if (!data.publications.length) return null;
  return (
    <Section id="publications" title="Publications">
      <ol className="sec__body pubs">
        {data.publications.map((p) => (
          <li className="pub" key={p.title}>
            <div>
              <div className="pub__title">
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer">{p.title}</a>
                ) : (
                  p.title
                )}
              </div>
              <div className="pub__authors">{p.authors}</div>
              <div className="pub__venue mono">
                {p.venue}, {p.year}
                {p.note && <span className="pub__note"> · {p.note}</span>}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
