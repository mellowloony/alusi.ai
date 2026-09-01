"use client";

import { useState, type FormEvent } from "react";
import {
  insertPublicRow,
  PublicInsertError,
} from "../lib/supabase/public-insert";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Waitlist({
  placeholder = "join the waitlist",
  submitLabel = "Submit",
  successMessage = "You’re on the list. We’ll reach out soon.",
  className = "",
  layout = "overlay",
}: {
  placeholder?: string;
  submitLabel?: string;
  successMessage?: string;
  className?: string;
  layout?: "overlay" | "split";
} = {}) {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const hasInput = email.trim().length > 0;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();
    if (!EMAIL.test(value)) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      await insertPublicRow("waitlist", { email: value });
      setStatus("success");
    } catch (error) {
      // 23505 = unique violation: this email already joined. Treat as success.
      if (error instanceof PublicInsertError && error.code === "23505") {
        setStatus("success");
        return;
      }
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className={`text-ivory font-mono mt-8 text-sm leading-relaxed ${className}`}>
        {successMessage}
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`mt-8 max-w-md ${className}`}
    >
      <div
        className={
          layout === "split"
            ? "grid grid-cols-[minmax(0,1fr)_auto] items-end gap-x-5 border-b border-ivory/25 transition-colors focus-within:border-ivory"
            : "relative"
        }
      >
        <input
          id="waitlist-email"
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder={placeholder}
          aria-label="Email address"
          aria-invalid={status === "error"}
          className={`text-ivory placeholder:text-ivory/40 font-mono min-w-0 w-full bg-transparent pb-3 text-sm outline-none ${
            layout === "split"
              ? "min-h-11 pr-0"
              : "border-ivory/25 focus:border-ivory border-b pr-16 transition-colors"
          }`}
        />
        <button
          type="submit"
          disabled={status === "submitting" || !hasInput}
          aria-hidden={!hasInput}
          tabIndex={hasInput ? 0 : -1}
          className={`text-ivory font-mono text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-60 ${
            layout === "split"
              ? "static min-h-11 whitespace-nowrap pb-3"
              : "absolute right-0 bottom-3"
          } ${
            hasInput
              ? "translate-x-0 opacity-100"
              : "pointer-events-none translate-x-2 opacity-0"
          }`}
        >
          {status === "submitting" ? "…" : submitLabel}
        </button>
      </div>
      {/* Reserved line keeps the layout from shifting when an error appears */}
      <p
        aria-live="polite"
        className={`text-ivory/70 font-mono mt-3 text-xs transition-opacity ${
          status === "error" ? "opacity-100" : "opacity-0"
        }`}
      >
        {status === "error" ? "Enter a valid email address." : " "}
      </p>
    </form>
  );
}
