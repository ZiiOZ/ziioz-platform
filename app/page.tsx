import Image from "next/image";

export default function Home() {
  return (
    <main style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", minHeight: "100vh" }}>
      {/* Left side: Phone image */}
      <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
        <Image
          src="/ae991b9a-440d-4b20-b77f-4ad50fd85fe8.png"
          alt="ZiiOZ App Preview"
          width={500}
          height={500}
          style={{ maxWidth: "100%", height: "auto", borderRadius: "16px" }}
        />
      </div>

      {/* Right side: About ZiiOZ */}
      <div style={{ flex: "1", paddingLeft: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Welcome to <span style={{ fontWeight: "bold" }}>ZiiOZ</span></h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
          ZiiOZ is the next-gen platform where creators, communities, and trendsetters shape culture.
        </p>
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          Share, discover, and connect through fast-moving video, viral discussions, and real-time creative power.
        </p>
        <p style={{ fontSize: "1.1rem" }}>
          No noise. Just you, your moment, and the world.
        </p>
      </div>
    </main>
  );
}
