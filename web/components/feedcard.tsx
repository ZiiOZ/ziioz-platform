// web/components/FeedCard.tsx
export default function FeedCard({ title, content }: { title: string, content: string }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '1rem',
      marginBottom: '1rem',
      maxWidth: '500px',
      marginInline: 'auto',
      backgroundColor: '#fff',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    }}>
      <h3 style={{ margin: 0 }}>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
