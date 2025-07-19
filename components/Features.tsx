export default function Features() {
  return (
    <section className="px-6 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        <Feature title="ZiiPay" desc="Monetize your content instantly." />
        <Feature title="ZiiShop" desc="Turn your feed into a storefront." />
        <Feature title="ZiiFlicks" desc="Share bite-sized, AI-powered videos." />
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
