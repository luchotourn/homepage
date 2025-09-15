import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <header className="mb-16">
        <div className="mb-6">
          <Link href="/" className="text-gray-600 hover:text-black transition-colors text-sm">
            ← Home
          </Link>
        </div>
        <h1 className="text-2xl font-medium mb-8">About</h1>
      </header>

      <div className="prose prose-gray max-w-none space-y-6">
        <p className="text-gray-700 leading-relaxed">
          I&apos;m a developer passionate about creating elegant solutions to complex problems.
          My work spans across web development, open source projects, and exploring new
          technologies that can make a meaningful impact.
        </p>

        <p className="text-gray-700 leading-relaxed">
          I believe in the power of simple, well-crafted software and the importance of
          sharing knowledge through writing and open source contributions. When I&apos;m not
          coding, you can find me reading about emerging technologies or working on
          personal projects.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This site is where I share my thoughts on programming, document my learning
          journey, and connect with others in the development community.
        </p>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-medium mb-6">Connect</h2>
          <div className="space-y-3">
            <div>
              <span className="text-gray-600">Email:</span>{' '}
              <a
                href="mailto:hello@luchotourn.com"
                className="text-black hover:text-gray-600 transition-colors"
              >
                hello@luchotourn.com
              </a>
            </div>
            <div>
              <span className="text-gray-600">GitHub:</span>{' '}
              <a
                href="https://github.com/luchotourn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors"
              >
                @luchotourn
              </a>
            </div>
            <div>
              <span className="text-gray-600">Twitter:</span>{' '}
              <a
                href="https://twitter.com/luchotourn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors"
              >
                @luchotourn
              </a>
            </div>
            <div>
              <span className="text-gray-600">LinkedIn:</span>{' '}
              <a
                href="https://linkedin.com/in/luchotourn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors"
              >
                /in/luchotourn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}