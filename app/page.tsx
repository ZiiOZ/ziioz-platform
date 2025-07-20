import Image from 'next/image'

export default function Home() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '2rem' }}>
      <Image
        src="/ziioz-preview.png"
        alt="ZiiOZ App Preview"
        width={450}
        height={450}
        style={{ marginRight: "3rem", borderRadius: "1rem" }}
      />
      <div>
        <h1>Welcome to ZiiOZ</h1>
        <p><strong>ZiiOZ</strong> is the next-gen platform where creators, communities, and trendsetters shape culture.</p>
        <p>Share, discover, and connect through fast-moving video, viral discussions, and real-time creative power.</p>
        <p>No noise. Just you, your moment, and the world.</p>
      </div>
    </div>
  )
}
