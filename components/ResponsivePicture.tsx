type ResponsivePictureProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  widths: number[];
  sizes: string;
  className?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "sync" | "async" | "auto";
  avif?: boolean;
  ariaHidden?: boolean;
};

function sourceSet(src: string, widths: number[], extension: string) {
  const stem = src.replace(/\.[^.]+$/, "");
  return widths.map((width) => `${stem}-${width}.${extension} ${width}w`).join(", ");
}

export default function ResponsivePicture({
  src,
  alt,
  width,
  height,
  widths,
  sizes,
  className,
  loading = "lazy",
  fetchPriority = "auto",
  decoding = "async",
  avif = true,
  ariaHidden = false,
}: ResponsivePictureProps) {
  return (
    <picture>
      {avif ? (
        <source
          type="image/avif"
          srcSet={sourceSet(src, widths, "avif")}
          sizes={sizes}
        />
      ) : null}
      <source
        type="image/webp"
        srcSet={sourceSet(src, widths, "webp")}
        sizes={sizes}
      />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        aria-hidden={ariaHidden || undefined}
      />
    </picture>
  );
}
