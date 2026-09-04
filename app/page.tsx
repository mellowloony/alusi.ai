import Cursor from "../components/Cursor";
import HomeLanding from "../components/HomeLanding";
import { preload } from "react-dom";

export default function Home() {
  preload("/alusi-hero-poster-960.avif", {
    as: "image",
    type: "image/avif",
    fetchPriority: "high",
    imageSrcSet:
      "/alusi-hero-poster-640.avif 640w, /alusi-hero-poster-960.avif 960w, /alusi-hero-poster-1440.avif 1440w",
    imageSizes: "(max-width: 767px) calc(100vw - 40px), min(50vw, 752px)",
  });

  return (
    <>
      <Cursor />
      <HomeLanding />
    </>
  );
}
