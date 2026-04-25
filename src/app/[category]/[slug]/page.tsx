import { posts, getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import './post.css';

export function generateStaticParams() {
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: Promise<{ category: string, slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <div 
        className="article-hero" 
        style={{ backgroundImage: `url('${post.imageUrl}')` }}
      >
        <span className="card-badge">{post.category.replace('-', ' ')}</span>
      </div>

      <header className="article-header">
        <span className="post-metadata">
          {post.category.replace('-', ' ')} &middot; {post.date} &middot; <span className="read-time">{post.readTime}</span>
        </span>
        <h1>{post.title}</h1>
        <p className="subtitle">{post.subtitle}</p>
        <div className="decorative-line"></div>
      </header>

      <article className="article-body">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="tags-row">
          <span className="tag-pill">{post.tags}</span>
        </div>

        <div className="author-card">
          <div className="author-avatar">A</div>
          <div className="author-info">
            <h4>Written by Adryenne</h4>
            <p>Curator of Feed the Curious. Sharing the meals that move me and the cultural stories deeply embedded in Filipino cuisine.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
