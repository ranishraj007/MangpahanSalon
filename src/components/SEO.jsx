import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  ogImage = "https://mangpahang.com.np/Logo.jpg",
  schema,
}) => {
  const baseTitle = "Mangpahang Unisex Salon";
  const siteUrl = "https://mangpahang.com.np";
  const fullTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} | Best Salon in Baneshwor, Kathmandu`;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl + "/";
  const defaultDescription =
    "Mangpahang Unisex Salon in Mid-Baneshwor, Kathmandu offers haircut, hair color, facial, waxing, threading, nails, bridal makeup, and beauty services for women and men.";
  const defaultKeywords = [
    "best salon in Kathmandu",
    "best salon in Nepal",
    "best salon in Baneshwor",
    "salon in Kathmandu",
    "unisex salon Kathmandu",
    "hair salon Kathmandu",
    "beauty salon Kathmandu",
    "haircut Kathmandu",
    "hair color Kathmandu",
    "bridal makeup Kathmandu",
    "nail salon Kathmandu",
    "facial Kathmandu",
    "waxing Kathmandu",
    "threading Kathmandu",
    "stylish haircut Kathmandu",
    "Mangpahang Unisex Salon",
  ].join(", ");
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords
    ? `${keywords}, ${defaultKeywords}`
    : defaultKeywords;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={baseTitle} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={baseTitle} />
      <meta property="og:locale" content="en_NP" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
