import { getPosts } from "@/lib/blog";
import { getAboutInfo } from "@/lib/about";

export default async function Home() {
  const posts = getPosts();
  const aboutInfo = await getAboutInfo();

  return (
    <div className="max-w-4xl mx-auto px-10 sm:px-24 py-24">
      {/* Header */}
      <div className="mb-20">
        <div style={{ color: 'rgba(0, 0, 0, 0.7)', fontWeight: 'bold', lineHeight: 1 }} className="mb-2">
          {aboutInfo.name}
        </div>
        <div
          style={{ color: 'rgba(0, 0, 0, 0.7)', lineHeight: 1 }}
          dangerouslySetInnerHTML={{ __html: aboutInfo.descriptionHtml }}
        />
      </div>

      {/* Posts */}
      <div className="mb-20">
        <div style={{ color: 'rgba(0, 0, 0, 0.7)', fontWeight: 'bold', lineHeight: 1 }} className="mb-2">
          Posts
        </div>
        <div className="space-y-1">
          {posts.map((post) => (
            <div key={post.slug} className="pl-2">
              <span style={{ color: 'rgba(0, 0, 0, 0.7)', lineHeight: 1 }}>◦ </span>
              <a
                href={`/blog/${post.slug}`}
                className="homepage-link"
                style={{ color: '#2563eb', opacity: 1, fontWeight: 'bold', textDecoration: 'underline', lineHeight: 1 }}
              >
                {post.title}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="mb-20">
        <div style={{ color: 'rgba(0, 0, 0, 0.7)', lineHeight: 1 }}>
          <strong>Contacto</strong> —{' '}
          <a
            href="mailto:luciano.tourn@wuru.ai"
            className="homepage-link"
            style={{ color: '#2563eb', opacity: 1, fontWeight: 'bold', textDecoration: 'underline', lineHeight: 1 }}
          >
            Email
          </a>, {' '}
          <a
            href="https://github.com/luchotourn"
            target="_blank"
            rel="noopener noreferrer"
            className="homepage-link"
            style={{ color: '#2563eb', opacity: 1, fontWeight: 'bold', textDecoration: 'underline', lineHeight: 1 }}
          >
            GitHub
          </a>, {' '}
          <a
            href="https://www.linkedin.com/in/tourn/"
            target="_blank"
            rel="noopener noreferrer"
            className="homepage-link"
            style={{ color: '#2563eb', opacity: 1, fontWeight: 'bold', textDecoration: 'underline', lineHeight: 1 }}
          >
            LinkedIn
          </a>.
        </div>
      </div>

      {/* Footer */}
      <div style={{ color: 'rgba(0, 0, 0, 0.3)', lineHeight: 1 }}>
        © 2025 Luciano Tourn.
      </div>
    </div>
  );
}
