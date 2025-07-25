// File: app.config.js
export default {
  name: "ZiiOZ",
  slug: "ziioz",
  version: "1.0.0",
  sdkVersion: "50.0.0",
  platforms: ["android", "ios"],
  orientation: "portrait",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "cover",
    backgroundColor: "#ffffff",
  },
  updates: {
    enabled: false, // <--- force local mode
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ["**/*"],
};
