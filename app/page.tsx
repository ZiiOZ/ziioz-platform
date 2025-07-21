// File: app/page.tsx

import Image from 'next/image';
import styles from './landing.module.css';

export default function LandingPage() {
  return (
    <main className={styles.main}>
      <div className={styles.imageWrapper}>
        <Image
          src="/ziioz-preview.png"
          alt="ZiiOZ Preview"
          layout="responsive"
          width={400}
          height={800}
          className={styles.previewImage}
        />
      </div>

      <div className={styles.storeButtons}>
        <Image src="/appstore-badge.png" alt="App Store" width={180} height={60} />
        <Image src="/googleplay-badge.png" alt="Google Play" width={180} height={60} />
      </div>

      <div className={styles.settingsLink}>
        <a href="/settings">Settings</a>
      </div>
    </main>
  );
}
