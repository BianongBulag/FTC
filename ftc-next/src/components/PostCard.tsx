import Link from 'next/link';
import Image from 'next/image';
import { getCategoryStyle } from '@/lib/categories';

interface PostCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  slug: string;
  categorySlug: string;
  readTime?: string;
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
}: PostCardProps) {
  const href = `/${categorySlug}/${slug}`;
  const badgeStyle = getCategoryStyle(categorySlug);

  return (
    <article className="card">
      <Link href={href} className="card-link" aria-label={`Read: ${title}`}>
        <div className="card-img">
          <span
            className="card-badge"
            style={{ background: badgeStyle.bg, color: badgeStyle.text }}
          >
            {category}
          </span>
          <Image
            src={imageUrl}
            alt={`Cover image for ${title}`}
            width={800}
            height={500}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
      </Link>
      <div className="card-content">
        <h3>
          <Link href={href}>{title}</Link>
        </h3>
        <p>{excerpt}</p>
        <div className="card-meta">
          <span>{date}</span> &middot; <span className="read-time">{readTime}</span>
        </div>
        <Link href={href} className="read-more">Read more →</Link>
      </div>
    </article>
  );
}
