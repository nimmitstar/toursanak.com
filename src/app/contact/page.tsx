import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with TourSanak to plan your educational travel experience in Cambodia.',
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Ready to plan your educational journey? We'd love to hear from you.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
