import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/posts';
import './kape-corner.css';

export default function KapeCornerPage() {
  const kapePosts = posts.filter((p) => p.category === 'kape-corner');

  return (
    <main>
      <header className="kape-hero">
        <div className="container">
          <span className="script-text" style={{ color: '#F6C94E' }}>A quiet space</span>
          <h1>Kape Corner</h1>
          <p style={{ fontSize: '20px', fontWeight: 300, maxWidth: '600px', margin: '0 auto' }}>
            Conversations and reflections—like sitting in a quiet corner with a really good cup.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="kape-grid">
            {kapePosts.map((post) => (
              <article key={post.slug} className="coffee-card">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  className="coffee-img"
                  width={800}
                  height={500}
                />
                <span className="coffee-category">{post.tags}</span>
                <h3><Link href={`/kape-corner/${post.slug}`} style={{ color: 'inherit' }}>{post.title}</Link></h3>
                <p>{post.subtitle}</p>
                <Link href={`/kape-corner/${post.slug}`} className="read-more">Sit with this thought</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
