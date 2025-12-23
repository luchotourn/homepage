import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPost, getAllPostSlugs } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: 'Post not found' };
  }

  return {
    title: `${post.title} | Luciano Tourn`,
    description: post.excerpt || `${post.title} - Blog post by Luciano Tourn`,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-20 py-20">
      <div className="mb-6">
        <Link href="/" className="text-black opacity-70 hover:opacity-100 leading-relaxed">
          ← Home
        </Link>
      </div>

      <div className="mb-8">
        <div className="text-black opacity-30 leading-relaxed">
          {post.date}
        </div>
      </div>

      <article className="prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
      </article>

      <div className="mt-16">
        <Link
          href="/"
          className="text-black opacity-70 hover:opacity-100 leading-relaxed"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}