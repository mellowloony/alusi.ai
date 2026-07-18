import Waitlist from "./Waitlist";
import Showreel from "./Showreel";

/* Ụ̀wà — dot-below U + combining grave, then w + à. Explicit code points
   keep the combining marks safe from re-encoding. */
const UWA = "\u1EE4\u0300w\u00E0";
const UWA_WORDMARK = "\u1EE4\u0300w\u00E0 Avatars";

export default function UwaLaunch() {
  return (
    <main className="flex min-h-0 flex-1 flex-col px-6 pb-8 md:px-10 md:pb-12">
      {/* mt-auto bottom-anchors the block (per the reference) while resolving
          to 0 when content is tall — so short viewports scroll instead of
          clipping the waitlist. */}
      <div className="mt-auto flex flex-col gap-8 md:gap-10">
        {/* Video + concept. Video sits in the left half, per the reference;
            the description and waitlist fill the right half. */}
        <div className="flex flex-col gap-8 md:grid md:grid-cols-12 md:items-center md:gap-10">
          {/* Autoplaying, looping showreel */}
          <div className="rise bg-panel border-ivory/10 relative aspect-video w-full overflow-hidden rounded-[10px] border md:col-span-6">
            <Showreel />
          </div>

          <div
            className="rise md:col-span-5 md:col-start-8"
            style={{ animationDelay: "120ms" }}
          >
            <h2 className="font-display text-2xl leading-snug">
              {UWA} Avatars — intelligence for creator partnerships.
            </h2>
            <p className="text-ivory/75 font-mono mt-5 text-xs leading-relaxed">
              Licensed, AI-rendered creator avatars enable measurable,
              repeatable campaigns with greater control, speed, and clarity.
            </p>
            <p className="text-ivory/75 font-mono mt-4 text-xs leading-relaxed">
              Predict outcomes, compare creator opportunities, and benchmark
              spend against Meta—before you invest.
            </p>
            <Waitlist />
          </div>
        </div>

        {/* Wordmark — flush left, matched to the video's width. Same grid +
            gap as the row above so col-span-6 aligns exactly. */}
        <div className="md:grid md:grid-cols-12 md:gap-10">
          <h1 className="rise md:col-span-6" style={{ animationDelay: "240ms" }}>
            <img
              src="/uwa-avatars-wordmark.png"
              alt={UWA_WORDMARK}
              width={1600}
              height={254}
              className="h-auto w-[86%] select-none md:w-full"
            />
          </h1>
        </div>
      </div>
    </main>
  );
}
