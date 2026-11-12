"use client";

import { useState } from "react";

type Status = "idle" | "copied" | "failed";

/** Reserveløsning for nettlesere der Clipboard API ikke er tilgjengelig. */
function legacyCopy(value: string) {
  const el = document.createElement("textarea");
  el.value = value;
  el.setAttribute("readonly", "");
  el.style.position = "fixed";
  el.style.opacity = "0";
  document.body.appendChild(el);
  el.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(el);
  return ok;
}

/** Knapp som kopierer en tekst (f.eks. en e-postadresse) til utklippstavlen. */
export default function CopyButton({ value, label = "Kopier" }: { value: string; label?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function copy() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(value);
      ok = true;
    } catch {
      try {
        ok = legacyCopy(value);
      } catch {
        ok = false;
      }
    }
    setStatus(ok ? "copied" : "failed");
    setTimeout(() => setStatus("idle"), 2500);
  }

  const text =
    status === "copied" ? "Kopiert ✓" : status === "failed" ? "Kunne ikke kopiere" : label;

  return (
    <button type="button" onClick={copy} className="btn-ghost">
      <span aria-live="polite">{text}</span>
    </button>
  );
}
