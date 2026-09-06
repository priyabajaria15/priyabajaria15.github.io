import { data } from "@/lib/data";
import { Section, Chips } from "./Section";

export function Skills() {
  if (!data.skills.length) return null;
  return (
    <Section id="skills" title="Technical skills">
      <div className="sec__body skills">
        {data.skills.map((g) => (
          <div className="skill" key={g.group}>
            <h3 className="skill__group">{g.group}</h3>
            <Chips items={g.items} />
          </div>
        ))}
      </div>
    </Section>
  );
}
