import Link from 'next/link';
import Image from 'next/image';
import '@/components/blog-list.css';

export default function UlamPage() {
  return (
    <main>
      {/* Page Header */}
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
          {/* Main Content */}
          <div className="main-content">
            <article className="blog-post">
              <div className="blog-post-img">
                <Image
                  src="https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=1200"
                  alt="Sinigang Bowl"
                  width={1200}
                  height={400}
                />
              </div>
              <span className="blog-post-meta">
                Food Memories &middot; Oct 12, 2026 &middot; <span className="read-time">4 min read</span>
              </span>
              <h2><Link href="/ulam/the-comfort-of-rainy-day-sinigang">The Comfort of Rainy Day Sinigang</Link></h2>
              <p>
                There is something inherently grounding about the smell of tamarind and pork boiling in a pot on a rainy
                Tuesday. Growing up, the exact sourness of the broth depended entirely on whoever was cooking—my lola
                preferred it mouth-puckeringly sour, while my mom liked a gentle tang. Today, I&apos;m sharing my own version, a
                deeply personal memory of cooking pork sinigang during the monsoon season, and why the sour broth always
                feels like a warm hug.
              </p>
              <Link href="/ulam/the-comfort-of-rainy-day-sinigang" className="btn btn-outline">Read Story</Link>
            </article>

            <article className="blog-post">
              <div className="blog-post-img">
                <Image
                  src="https://images.unsplash.com/photo-1606115915090-bc185b196c09?auto=format&fit=crop&q=80&w=1200"
                  alt="Chicken Adobo"
                  width={1200}
                  height={400}
                />
              </div>
              <span className="blog-post-meta">
                Recipes &middot; Sep 28, 2026 &middot; <span className="read-time">3 min read</span>
              </span>
              <h2><Link href="/ulam/perfecting-the-classic-chicken-adobo">Perfecting the Classic Chicken Adobo</Link></h2>
              <p>
                Every Filipino household claims their adobo is the best one. Is it the ratio of soy sauce to vinegar? The
                amount of garlic? Whether or not you add sugar? After years of experimenting with different variations, I&apos;ve
                finally found the balance that tastes like home to me. It&apos;s saucy, garlicky, and begs for a mountain of
                steaming white rice.
              </p>
              <Link href="/ulam/perfecting-the-classic-chicken-adobo" className="btn btn-outline">Get Recipe</Link>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-widget">
              <h3>Categories</h3>
              <ul className="category-list">
                <li><Link href="/ulam">Recipes <span className="category-count">(12)</span></Link></li>
                <li><Link href="/ulam">Food Memories <span className="category-count">(8)</span></Link></li>
                <li><Link href="/ulam">Filipino Cuisine <span className="category-count">(15)</span></Link></li>
                <li><Link href="/ulam">International Food <span className="category-count">(5)</span></Link></li>
                <li><Link href="/ulam">Cooking Tips <span className="category-count">(4)</span></Link></li>
              </ul>
            </div>

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
