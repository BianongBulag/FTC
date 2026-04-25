import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/posts';
import './food-trips.css';

export default function FoodTripsPage() {
  const foodTrips = posts.filter((p) => p.category === 'food-trips');

  return (
    <main>
      <header className="trips-header">
        <div className="container">
          <span className="script-text" style={{ color: 'var(--secondary)' }}>Follow the flavor</span>
          <h1>Food Trips</h1>
          <p style={{ fontSize: '20px', maxWidth: '600px', margin: '0 auto' }}>
            Mapping out cravings line by line. From bustling hawker centers to hidden local gems.
          </p>
        </div>
      </header>

      <section className="section" style={{ backgroundColor: '#f7f9fc' }}>
        <div className="container">
          {foodTrips.map((post, index) => (
            <article key={post.slug} className={`trip-card${index % 2 !== 0 ? ' reverse' : ''}`}>
              <div className="trip-img-wrap">
                <span className="location-tag">{post.tags}</span>
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  className="trip-img"
                  width={1000}
                  height={600}
                />
              </div>
              <div className="trip-content">
                <h2>{post.title}</h2>
                <p>{post.subtitle}</p>
                <div className="card-meta" style={{ marginTop: '20px', color: 'var(--text-light)', fontSize: '14px' }}>
                  <span>{post.date}</span> · <span>{post.readTime}</span>
                </div>
                <Link href={`/food-trips/${post.slug}`} className="read-more" style={{ marginTop: '20px', display: 'inline-block' }}>
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
