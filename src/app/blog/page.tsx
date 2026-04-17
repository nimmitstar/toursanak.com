import { getAllPosts, getCategories } from '@/lib/posts';
import { ArticleCard } from '@/components/ArticleCard';
import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description: 'Articles about Cambodia travel, culture, history, and educational travel tips.',
};

export default function BlogPage({ searchParams }: { searchParams: { category?: string } }) {
  const allPosts = getAllPosts();
  const categories = getCategories();

  const selectedCategory = searchParams.category;
  const filteredPosts = selectedCategory
    ? allPosts.filter(post => post.category === selectedCategory)
    : allPosts;

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Cambodia Travel Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Insights, tips, and stories for educational travelers
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Link
            href="/blog"
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              !selectedCategory
                ? 'bg-sky-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All Posts
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?category=${cat}`}
              className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No articles found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
