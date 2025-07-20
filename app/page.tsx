import Image from 'next/image';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      flexWrap: 'wrap'
    }}>
      <Image
        src="/ziioz-preview.png"
        alt="ZiiOZ App Preview"
        width={450}
        height={450}
        style={{ marginRight: "3rem", borderRadius: "1rem" }}
      />
      <div style={{ maxWidth: '400px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Welcome to ZiiOZ</h1>
        <p style={{ marginTop: '1rem' }}>
          <strong>ZiiOZ</strong> is the next-gen platform where creators, communities,
          and trendsetters shape culture.
        </p>
        <p>
          Share, discover, and connect through fast-moving video, viral discussions,
          and real-time creative power.
        </p>
        <p><em>No noise. Just you, your moment, and the world.</em></p>
      </div>
    </div>
  );
}
