import Link from "next/link";
import { getPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <header className="mb-16">
        <div className="mb-6">
          <Link href="/" className="text-black/70 hover:text-black transition-colors text-sm">
            ← Home
          </Link>
        </div>
        <h1 className="text-2xl font-normal mb-4 text-black">Blog</h1>
        <p className="text-black/70">
          Thoughts on programming, technology, and building things.
        </p>
      </header>

      <div className="space-y-8">
        {posts.length === 0 ? (
          <p className="text-black/70">No posts yet. Check back soon!</p>
        ) : (
          posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h2 className="text-lg font-normal text-black group-hover:text-black/70 transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-black/70 leading-relaxed mb-2">
                      {post.excerpt}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex space-x-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-black/30 bg-black/5 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <time className="text-black/30 text-sm ml-4 whitespace-nowrap">
                    {post.date}
                  </time>
                </div>
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}