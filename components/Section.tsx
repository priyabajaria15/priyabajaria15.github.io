/** Shared heading + spacing wrapper so every section stays consistent. */
export function Section({
  id, title, children, last = false,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section className={last ? "sec sec--last" : "sec"} id={id}>
      <h2 className="sec__h">{title}</h2>
      {children}
    </section>
  );
}

export function Chips({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="chips">
      {items.map((t) => (
        <span className="chip" key={t}>{t}</span>
      ))}
    </div>
  );
}
