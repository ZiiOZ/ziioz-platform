import styles from './landing.module.css';

export default function LandingPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12 bg-white text-black">
      <div className="flex justify-center items-center">
        <img
          src="/ziioz-preview.png"
          alt="ZiiOZ Preview"
          className={styles.pinchedImage}
        />
      </div>
    </main>
  );
}
