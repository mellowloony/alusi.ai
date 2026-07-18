import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";

export const alt = "Alusi — AI is the loom. Culture is the thread.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const eczar = await readFile(join(process.cwd(), "assets/eczar-og.ttf"));
  const lockup = await readFile(
    join(process.cwd(), "public/alusi-wordmark.png"),
  );
  const lockupSrc = `data:image/png;base64,${lockup.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 84px",
          backgroundColor: "#000000",
          fontFamily: "Eczar",
        }}
      >
        <img
          src={lockupSrc}
          width={520}
          height={208}
          style={{ marginBottom: 40 }}
        />
        <div
          style={{
            width: 1032,
            height: 1,
            backgroundColor: "#B08D57",
            opacity: 0.5,
            marginBottom: 40,
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 34, color: "#EDE6DA" }}>
            AI is the loom. Culture is the thread.
          </div>
          <div style={{ fontSize: 22, color: "#B08D57", letterSpacing: 6 }}>
            LAGOS · CULTURE-TECH
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Eczar",
          data: eczar,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
