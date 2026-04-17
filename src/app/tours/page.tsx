import { getAllTours, getCategories } from '@/lib/posts';
import { TourCard } from '@/components/TourCard';
import Link from 'next/link';

export const metadata = {
  title: 'Tour Packages',
  description: 'Explore our educational tour packages in Cambodia, from cultural immersions in Siem Reap to historical explorations in Phnom Penh.',
};

export default function ToursPage({ searchParams }: { searchParams: { category?: string } }) {
  const allTours = getAllTours();
  const categories = getCategories();

  const selectedCategory = searchParams.category;
  const filteredTours = selectedCategory
    ? allTours.filter(tour => tour.category === selectedCategory)
    : allTours;

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Educational Tour Packages
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Expertly designed itineraries that combine learning with adventure
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Link
            href="/tours"
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              !selectedCategory
                ? 'bg-amber-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All Tours
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/tours?category=${cat}`}
              className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
                selectedCategory === cat
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {filteredTours.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No tours found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
