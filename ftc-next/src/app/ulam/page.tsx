import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/posts';
import '@/components/blog-list.css';

export default function UlamPage() {
  const ulamPosts = posts.filter((p) => p.category === 'ulam');

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <span className="script-text">Food Stories</span>
          <h1>Ulam</h1>
          <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
            Sharing the warmth of home-cooked meals, family recipes passed down, and the memories tied to every bite of Filipino cuisine.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container blog-layout">
          <div className="main-content">
            {ulamPosts.map((post) => (
              <article key={post.slug} className="blog-post">
                <div className="blog-post-img">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={1200}
                    height={400}
                  />
                </div>
                <span className="blog-post-meta">
                  {post.tags} &middot; {post.date} &middot; <span className="read-time">{post.readTime}</span>
                </span>
                <h2><Link href={`/ulam/${post.slug}`}>{post.title}</Link></h2>
                <p>{post.subtitle}</p>
                <Link href={`/ulam/${post.slug}`} className="btn btn-outline">Read Story</Link>
              </article>
            ))}
          </div>

          <aside className="sidebar">
            <div className="sidebar-widget">
              <h3>About Ulam</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-light)', marginBottom: 0 }}>
                &quot;Ulam&quot; represents more than just a main dish—it&apos;s the centerpiece of the Filipino dining table. Here, I share the recipes and stories that feed my soul.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
