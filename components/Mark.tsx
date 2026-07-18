/* The visual motif: a grave accent above, a dot below — the marks of Ọ̀
   with the letter itself absent. Decorative only, hidden from readers. */
export default function Mark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex select-none flex-col items-center ${className}`}
    >
      <span className="font-display block h-[0.34em] overflow-visible text-[3.5rem] leading-[0.62] text-bronze">
        &#96;
      </span>
      <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-bronze" />
    </span>
  );
}

export function SectionHeader({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-6">
      <Mark />
      <h2 className="font-body text-xs tracking-[0.35em] uppercase">
        <span className="text-bronze">{index}</span>
        <span aria-hidden="true" className="text-ivory/55">
          {" "}
          —{" "}
        </span>
        <span className="text-ivory/70">{title}</span>
      </h2>
    </div>
  );
}
