import FeedCard from '@/components/feedcard'; // ✅ lowercase



export default function HomePage() {
  const posts = [
    { title: '🚀 Launch Day', content: 'ZiiOZ is now live on Android!' },
    { title: '🎬 ZiiFlick is here', content: 'Upload and explore short-form videos' },
    { title: '🔒 Boost System', content: 'Secure your content and drive reactions' },
  ]

  return (
    <main style={{ padding: '2rem' }}>
      {posts.map((post, i) => (
        <FeedCard key={i} title={post.title} content={post.content} />
      ))}
    </main>
  )
}
