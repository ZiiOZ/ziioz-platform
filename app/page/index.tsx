export default function HomePage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <img 
        src="/logo-black.png" 
        alt="ZiiOZ Logo" 
        style={{ maxWidth: '160px', marginBottom: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
      />

      <div style={{ fontSize: '20px', marginBottom: '10px' }}>
        <strong>Trending</strong> <strong>Fresh</strong> <strong>Underground</strong>
      </div>

      <img 
        src="/mockup-iphone-ziioz-tabs.png" 
        alt="ZiiOZ App Preview" 
        style={{ width: '100%', maxWidth: '400px', display: 'block', margin: '40px auto' }} 
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />

      <p style={{ fontSize: '18px', color: '#444', marginTop: '20px' }}>
        Experience the next wave of social.
      </p>
    </div>
  );
}
