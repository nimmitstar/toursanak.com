import { getTourBySlug, getAllTours } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const tours = getAllTours();
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const tour = getTourBySlug(params.slug);
  if (!tour) return {};

  return {
    title: tour.title,
    description: tour.description,
    openGraph: {
      title: tour.title,
      description: tour.description,
      type: 'article',
    },
  };
}

export default function TourPage({ params }: { params: { slug: string } }) {
  const tour = getTourBySlug(params.slug);

  if (!tour) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24">
      <article className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/tours"
            className="inline-flex items-center text-amber-600 dark:text-amber-500 hover:underline mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Tours
          </Link>

          <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-amber-500/20 to-sky-500/20 flex items-center justify-center mb-8">
            <span className="text-6xl">🏛️</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 capitalize">
              {tour.category}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {tour.duration}
            </span>
            <span className="text-2xl font-bold text-amber-600 dark:text-amber-500">
              ${tour.price}
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">/person</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {tour.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {tour.description}
          </p>

          {tour.highlights && tour.highlights.length > 0 && (
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Tour Highlights
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {tour.content && <MDXRemote source={tour.content} />}
          </div>

          <div className="mt-12 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Ready to Book?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Contact us to reserve this tour or customize it for your group.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
