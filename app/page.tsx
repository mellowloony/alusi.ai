import Cursor from "../components/Cursor";
import HomeLanding from "../components/HomeLanding";
import { preload } from "react-dom";

export default function Home() {
  preload("/alusi-hero-poster.webp?v=0901", {
    as: "image",
    type: "image/webp",
    fetchPriority: "high",
  });

  return (
    <>
      <Cursor />
      <HomeLanding />
    </>
  );
}
