import Link from "next/link";
import { getPosts } from "@/lib/blog";

export default function Home() {
  const posts = getPosts().slice(0, 5); // Show 5 most recent posts

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-2xl font-medium mb-6">Lucho Tourn</h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          Developer and technology enthusiast. I write about programming,
          open source software, and digital tools that make life better.
        </p>
        <nav className="space-x-6 text-sm">
          <Link href="/about" className="text-gray-600 hover:text-black transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-black transition-colors">
            Blog
          </Link>
          <a
            href="mailto:hello@luchotourn.com"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Recent Posts */}
      <section>
        <h2 className="text-lg font-medium mb-8">Recent Writing</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-black group-hover:text-gray-600 transition-colors mb-1">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <time className="text-gray-400 text-sm ml-4 whitespace-nowrap">
                    {post.date}
                  </time>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/blog"
            className="text-gray-600 hover:text-black transition-colors text-sm"
          >
            View all posts →
          </Link>
        </div>
      </section>

      {/* Links */}
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="flex space-x-6 text-sm">
          <a
            href="https://github.com/luchotourn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/luchotourn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/luchotourn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
