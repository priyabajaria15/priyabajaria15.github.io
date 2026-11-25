/* eslint-disable @next/next/no-img-element */
// Plain <img>: next/image adds no value when the optimizer is disabled for
// static export, and this avoids a client boundary just for an onError fallback.
import { data } from "@/lib/data";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden />

      <div className="hero__text">
        <h1 className="hero__name">{data.name}</h1>
        <p className="hero__role mono">
          {data.role}
          {data.location && (
            <>
              <span className="dot">/</span>
              {data.location}
            </>
          )}
        </p>
        <p className="hero__tagline">{data.tagline}</p>

        <div className="hero__cta">
          <a className="btn btn--solid" href="#projects">See my projects</a>
          {data.resume && (
            <a className="btn" href={data.resume} download="PriyaBajaria_Resume.pdf">Download Resume</a>
          )}
          {data.links.email && (
            <a className="btn" href={`mailto:${data.links.email}`}>Email me</a>
          )}
        </div>
      </div>

      <figure className="hero__photo">
        <span className="bracket bracket--tl" aria-hidden />
        <span className="bracket bracket--br" aria-hidden />
        <img src={data.photo} alt={`Portrait of ${data.name}`} width={360} height={440} />
        <figcaption className="mono">{data.location}</figcaption>
      </figure>
    </section>
  );
}
