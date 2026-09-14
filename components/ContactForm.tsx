"use client";

import { useState, type FormEvent } from "react";
import { insertPublicRow } from "../lib/supabase/public-insert";
import styles from "./HomeLanding.module.css";

type Status = "idle" | "submitting" | "success" | "error";

function Arrow() {
  return (
    <svg aria-hidden="true" className={styles.arrow} viewBox="0 0 16 16" fill="none">
      <path d="M3 13 13 3M5 3h8v8" />
    </svg>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const brandName = String(data.get("brand_name") ?? "").trim();
    const objective = String(data.get("objective") ?? "").trim();
    const projectDetails = String(data.get("project_details") ?? "").trim();

    setStatus("submitting");

    try {
      await insertPublicRow("project_briefs", {
        name,
        email,
        brand: brandName,
        budget: "Not collected",
        timeline: "Not collected",
        launching: [
          `Objective: ${objective}`,
          projectDetails ? `Project details: ${projectDetails}` : null,
          `Source: ${window.location.pathname}`,
        ]
          .filter(Boolean)
          .join("\n\n"),
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.contactSuccess} role="status">
        <p>Thank you. Your brief is with us.</p>
        <span>We’ll review it and get back to you shortly.</span>
      </div>
    );
  }

  return (
    <form
      className={styles.contactForm}
      onSubmit={handleSubmit}
    >
      <div className={styles.contactFields}>
        <label className={styles.contactField} htmlFor="contact-name">
          <span>Name</span>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={80}
            required
          />
        </label>

        <label className={styles.contactField} htmlFor="contact-email">
          <span>Email</span>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={254}
            required
          />
        </label>

        <label className={styles.contactField} htmlFor="contact-brand">
          <span>Brand / organisation</span>
          <input
            id="contact-brand"
            name="brand_name"
            type="text"
            autoComplete="organization"
            maxLength={120}
            required
          />
        </label>

        <label className={styles.contactField} htmlFor="contact-objective">
          <span>Project objective</span>
          <select id="contact-objective" name="objective" defaultValue="" required>
            <option value="" disabled>
              Select one
            </option>
            <option value="Brand strategy">Brand strategy</option>
            <option value="Brand identity">Brand identity</option>
            <option value="Campaign development">Campaign development</option>
            <option value="Film and content production">Film and content production</option>
            <option value="Media buying">Media buying</option>
            <option value="AI and technology">AI and technology</option>
            <option value="Other">Other</option>
          </select>
        </label>

      </div>

      <label className={`${styles.contactField} ${styles.contactBrief}`} htmlFor="contact-details">
        <span>Tell us about the project</span>
        <textarea
          id="contact-details"
          name="project_details"
          rows={3}
          maxLength={1200}
          placeholder="What are you looking to achieve?"
          required
        />
      </label>

      <button type="submit" className={styles.contactSubmit} disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send your brief"} <Arrow />
      </button>

      <p className={styles.contactStatus} aria-live="polite">
        {status === "error"
          ? "We couldn’t send your brief. Please try again or email hello@alusiai.com."
          : ""}
      </p>
    </form>
  );
}
