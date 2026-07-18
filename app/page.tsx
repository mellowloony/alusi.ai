import Nav from "../components/Nav";
import UwaLaunch from "../components/UwaLaunch";
import Cursor from "../components/Cursor";

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-clip">
      {/* Brand emblem — the crest, rendered monochrome so it reads as an
          atmospheric presence emerging from the black rather than a graphic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 -z-10 hidden -translate-y-1/2 translate-x-[38%] md:block"
      >
        <img
          src="/emblem-mask.png"
          alt=""
          width={520}
          height={766}
          className="h-[92vh] w-auto opacity-[0.3]"
        />
      </div>
      <Cursor />
      <Nav />
      <UwaLaunch />
    </div>
  );
}
