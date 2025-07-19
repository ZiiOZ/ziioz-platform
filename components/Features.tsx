// components/Features.tsx
export default function Features() {
  return (
    <section className="px-6 py-12">
      <h3 className="text-2xl font-bold text-center mb-6">🚀 ZiiOZ Features</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <Feature title="ZiiPay" desc="Built-in monetization for creators — earn from your posts effortlessly." />
        <Feature title="ZiiShop" desc="Turn your profile into a creator storefront with physical & digital goods." />
        <Feature title="ZiiFlicks" desc="AI-powered short videos, designed for instant discovery and viral reach." />
      </div>
    </section>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border p-4 rounded-xl shadow">
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-sm text-gray-700">{desc}</p>
    </div>
  );
}
