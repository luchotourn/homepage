import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getAllPostSlugs } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <header className="mb-16">
        <div className="mb-6">
          <Link href="/blog" className="text-gray-600 hover:text-black transition-colors text-sm">
            ← Blog
          </Link>
        </div>
        <h1 className="text-2xl font-medium mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <time>{post.date}</time>
          {post.tags && post.tags.length > 0 && (
            <div className="flex space-x-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <article className="prose prose-gray max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
      </article>

      <footer className="mt-16 pt-8 border-t border-gray-200">
        <Link
          href="/blog"
          className="text-gray-600 hover:text-black transition-colors text-sm"
        >
          ← Back to blog
        </Link>
      </footer>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}