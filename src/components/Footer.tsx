import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-amber-600 dark:text-amber-500">
                Tour<span className="text-sky-600 dark:text-sky-500">Sanak</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-md">
              Educational travel experiences that transform students into global citizens through immersive encounters with Cambodia's rich history and living culture.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/tours" className="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500">Tour Packages</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500">Blog Articles</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} TourSanak. All rights reserved. Made with ❤️ for Cambodia.
          </p>
        </div>
      </div>
    </footer>
  );
}
