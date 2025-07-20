import styles from './landing.module.css';

export default function LandingPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12 bg-white text-black">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Image */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src="/ziioz-preview.png"
            alt="ZiiOZ Preview"
            className={styles.pinchedImage}
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to ZiiOZ</h1>
          <p className="text-base md:text-lg leading-relaxed">
            ZiiOZ is the next-gen platform where creators, communities, and trendsetters shape culture.
            <br /><br />
            Share, discover, and connect through fast video, viral discussions, and real-time creator power.
            <br /><br />
            No noise. Just you, your moment, and the movement.
          </p>
        </div>
      </div>
    </main>
  );
}
