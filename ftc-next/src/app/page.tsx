import PostCard from '@/components/PostCard';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const featuredPosts = [
    {
      title: 'The Comfort of Rainy Day Sinigang',
      excerpt: 'A deeply personal memory of cooking pork sinigang during the monsoon season, and why the sour broth always feels like a warm hug.',
      category: 'Ulam Stories',
      categorySlug: 'ulam',
      slug: 'the-comfort-of-rainy-day-sinigang',
      date: 'Oct 12, 2026',
      readTime: '4 min read',
      imageUrl: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Finding Stillness in a Pour-Over',
      excerpt: "Reviewing that hidden neighborhood cafe where the barista takes 10 minutes to serve your coffee, and why it's absolutely worth the wait.",
      category: 'Kape Corner',
      categorySlug: 'kape-corner',
      slug: 'finding-stillness-in-a-pour-over',
      date: 'Oct 08, 2026',
      readTime: '3 min read',
      imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Binondo Weekend Crawl',
      excerpt: 'Navigating the oldest Chinatown in the world. From crispy fried dumplings to authentic hand-pulled noodles hidden in narrow alleys.',
      category: 'Food Trips',
      categorySlug: 'food-trips',
      slug: 'binondo-weekend-crawl',
      date: 'Oct 02, 2026',
      readTime: '6 min read',
      imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
    },
  ];

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
              <PostCard key={post.slug} {...post} />
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
