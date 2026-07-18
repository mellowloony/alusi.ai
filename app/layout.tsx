import type { Metadata, Viewport } from "next";
import { Eczar, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

/* display: "optional" keeps LCP off the font network path: cold slow
   visits render the metric-adjusted fallback, everyone else gets the
   webfonts — and never a mid-view swap */
const eczar = Eczar({
  subsets: ["latin", "latin-ext"],
  variable: "--font-eczar",
  display: "optional",
});

const grotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-grotesk",
  display: "optional",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plex-mono",
  display: "optional",
});

const description =
  "Alusi is an AI-augmented creative agency. We build brand experiences, campaigns, and content systems — engineered with African cultural intelligence.";

export const metadata: Metadata = {
  metadataBase: new URL("https://alusi.ai"),
  title: "Alusi — AI-Augmented Creative Agency, Lagos",
  description,
  openGraph: {
    title: "Alusi — AI-Augmented Creative Agency, Lagos",
    description,
    url: "https://alusi.ai",
    siteName: "Alusi",
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alusi — AI-Augmented Creative Agency, Lagos",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${eczar.variable} ${grotesk.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body bg-ground text-ivory antialiased">
        {/* Marks the document as JS-capable before paint, so reveal
            animations never hide content when scripts are unavailable */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.dataset.js='1'",
          }}
        />
        {children}
      </body>
    </html>
  );
}
