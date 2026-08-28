import type { Metadata } from "next";
import Cursor from "../../components/Cursor";
import ObiageriLanding from "../../components/ObiageriLanding";

const description =
  "Alusi's creative strategy for Obiageri: a contemporary Nigerian fashion house shaped by inherited taste, lineage, ceremony and access.";

export const metadata: Metadata = {
  title: "Obiageri — Creative Strategy by Alusi",
  description,
  alternates: {
    canonical: "https://alusiai.com/obiageri",
  },
  openGraph: {
    title: "Obiageri — Creative Strategy by Alusi",
    description,
    url: "https://alusiai.com/obiageri",
    siteName: "Alusi",
    type: "website",
    images: [
      {
        url: "https://alusiai.com/obiageri/hero.webp",
        width: 1672,
        height: 941,
        alt: "Obiageri figures outside a Lagos heritage home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obiageri — Creative Strategy by Alusi",
    description,
    images: ["https://alusiai.com/obiageri/hero.webp"],
  },
};

export default function ObiageriPage() {
  return (
    <>
      <Cursor />
      <ObiageriLanding />
    </>
  );
}
