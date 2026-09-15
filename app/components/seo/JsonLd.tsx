export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.homeya.site/#organization",
        "name": "HomeYa",
        "url": "https://www.homeya.site",
        "logo": "https://www.homeya.site/logo-1.png",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.homeya.site/#website",
        "url": "https://www.homeya.site",
        "name": "HomeYa",
        "publisher": {
          "@id": "https://www.homeya.site/#organization"
        },
        "inLanguage": "fr-CM"
      },
      {
        "@type": "MobileApplication",
        "@id": "https://www.homeya.site/#application",
        "name": "HomeYa",
        "applicationCategory": "LifestyleApplication",
        "operatingSystem": "Android",
        "url": "https://www.homeya.site",
        "publisher": {
          "@id": "https://www.homeya.site/#organization"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}