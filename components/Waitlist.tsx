"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "../lib/supabase/client";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Waitlist() {
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
      const supabase = createClient();
      const { error } = await supabase.from("waitlist").insert({ email: value });
      // 23505 = unique violation: this email already joined. Treat as success.
      if (error && error.code !== "23505") throw error;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-ivory font-mono mt-8 text-sm leading-relaxed">
        You’re on the list. We’ll reach out soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-8 max-w-md">
      <div className="relative">
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
          placeholder="join the waitlist"
          aria-label="Email address"
          aria-invalid={status === "error"}
          className="border-ivory/25 text-ivory placeholder:text-ivory/40 focus:border-ivory font-mono w-full border-b bg-transparent pr-16 pb-3 text-sm transition-colors outline-none"
        />
        <button
          type="submit"
          disabled={status === "submitting" || !hasInput}
          aria-hidden={!hasInput}
          tabIndex={hasInput ? 0 : -1}
          className={`text-ivory font-mono absolute right-0 bottom-3 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-60 ${
            hasInput
              ? "translate-x-0 opacity-100"
              : "pointer-events-none translate-x-2 opacity-0"
          }`}
        >
          {status === "submitting" ? "…" : "Submit"}
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
