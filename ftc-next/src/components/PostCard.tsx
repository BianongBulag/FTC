import Link from 'next/link';
import Image from 'next/image';

interface PostCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  slug: string;
  categorySlug: string;
  readTime?: string;
  badgeColor?: string;
  badgeTextColor?: string;
}

export default function PostCard({
  title,
  excerpt,
  category,
  date,
  imageUrl,
  slug,
  categorySlug,
  readTime = '3 min read',
  badgeColor,
  badgeTextColor = 'white',
}: PostCardProps) {
  return (
    <article className="card">
      <div className="card-img">
        <span
          className="card-badge"
          style={{ background: badgeColor, color: badgeTextColor }}
        >
          {category}
        </span>
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={500}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
      <div className="card-content">
        <h3>
          <Link href={`/${categorySlug}/${slug}`}>{title}</Link>
        </h3>
        <p>{excerpt}</p>
        <div className="card-meta">
          <span>{date}</span> &middot; <span className="read-time">{readTime}</span>
        </div>
      </div>
    </article>
  );
}
