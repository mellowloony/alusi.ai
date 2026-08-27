"use client";

import type { FormEvent } from "react";
import styles from "./HomeLanding.module.css";

const CONTACT_EMAIL = "hello@alusiai.com";

function Arrow() {
  return (
    <svg aria-hidden="true" className={styles.arrow} viewBox="0 0 16 16" fill="none">
      <path d="M3 13 13 3M5 3h8v8" />
    </svg>
  );
}

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}`);

    window.location.assign(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`);
  }

  return (
    <form
      action={`mailto:${CONTACT_EMAIL}`}
      method="post"
      encType="text/plain"
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
      </div>

      <button type="submit" className={styles.contactSubmit}>
        Get in touch <Arrow />
      </button>
    </form>
  );
}
