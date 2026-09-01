type PublicTable = "visits" | "waitlist";

export class PublicInsertError extends Error {
  code?: string;

  constructor(message: string, code?: string) {
    super(message);
    this.name = "PublicInsertError";
    this.code = code;
  }
}

/* Public pages only need two anonymous inserts. Calling the REST endpoint
   directly keeps the full Auth, Realtime, Storage and PostgREST clients out of
   the public-page bundle while preserving the database's existing RLS rules. */
export async function insertPublicRow(
  table: PublicTable,
  row: Record<string, unknown>,
  { keepalive = false }: { keepalive?: boolean } = {},
) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabasePublishableKey) {
    throw new PublicInsertError(
      "Missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and " +
        "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY (see .env.example).",
    );
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: supabasePublishableKey,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
    cache: "no-store",
    keepalive,
  });

  if (response.ok) return;

  const details = (await response.json().catch(() => null)) as {
    code?: string;
    message?: string;
  } | null;

  throw new PublicInsertError(
    details?.message || `Supabase insert failed with status ${response.status}.`,
    details?.code,
  );
}
