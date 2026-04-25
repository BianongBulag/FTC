import Image from 'next/image';
import Link from 'next/link';
import { posts, getPostBySlug, getRelatedPosts } from '@/lib/posts';
import { getCategoryStyle, getCategoryLabel } from '@/lib/categories';
import { notFound } from 'next/navigation';
import './post.css';

export function generateStaticParams() {
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const badgeStyle = getCategoryStyle(post.category);
  const categoryLabel = getCategoryLabel(post.category);
  const relatedPosts = getRelatedPosts(post.slug, post.category);

  return (
    <main>

      {/* Hero with title overlay */}
      <div className="article-hero" style={{ backgroundImage: `url('${post.imageUrl}')` }}>
        <div className="article-hero-overlay">
          <span className="card-badge" style={{ background: badgeStyle.bg, color: badgeStyle.text }}>
            {categoryLabel}
          </span>
          <div className="article-hero-content">
            <span className="post-metadata">
              {post.date} &middot; {post.readTime}
            </span>
            <h1>{post.title}</h1>
            <p className="subtitle">{post.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Back nav + ornament */}
      <div className="article-prelude">
        <Link href={`/${post.category}`} className="back-link">
          ← Back to {categoryLabel}
        </Link>
        <div className="article-ornament" aria-hidden="true">
          <span className="ornament-gem">◆</span>
        </div>
      </div>

      {/* Article body */}
      <article className="article-body">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="tags-row">
          {post.tags.split(',').map((tag) => (
            <Link key={tag.trim()} href={`/${post.category}`} className="tag-pill">
              {tag.trim()}
            </Link>
          ))}
        </div>

        <div className="author-card">
          <div className="author-avatar-img">
            <Image
              src="/images/Kamusta.jpg"
              alt="Adryenne"
              width={60}
              height={60}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
          <div className="author-info">
            <h4>Written by Adryenne</h4>
            <p>Curator of Feed the Curious. Sharing the meals that move me and the cultural stories deeply embedded in Filipino cuisine.</p>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <p className="related-header">
            More from <span>{categoryLabel}</span>
          </p>
          <div className="related-grid">
            {relatedPosts.map((p) => (
              <Link key={p.slug} href={`/${p.category}/${p.slug}`} className="related-card">
                <div className="related-img">
                  <Image
                    src={p.imageUrl}
                    alt={`Cover for ${p.title}`}
                    width={80}
                    height={70}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="related-info">
                  <span className="related-date">{p.date} &middot; {p.readTime}</span>
                  <h4>{p.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

    </main>
  );
}
