import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  ogImage = "https://mangpahangsalon.com.np/Logo.jpg",
}) => {
  const baseTitle = "Mangpahang Unisex Salon";
  const siteUrl = "https://mangpahangsalon.com.np";
  const fullTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} | Best Salon in Baneshwor, Kathmandu`;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl + "/";

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={baseTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
