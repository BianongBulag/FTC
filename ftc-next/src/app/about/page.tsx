import Image from 'next/image';
import './about.css';

export default function About() {
  return (
    <main>
      {/* Page Header */}
      <header className="about-header">
        <Image
          src="/images/about-me-1.jpg"
          alt="Adryenne sitting at a cafe"
          className="about-hero-img"
          width={1920}
          height={1080}
        />
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="content-narrow">
            <div className="bio-title">
              <span className="script-text">Mabuhay!</span>
              <h1>I&apos;m Adryenne.</h1>
            </div>

            <div className="bio-content">
              <p>
                My love for food didn&apos;t start in a fancy restaurant or a trendy multi-roaster café. It started in a small
                family restaurant in the province called <strong>Everlasting</strong>, where my grandfather and mother
                cooked authentic Filipino food with nothing but heart, fire, and a traditional <em>pugon</em> fueled by
                <em>ipa</em> that never seemed to go cold.
              </p>

              <Image
                src="/images/everlasting.png"
                alt="Everlasting Restaurant Pencil Sketch"
                className="inline-img"
                width={800}
                height={500}
              />

              <h3>My Culinary Roots: Cooking with Heart</h3>
              <p>
                I grew up in that kitchen long before I was tall enough to reach the stove. At six or seven years old, I
                was already helping serve food to customers. I watched my grandfather and mother carefully simmer beloved
                classics like <em>menudo, afritada, adobo,</em> and <em>kare-kare</em>, and masterfully stir massive batches
                of <em>lomi</em> and <em>pancit guisado</em> for everyone from everyday regulars to entire wedding
                celebrations.
              </p>

              <p>Food, in our family, was never just a meal. It was how we showed up for people.</p>

              <p>
                By high school, I was finally behind the stove myself. The very first dish I ever cooked was our signature
                <em>lomi</em>. That moment felt less like learning a skill, and more like stepping into a deeply rooted
                family tradition that had always been waiting for me. That is the exact passion I carry with me today.
              </p>

              <h3>Following the Flavor Across the Philippines</h3>
              <p>
                Today, I&apos;m based in Metro Manila, but I follow the food wherever it leads. As a home cook and passionate
                food traveler, my journey takes me from hidden local spots in the city to out-of-town adventures across the
                Philippines, and even beyond our borders.
              </p>

              <p>
                I am drawn to Filipino food culture above all—especially uncovering regional dishes and
                the rich history behind how they came to be. But if there&apos;s a new flavor waiting in any corner of the world,
                I&apos;ll never say no to trying it.
              </p>

              <h3>Welcome to Feed the Curious</h3>
              <p>
                This website is my love letter. It is a tribute to Filipino food and culture, to the hidden gems worth
                traveling hours for, to the quiet cafés that feel like a sanctuary in a busy day, and most importantly, to
                every person behind the counter who has a story to tell.
              </p>

              <p>Because every dish has a story. And I&apos;m here to find it.</p>
              <p>Welcome to my table. I&apos;m so glad you&apos;re here.</p>

              <div className="signature">Adryenne</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
