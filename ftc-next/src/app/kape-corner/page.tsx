import Link from 'next/link';
import Image from 'next/image';
import './kape-corner.css';

export default function KapeCornerPage() {
  return (
    <main>
      {/* Page Header */}
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
            <article className="coffee-card">
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800"
                alt="Pour over coffee"
                className="coffee-img"
                width={800}
                height={500}
              />
              <span className="coffee-category">Café Reviews</span>
              <h3><Link href="/kape-corner/finding-stillness-in-a-pour-over" style={{ color: 'inherit' }}>Finding Stillness in a Pour-Over</Link></h3>
              <p>
                Reviewing that hidden neighborhood cafe where the barista takes 10 minutes to serve your coffee, and why
                it&apos;s absolutely worth the wait in our fast-paced world.
              </p>
              <Link href="/kape-corner/finding-stillness-in-a-pour-over" className="read-more">Sit with this thought</Link>
            </article>

            <article className="coffee-card">
              <Image
                src="/images/barako.jpg"
                alt="Coffee beans"
                className="coffee-img"
                width={800}
                height={500}
              />
              <span className="coffee-category">Coffee Culture</span>
              <h3><Link href="/kape-corner/the-magic-of-kapeng-barako" style={{ color: 'inherit' }}>The Magic of Kapeng Barako</Link></h3>
              <p>
                Exploring the strong, unapologetic flavor of Batangas&apos; famous Liberica beans. It&apos;s more than just a morning
                jolt; it&apos;s a testament to Filipino resilience.
              </p>
              <Link href="/kape-corner/the-magic-of-kapeng-barako" className="read-more">Sit with this thought</Link>
            </article>

            <article className="coffee-card">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800"
                alt="Cafe interior"
                className="coffee-img"
                width={800}
                height={500}
              />
              <span className="coffee-category">Coffee Stories</span>
              <h3><Link href="/kape-corner/rainy-days-and-spanish-lattes" style={{ color: 'inherit' }}>Rainy Days and Spanish Lattes</Link></h3>
              <p>
                Why the sweetness of condensed milk in espresso is the ultimate comfort drink during the monsoon season. A
                look back at my afternoon at a local roastery.
              </p>
              <Link href="/kape-corner/rainy-days-and-spanish-lattes" className="read-more">Sit with this thought</Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
