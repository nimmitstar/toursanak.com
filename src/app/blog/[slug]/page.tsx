import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24">
      <article className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-sky-600 dark:text-sky-500 hover:underline mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-sky-500/20 to-amber-500/20 flex items-center justify-center mb-8">
            <span className="text-6xl">📚</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-400 capitalize">
              {post.category}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readingTime} min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {post.description}
          </p>

          <div className="flex items-center text-sm text-gray-500 dark:text-gray-500 mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content && <MDXRemote source={post.content} />}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <Link
              href="/blog"
              className="inline-flex items-center text-sky-600 dark:text-sky-500 hover:underline font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to all articles
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
