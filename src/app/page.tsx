import Link from 'next/link';
import { getAllPosts, getFeaturedTours } from '@/lib/posts';
import { TourCard } from '@/components/TourCard';
import { ArticleCard } from '@/components/ArticleCard';

export default function HomePage() {
  const featuredPosts = getAllPosts().filter(p => p.featured).slice(0, 3);
  const featuredTours = getFeaturedTours().slice(0, 3);
  const allPosts = getAllPosts().slice(0, 3);

  const categories = [
    { name: 'Education', href: '/blog?category=education', icon: '🎓', color: 'from-amber-500 to-orange-500' },
    { name: 'Culture', href: '/blog?category=culture', icon: '🏛️', color: 'from-sky-500 to-blue-500' },
    { name: 'History', href: '/blog?category=history', icon: '📜', color: 'from-emerald-500 to-green-500' },
    { name: 'Food', href: '/blog?category=food', icon: '🍜', color: 'from-red-500 to-pink-500' },
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-sky-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Educational Travel in <span className="text-amber-600 dark:text-amber-500">Cambodia</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Transform your students into global citizens through immersive encounters with ancient temples, living history, and vibrant culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tours"
                className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
              >
                Explore Tours
              </Link>
              <Link
                href="/blog"
                className="px-8 py-4 border-2 border-amber-600 dark:border-amber-500 text-amber-600 dark:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 font-semibold rounded-lg transition-colors"
              >
                Read Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
            Explore by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Featured Tours
            </h2>
            <Link href="/tours" className="text-amber-600 dark:text-amber-500 hover:underline font-medium">
              View all tours →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Featured Articles
            </h2>
            <Link href="/blog" className="text-sky-600 dark:text-sky-500 hover:underline font-medium">
              View all articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-600 to-sky-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Plan Your Educational Journey?
          </h2>
          <p className="text-xl mb-8 text-amber-50">
            Contact us to design a custom study tour tailored to your educational objectives.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
