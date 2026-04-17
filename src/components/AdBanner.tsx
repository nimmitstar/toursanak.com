export function AdBanner() {
  return (
    <div className="w-full py-8 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg my-8">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7520364222952193"
        data-ad-slot="placeholder"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <p className="text-sm text-gray-500 dark:text-gray-500 text-center">
        Advertisement
      </p>
    </div>
  );
}
