"use client";

import { useState } from "react";
import { data } from "@/lib/data";
import { activeLinks, LINK_LABELS } from "@/lib/sections";
import { Section } from "./Section";
import { LinkIcon, MailIcon } from "./icons";

type Status = { text: string; kind?: "ok" | "err" };

export function Contact() {
  const email = data.links.email ?? "";
  const [status, setStatus] = useState<Status>({ text: "" });
  const [sending, setSending] = useState(false);
  const [invalid, setInvalid] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const from = String(fd.get("email") ?? "").trim();
    const body = String(fd.get("message") ?? "").trim();

    const bad: string[] = [];
    if (!name) bad.push("name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from)) bad.push("email");
    if (!body) bad.push("message");
    setInvalid(bad);

    if (bad.length) {
      setStatus({ text: `Fill in your ${bad.join(", ")} and try again.`, kind: "err" });
      form.querySelector<HTMLElement>(`[name="${bad[0]}"]`)?.focus();
      return;
    }

    // No endpoint configured: hand off to the visitor's mail client.
    if (!data.contact.formEndpoint) {
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const mailBody = encodeURIComponent(`${body}\n\n— ${name} (${from})`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${mailBody}`;
      setStatus({ text: "Opening your mail app…", kind: "ok" });
      return;
    }

    setSending(true);
    setStatus({ text: "Sending…" });
    try {
      const res = await fetch(data.contact.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus({ text: "Message sent. I'll get back to you soon.", kind: "ok" });
    } catch {
      setStatus({ text: `That didn't send. Email me directly at ${email}.`, kind: "err" });
    } finally {
      setSending(false);
    }
  }

  const mark = (n: string) => (invalid.includes(n) ? { "aria-invalid": true as const } : {});

  return (
    <Section id="contact" title={data.contact.heading} last>
      <div className="sec__body contact">
        <div className="contact__side">
          <p>{data.contact.blurb}</p>

          {email && (
            <button className="copy mono" type="button" onClick={copyEmail}>
              <MailIcon />
              <span>{copied ? "Copied" : email}</span>
            </button>
          )}

          <div className="contact__links">
            {activeLinks
              .filter(([k]) => k !== "email")
              .map(([k, url]) => (
                <a key={k} href={url} target="_blank" rel="noopener noreferrer">
                  <LinkIcon name={k} />
                  {LINK_LABELS[k] ?? k}
                </a>
              ))}
          </div>
        </div>

        <form className="form" onSubmit={onSubmit} noValidate>
          <label>
            Name
            <input name="name" type="text" autoComplete="name" {...mark("name")} />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" {...mark("email")} />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} {...mark("message")} />
          </label>
          <button className="btn btn--solid" type="submit" disabled={sending}>
            {sending ? "Sending…" : "Send message"}
          </button>
          <p className="form__status" data-kind={status.kind} role="status" aria-live="polite">
            {status.text}
          </p>
        </form>
      </div>
    </Section>
  );
}
