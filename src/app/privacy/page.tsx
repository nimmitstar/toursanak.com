export const metadata = {
  title: 'Privacy Policy',
  description: 'TourSanak privacy policy - how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400">
              Last updated: April 17, 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We collect information you provide directly to us when you inquire about our tours, subscribe to our newsletter, or contact us. This may include your name, email address, phone number, and any other information you choose to share.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We use the information we collect to respond to your inquiries, process tour bookings, send you relevant information about our services, and improve our offerings. We do not sell your personal information to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Data Security
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Cookies and Advertising
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We use Google AdSense to serve advertisements on our website. Google may use cookies to serve ads based on your prior visits to our website or other websites. You may opt out of personalized advertising by visiting Google's Ads Settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Third-Party Services
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of such third parties. We encourage you to read the privacy policies of any third-party services you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at hello@toursanak.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at hello@toursanak.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
