import React from "react";
import { Helmet } from "react-helmet-async";
import business from "../data/business.json";
import { publicRoutes, siteUrl } from "../data/routes";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  ogImage = "https://mangpahang.com.np/Logo.jpg",
  schema,
  noindex = false,
  preloadImage,
}) => {
  const baseTitle = "Mangpahang Unisex Salon";
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
  const route = publicRoutes.find((page) => page.path === canonical);
  const crumbs = route && canonical !== "/" ? [
    publicRoutes[0],
    ...(canonical.startsWith("/services/") ? [publicRoutes[1]] : []),
    route,
  ] : [];
  const graph = noindex ? [] : [
    business,
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: `${siteUrl}/`, name: baseTitle, publisher: { "@id": business["@id"] } },
    ...(schema ? [schema] : []),
    ...(crumbs.length ? [{
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((crumb, index) => ({
        "@type": "ListItem", position: index + 1, name: crumb.label, item: `${siteUrl}${crumb.path}`,
      })),
    }] : []),
  ];

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={baseTitle} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large"} />
      {!noindex && <link rel="canonical" href={fullCanonical} />}
      {preloadImage && <link rel="preload" as="image" href={preloadImage} fetchpriority="high" />}

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

      {graph.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c")}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
