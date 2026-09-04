import type { Metadata } from "next";
import Cursor from "../../components/Cursor";
import UwaLanding from "../../components/UwaLanding";

const description =
  "In Igbo, ùwà means world. Ùwà brings creators and brands into new worlds, expanding how stories can be imagined, experienced and brought to life.";

export const metadata: Metadata = {
  title: "Ùwà — The Technology Layer for Creator Partnerships",
  description,
  alternates: {
    canonical: "https://alusiai.com/uwa",
  },
  openGraph: {
    title: "Ùwà — The Technology Layer for Creator Partnerships",
    description,
    url: "https://alusiai.com/uwa",
    siteName: "Alusi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ùwà — The Technology Layer for Creator Partnerships",
    description,
  },
};

export default function UwaPage() {
  return (
    <>
      <Cursor />
      <UwaLanding />
    </>
  );
}
