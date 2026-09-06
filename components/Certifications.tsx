import { data } from "@/lib/data";
import { Section } from "./Section";

export function Certifications() {
  if (!data.certifications.length) return null;
  return (
    <Section id="certifications" title="Certifications">
      <ul className="sec__body certs">
        {data.certifications.map((c) => {
          const meta = [c.issuer, c.date, c.id && `ID ${c.id}`].filter(Boolean).join(" · ");
          return (
            <li className="cert" key={c.name}>
              <div className="cert__name">
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noopener noreferrer">{c.name}</a>
                ) : (
                  c.name
                )}
              </div>
              <div className="cert__meta mono">{meta}</div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
