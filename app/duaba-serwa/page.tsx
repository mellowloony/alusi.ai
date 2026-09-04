import type { Metadata } from "next";
import { preload } from "react-dom";
import DuabaSerwaProposal from "../../components/DuabaSerwaProposal";

const description =
  "A strategy, creative direction and integrated marketing proposal for Duaba Serwa, prepared by Alusi.";

export const metadata: Metadata = {
  title: "Duaba Serwa — Proposal by Alusi",
  description,
  alternates: {
    canonical: "https://alusiai.com/duaba-serwa",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Duaba Serwa — Proposal by Alusi",
    description,
    url: "https://alusiai.com/duaba-serwa",
    siteName: "Alusi",
    type: "website",
  },
};

export default function DuabaSerwaPage() {
  preload("/duaba-serwa/opening-film-poster-960.avif", {
    as: "image",
    type: "image/avif",
    fetchPriority: "high",
    imageSrcSet:
      "/duaba-serwa/opening-film-poster-640.avif 640w, /duaba-serwa/opening-film-poster-960.avif 960w, /duaba-serwa/opening-film-poster-1440.avif 1440w",
    imageSizes: "(max-width: 900px) calc(100vw - 40px), min(50vw, 752px)",
  });

  return <DuabaSerwaProposal />;
}
