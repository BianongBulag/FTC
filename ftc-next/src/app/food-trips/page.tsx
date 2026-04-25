import Image from 'next/image';
import './food-trips.css';

export default function FoodTripsPage() {
  return (
    <main>
      {/* Page Header */}
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

          {/* Trip 1 */}
          <article className="trip-card">
            <div className="trip-img-wrap">
              <span className="location-tag">Binondo, Manila</span>
              <Image
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000"
                alt="Street food in Binondo"
                className="trip-img"
                width={1000}
                height={600}
              />
            </div>
            <div className="trip-content">
              <h2>The Ultimate Binondo Crawl</h2>
              <p>
                The oldest Chinatown in the world offers an overwhelming sensory experience. Escaping the sweltering Manila
                heat meant ducking into tiny hole-in-the-wall establishments to find comfort in a bowl of hand-pulled
                noodles.
              </p>

              <div className="highlights-box">
                <h4>Highlights</h4>
                <ul>
                  <li>Fried Siopao from Shanghai Fried Siopao</li>
                  <li>Hand-pulled beef noodles from Lan Zhou La Mien</li>
                  <li>Toasted Siopao near the church</li>
                </ul>
              </div>

              <p className="hidden-gem">
                There&apos;s an unnamed cart corner street selling the crispiest lumpia at 2 PM exactly. Get
                there by 1:45 PM.
              </p>
            </div>
          </article>

          {/* Trip 2 */}
          <article className="trip-card reverse">
            <div className="trip-img-wrap">
              <span className="location-tag">Osaka, Japan</span>
              <Image
                src="/images/takoyaki.jpg"
                alt="Takoyaki in Osaka"
                className="trip-img"
                width={1000}
                height={600}
              />
            </div>
            <div className="trip-content">
              <h2>Kuidaore in Dotonbori</h2>
              <p>
                &quot;Kuidaore&quot;, meaning to eat oneself into ruin. The neon lights reflect off the canal while the rich smell of
                okonomiyaki and takoyaki wafts through the chilly air. It was a chaotic, delicious weekend.
              </p>

              <div className="highlights-box">
                <h4>Highlights</h4>
                <ul>
                  <li>Michelin-starred takoyaki</li>
                  <li>Wagyu beef skewers</li>
                  <li>Melon pan ice cream</li>
                </ul>
              </div>

              <p className="hidden-gem">
                Skip the main Okonomiyaki chains and head to the narrow alleys behind Dotombori arcades;
                the wait is shorter and the chefs griddle right in front of you.
              </p>
            </div>
          </article>

        </div>
      </section>
    </main>
  );
}
