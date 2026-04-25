import PostCard from '@/components/PostCard';
import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/posts';
import { getCategoryLabel } from '@/lib/categories';

export default function Home() {
  const featuredPosts = posts.slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <span className="script-text">Welcome to</span>
          <h1>Feed the Curious</h1>
          <p className="tagline">Food &middot; Coffee &middot; Culture &middot; Stories</p>
          <Link href="#featured" className="btn">Explore Stories</Link>
        </div>
      </header>

      {/* Featured Posts Overview */}
      <section id="featured" className="section">
        <div className="container">
          <div className="section-title">
            <span className="script-text">Latest from the blog</span>
            <h2>Freshly Served</h2>
          </div>

          <div className="magazine-grid">
            {featuredPosts.map((post) => (
              <PostCard
                key={post.slug}
                title={post.title}
                excerpt={post.subtitle}
                category={getCategoryLabel(post.category)}
                categorySlug={post.category}
                slug={post.slug}
                date={post.date}
                readTime={post.readTime}
                imageUrl={post.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Wave transition into about section */}
      <div className="wave-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>

      {/* About Intro */}
      <section className="about-preview">
        <div className="container">
          <div className="about-image">
            <Image
              src="/images/Kamusta.jpg"
              alt="Adryenne portrait holding coffee"
              width={500}
              height={500}
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
            />
          </div>
          <div className="about-text">
            <span className="script-text">Kumusta! I&apos;m</span>
            <h2>Adryenne</h2>
            <p>
              I&apos;m a story-seeker, coffee enthusiast, and lifelong lover of a good home-cooked meal. Feed the Curious is my digital dining table&mdash;a place where I share my food adventures, quiet coffee moments, and the beautiful Filipino culture that ties it all together.
            </p>
            <p>
              Whether you&apos;re looking for a nostalgic recipe, a recommendation for your next cafe hop, or just a little slice of life, pull up a chair.
            </p>
            <Link href="/about" className="btn">Get to Know Me</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
