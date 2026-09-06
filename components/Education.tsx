import { data } from "@/lib/data";
import { Section, Chips } from "./Section";

export function Education() {
  if (!data.education.length) return null;
  return (
    <Section id="education" title="Education">
      <div className="sec__body edu">
        {data.education.map((e) => (
          <div className="edu__item" key={`${e.school}-${e.degree}`}>
            <div className="edu__when mono">
              {e.start} – {e.end}
            </div>
            <div>
              <div className="edu__degree">{e.degree}</div>
              <div className="edu__school">{e.school}</div>
              {e.detail && <p className="edu__detail">{e.detail}</p>}
              <Chips items={e.courses ?? []} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
