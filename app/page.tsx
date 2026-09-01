import Cursor from "../components/Cursor";
import HomeLanding from "../components/HomeLanding";
import { preload } from "react-dom";

export default function Home() {
  preload("/alusi-hero-poster.avif?v=0829", {
    as: "image",
    type: "image/avif",
    fetchPriority: "high",
  });

  return (
    <>
      <Cursor />
      <HomeLanding />
    </>
  );
}
