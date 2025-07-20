import styles from './landing.module.css';

export default function LandingPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12 bg-white text-black">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center">
        {/* Left: Image */}
        <div className="flex justify-center w-full">
          <img
            src="/ziioz-preview.png"
            alt="ZiiOZ Preview"
            className={styles.pinchedImage}
          />
        </div>
      </div>
    </main>
  );
}
