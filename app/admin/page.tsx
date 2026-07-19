"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import type { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "../../lib/supabase/client";

type Stats = {
  total_visits: number;
  unique_visitors: number;
  today: number;
  last_7_days: number;
  signups: number;
  top_referrers: { source: string; n: number }[];
  daily: { day: string; n: number }[];
};

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="border-ivory/12 rounded-md border p-5">
      <p className="text-ivory/50 text-[11px] tracking-[0.2em] uppercase">
        {label}
      </p>
      <p className="text-ivory mt-2 text-3xl tabular-nums">{value}</p>
    </div>
  );
}

export default function AdminPage() {
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);
  const [checking, setChecking] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    let client: SupabaseClient;
    try {
      client = createClient();
    } catch {
      setError("Supabase is not configured.");
      setChecking(false);
      return;
    }
    setSupabase(client);
    client.auth.getSession().then(({ data }) => {
      setAuthed(!!data.session);
      setChecking(false);
    });
    const { data: sub } = client.auth.onAuthStateChange((_e, session) => {
      setAuthed(!!session);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const loadStats = useCallback(async (client: SupabaseClient) => {
    const { data, error } = await client.rpc("get_visit_stats");
    if (error) setError(error.message);
    else {
      setStats(data as Stats);
      setError(null);
    }
  }, []);

  useEffect(() => {
    if (authed && supabase) loadStats(supabase);
  }, [authed, supabase, loadStats]);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!supabase) return;
    setBusy(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    setBusy(false);
    if (error) setError(error.message);
  }

  async function handleLogout() {
    if (!supabase) return;
    await supabase.auth.signOut();
    setStats(null);
    setAuthed(false);
  }

  const maxDaily = stats?.daily.reduce((m, d) => Math.max(m, d.n), 0) ?? 0;

  return (
    <main className="font-mono mx-auto min-h-dvh w-full max-w-4xl px-6 py-16 md:px-10">
      <div className="flex items-baseline justify-between">
        <h1 className="text-ivory text-sm tracking-[0.3em] uppercase">
          Alusi · Admin
        </h1>
        {authed && (
          <button
            onClick={handleLogout}
            className="text-ivory/60 hover:text-ivory text-xs tracking-[0.2em] uppercase transition-colors"
          >
            Sign out
          </button>
        )}
      </div>

      {checking ? (
        <p className="text-ivory/40 mt-16 text-sm">Loading…</p>
      ) : !authed ? (
        <form onSubmit={handleLogin} className="mt-16 max-w-sm">
          <p className="text-ivory/60 text-sm leading-relaxed">
            Sign in to view visitor analytics.
          </p>
          <div className="mt-6 flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              autoComplete="email"
              aria-label="Email"
              className="border-ivory/20 text-ivory placeholder:text-ivory/40 focus:border-ivory border-b bg-transparent pb-2 text-sm outline-none"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              autoComplete="current-password"
              aria-label="Password"
              className="border-ivory/20 text-ivory placeholder:text-ivory/40 focus:border-ivory border-b bg-transparent pb-2 text-sm outline-none"
            />
            <button
              type="submit"
              disabled={busy}
              className="border-ivory/30 text-ivory hover:bg-ivory hover:text-ground mt-2 self-start border px-6 py-2 text-xs tracking-[0.2em] uppercase transition-colors disabled:opacity-60"
            >
              {busy ? "…" : "Sign in"}
            </button>
          </div>
          {error && <p className="text-ivory/80 mt-4 text-xs">{error}</p>}
        </form>
      ) : (
        <div className="mt-12">
          {error && <p className="text-ivory/80 mb-6 text-xs">{error}</p>}
          {!stats ? (
            <p className="text-ivory/40 text-sm">Loading stats…</p>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <Stat label="Unique visitors" value={stats.unique_visitors} />
                <Stat label="Total visits" value={stats.total_visits} />
                <Stat label="Signups" value={stats.signups} />
                <Stat
                  label="Signup rate"
                  value={
                    stats.unique_visitors > 0
                      ? `${((stats.signups / stats.unique_visitors) * 100).toFixed(1)}%`
                      : "—"
                  }
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                <Stat label="Today" value={stats.today} />
                <Stat label="Last 7 days" value={stats.last_7_days} />
              </div>

              <section className="mt-12 grid gap-10 md:grid-cols-2">
                <div>
                  <h2 className="text-ivory/50 text-[11px] tracking-[0.2em] uppercase">
                    Top referrers
                  </h2>
                  <ul className="mt-4 flex flex-col gap-2 text-sm">
                    {stats.top_referrers.length === 0 && (
                      <li className="text-ivory/40">No data yet</li>
                    )}
                    {stats.top_referrers.map((r) => (
                      <li
                        key={r.source}
                        className="text-ivory/80 flex justify-between gap-4"
                      >
                        <span className="truncate">{r.source}</span>
                        <span className="text-ivory tabular-nums">{r.n}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-ivory/50 text-[11px] tracking-[0.2em] uppercase">
                    Last 30 days
                  </h2>
                  <div className="mt-4 flex h-28 items-end gap-1">
                    {stats.daily.length === 0 && (
                      <span className="text-ivory/40 text-sm">No data yet</span>
                    )}
                    {stats.daily.map((d) => (
                      <div
                        key={d.day}
                        title={`${d.day}: ${d.n}`}
                        className="bg-ivory/70 hover:bg-ivory min-h-[2px] flex-1 rounded-sm transition-colors"
                        style={{
                          height: maxDaily > 0 ? `${(d.n / maxDaily) * 100}%` : "2px",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </section>

              <button
                onClick={() => supabase && loadStats(supabase)}
                className="text-ivory/50 hover:text-ivory mt-12 text-xs tracking-[0.2em] uppercase transition-colors"
              >
                Refresh
              </button>
            </>
          )}
        </div>
      )}
    </main>
  );
}
