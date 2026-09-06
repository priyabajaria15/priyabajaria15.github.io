import { data } from "@/lib/data";
import { Section, Chips } from "./Section";

export function Experience() {
  if (!data.experience.length) return null;

  return (
    <Section id="experience" title="Experience">
      <ol className="sec__body timeline">
        {data.experience.map((job) => {
          const current = /present|current/i.test(job.end);
          const meta = [`${job.start} – ${job.end}`, job.location].filter(Boolean).join(" · ");

          return (
            <li className={current ? "job job--now" : "job"} key={`${job.org}-${job.role}`}>
              <div className="job__head">
                <span className="job__role">{job.role}</span>
                {job.url ? (
                  <a className="job__org" href={job.url} target="_blank" rel="noopener noreferrer">
                    {job.org}
                  </a>
                ) : (
                  <span className="job__org">{job.org}</span>
                )}
              </div>

              <div className="job__meta mono">{meta}</div>

              <ul className="job__bullets">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <Chips items={job.tech ?? []} />
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
