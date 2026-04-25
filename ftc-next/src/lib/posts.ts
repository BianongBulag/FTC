export const posts = [
  {
    category: 'ulam',
    slug: 'the-comfort-of-rainy-day-sinigang',
    title: 'The Comfort of Rainy Day Sinigang',
    subtitle: 'A deeply personal memory of cooking pork sinigang during the monsoon season, and why the sour broth always feels like a warm hug.',
    date: 'Oct 12, 2026',
    readTime: '4 min read',
    tags: 'Food Memories',
    imageUrl: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=1200',
    content: '<p>There is something inherently grounding about the smell of tamarind and pork boiling in a pot on a rainy Tuesday...</p>',
  },
  {
    category: 'food-trips',
    slug: 'binondo-weekend-crawl',
    title: 'The Ultimate Binondo Crawl',
    subtitle: "The oldest Chinatown in the world offers an overwhelming sensory experience.",
    date: 'Oct 02, 2026',
    readTime: '6 min read',
    tags: 'Binondo, Manila',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1200',
    content: '<p>Escaping the sweltering Manila heat meant ducking into tiny hole-in-the-wall establishments to find comfort...</p>',
  },
  {
    category: 'kape-corner',
    slug: 'finding-stillness-in-a-pour-over',
    title: 'Finding Stillness in a Pour-Over',
    subtitle: "Reviewing that hidden neighborhood cafe where the barista takes 10 minutes to serve your coffee.",
    date: 'Oct 08, 2026',
    readTime: '3 min read',
    tags: 'Café Reviews',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200',
    content: '<p>In our fast-paced world, waiting 10 minutes for a coffee seems absurd. Until you taste it...</p>',
  },
  {
    category: 'ulam',
    slug: 'perfecting-the-classic-chicken-adobo',
    title: 'Perfecting the Classic Chicken Adobo',
    subtitle: "Every Filipino household claims their adobo is the best one. Here is my take.",
    date: 'Sep 28, 2026',
    readTime: '3 min read',
    tags: 'Recipes',
    imageUrl: 'https://images.unsplash.com/photo-1606115915090-bc185b196c09?auto=format&fit=crop&q=80&w=1200',
    content: '<p>Every Filipino household claims their adobo is the best one...</p>',
  },
  {
    category: 'kape-corner',
    slug: 'the-magic-of-kapeng-barako',
    title: 'The Magic of Kapeng Barako',
    subtitle: "Exploring the strong, unapologetic flavor of Batangas' famous Liberica beans.",
    date: 'Oct 05, 2026',
    readTime: '4 min read',
    tags: 'Coffee Culture',
    imageUrl: '/images/barako.jpg',
    content: '<p>It is more than just a morning jolt; it is a testament to Filipino resilience...</p>',
  },
  {
    category: 'kape-corner',
    slug: 'rainy-days-and-spanish-lattes',
    title: 'Rainy Days and Spanish Lattes',
    subtitle: "Why the sweetness of condensed milk in espresso is the ultimate comfort drink.",
    date: 'Sep 22, 2026',
    readTime: '5 min read',
    tags: 'Coffee Stories',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200',
    content: '<p>A look back at my afternoon at a local roastery...</p>',
  },
  {
    category: 'kape-corner',
    slug: 'the-ritual-of-morning-coffee',
    title: 'The Ritual of Morning Coffee',
    subtitle: 'Before the world wakes up, there is just you, the kettle, and the quiet ceremony of brewing the first cup of the day.',
    date: 'Apr 20, 2026',
    readTime: '4 min read',
    tags: 'Coffee Stories',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200',
    content: '<p>There is a particular kind of silence that exists only before 7 AM. The city has not yet decided to be loud. The notifications have not started. It is just you, the sound of water heating, and the slow, deliberate act of making coffee from scratch. This is my favorite part of the day.</p><p>I started treating my morning brew as a ritual about two years ago, after a particularly brutal week of back-to-back deadlines. I realized I had been drinking coffee purely for function — a caffeine delivery system — without ever actually tasting it. So I slowed down. I bought a simple hand grinder. I learned the bloom. And somewhere between the pour and the first sip, I found something I had not expected: stillness.</p>',
  },
  {
    category: 'food-trips',
    slug: 'kuidaore-in-dotonbori',
    title: 'Kuidaore in Dotonbori',
    subtitle: '"Kuidaore", meaning to eat oneself into ruin. A chaotic, delicious weekend in Osaka.',
    date: 'Sep 15, 2026',
    readTime: '8 min read',
    tags: 'Osaka, Japan',
    imageUrl: '/images/takoyaki.jpg',
    content: '<p>The neon lights reflect off the canal while the rich smell of okonomiyaki and takoyaki wafts through the chilly air...</p>',
  }
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 2) {
  return posts
    .filter((p) => p.category === category && p.slug !== currentSlug)
    .slice(0, limit);
}
