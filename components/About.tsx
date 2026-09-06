import { data } from "@/lib/data";
import { Section } from "./Section";

export function About() {
  if (!data.about.length) return null;
  return (
    <Section id="about" title="About">
      <div className="sec__body about">
        {data.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
