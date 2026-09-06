"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { data } from "@/lib/data";
import { sections, activeLinks, LINK_LABELS, hrefFor } from "@/lib/sections";
import { useTheme } from "./ThemeProvider";

interface Command {
  label: string;
  hint: string;
  run: () => void;
}

export function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { toggle } = useTheme();
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Command[] = useMemo(() => {
    const list: Command[] = sections.map((s) => ({
      label: `Go to ${s.label}`,
      hint: "section",
      run: () => {
        document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
      },
    }));

    activeLinks.forEach(([k, url]) => {
      list.push({
        label: `Open ${LINK_LABELS[k] ?? k}`,
        hint: "link",
        run: () => {
          if (k === "email") window.location.href = hrefFor(k, url);
          else window.open(url, "_blank", "noopener");
        },
      });
    });

    if (data.links.email) {
      list.push({
        label: "Copy email address",
        hint: "action",
        run: () => {
          navigator.clipboard.writeText(data.links.email!).catch(() => {});
        },
      });
    }

    if (data.resume) {
      list.push({
        label: "Download Resume",
        hint: "file",
        run: () => window.open(data.resume!, "_blank", "noopener"),
      });
    }

    list.push({ label: "Switch theme", hint: "action", run: toggle });
    return list;
  }, [toggle]);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? commands.filter((c) => c.label.toLowerCase().includes(q)) : commands;
  }, [commands, query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setCursor(0);
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => setCursor(0), [query]);

  if (!open) return null;

  function choose(i: number) {
    const cmd = shown[i];
    onClose();
    cmd?.run();
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, shown.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      choose(cursor);
    } else if (e.key === "Escape") {
      onClose();
    }
  }

  return (
    <div
      className="palette"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="palette__box" role="dialog" aria-modal="true" aria-label="Command palette">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Jump to a section or link…"
          autoComplete="off"
          spellCheck={false}
        />

        <ul role="listbox">
          {shown.length === 0 ? (
            <li aria-selected={false}>
              <span>No matches</span>
            </li>
          ) : (
            shown.map((c, i) => (
              <li
                key={c.label}
                role="option"
                aria-selected={i === cursor}
                onMouseEnter={() => setCursor(i)}
                onClick={() => choose(i)}
              >
                <span>{c.label}</span>
                <span className="pk">{c.hint}</span>
              </li>
            ))
          )}
        </ul>

        <div className="palette__hint mono">
          <kbd>↑</kbd>
          <kbd>↓</kbd> move <kbd>↵</kbd> open <kbd>esc</kbd> close
        </div>
      </div>
    </div>
  );
}
