export const metadata = {
  title: 'About Us',
  description: 'Learn about TourSanak and our mission to provide transformative educational travel experiences in Cambodia.',
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            About TourSanak
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                TourSanak is dedicated to transforming students into global citizens through immersive educational travel experiences in Cambodia. We believe that the best learning happens when students step out of the classroom and into the world—engaging with history, culture, and communities firsthand.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Why Cambodia?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Cambodia offers a uniquely rich educational environment. From the architectural marvels of the Khmer Empire to the profound lessons of recent history, from vibrant traditional arts to pressing contemporary development challenges—Cambodia is a living classroom.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our programs are designed not just to show students Cambodia, but to help them understand it—its achievements, its struggles, its resilience, and its future.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Our Approach
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <div className="text-3xl mb-3">📚</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Academic Rigor
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Our itineraries align with curriculum standards across multiple disciplines.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <div className="text-3xl mb-3">🤝</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Local Engagement
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We connect students with Cambodian educators, artists, and community members.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <div className="text-3xl mb-3">🌍</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Responsible Travel
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We prioritize ethical tourism practices that benefit local communities.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <div className="text-3xl mb-3">✨</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Transformational Experience
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Our programs change how students see themselves and the world.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Our Team
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The Tonle Team combines deep knowledge of Cambodian history and culture with expertise in educational travel design. Our guides are not just knowledgeable—they're passionate educators who bring learning to life.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Ready to start planning your educational journey to Cambodia? We'd love to hear from you.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
              >
                Contact Us
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
