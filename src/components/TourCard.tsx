import Link from 'next/link';
import Image from 'next/image';
import { Tour } from '@/lib/posts';

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <Link href={`/tours/${tour.slug}`} className="group">
      <article className="h-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all hover:shadow-xl hover:-translate-y-1">
        <div className="aspect-video w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-500/20 to-sky-500/20">
            <span className="text-4xl">🏛️</span>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 capitalize">
              {tour.category}
            </span>
            <span className="text-sm font-semibold text-amber-600 dark:text-amber-500">
              ${tour.price}
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
            {tour.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {tour.description}
          </p>

          <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {tour.duration}
          </div>

          {tour.featured && (
            <div className="mt-3 inline-flex items-center text-xs font-medium text-sky-600 dark:text-sky-400">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
