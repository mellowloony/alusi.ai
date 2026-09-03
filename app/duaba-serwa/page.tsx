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
  preload("/duaba-serwa/opening-film-poster.webp", {
    as: "image",
    type: "image/webp",
    fetchPriority: "high",
  });

  return <DuabaSerwaProposal />;
}
