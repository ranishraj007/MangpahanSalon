import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { services } from "../data/services";
import { servicePages, siteUrl } from "../data/routes";

export default function ServiceDetail({ page }) {
  const service = services.find((item) => item.id === page.serviceId);
  const schema = {
    "@type": "Service",
    "@id": `${siteUrl}${page.path}#service`,
    name: service.title,
    description: service.desc,
    url: `${siteUrl}${page.path}`,
    provider: { "@id": `${siteUrl}/#salon` },
    areaServed: "Kathmandu, Nepal",
  };
  return (
    <>
      <SEO title={`${page.label} in Baneshwor, Kathmandu`} description={`${service.title} at Mangpahang Unisex Salon, Mid-Baneshwor, Kathmandu. View the service price list and call +977 9708073356 to arrange an appointment.`} canonical={page.path} schema={schema} />
      <section className="page-hero pt-32 pb-16 text-white">
        <div className="container-custom max-w-4xl">
          <p className="text-[#d6b05b] mb-3">Mid-Baneshwor, Kathmandu</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{service.title}</h1>
          <p className="text-white/80 leading-8 mb-6">{service.desc}</p>
          <p className="mb-6">Open daily, 10 AM–7 PM · Call +977 9708073356</p>
          <a href="tel:+9779708073356" className="btn-primary inline-block">Call to book</a>
        </div>
      </section>
      <Breadcrumbs />
      <section className="container-custom max-w-4xl py-12">
        <h2 className="text-2xl font-bold mb-6">{page.label} prices</h2>
        <div className="overflow-x-auto surface-card rounded-xl p-5">
          <table className="w-full text-left">
            <caption className="text-left text-sm text-[#746b61] pb-4">Prices in Nepalese rupees (NPR). Confirm your selected service and final price when booking.</caption>
            <thead><tr><th scope="col" className="py-3">Service</th><th scope="col" className="py-3">Price</th></tr></thead>
            <tbody>{service.details.map((item) => <tr key={item.n} className="border-t border-[#eadfce]"><th scope="row" className="py-3 font-normal">{item.n}</th><td className="py-3 whitespace-nowrap">{item.p}</td></tr>)}</tbody>
          </table>
        </div>
        <h2 className="text-2xl font-bold mt-12 mb-4">{page.question}</h2>
        <p className="leading-8">{page.answer}</p>
        <h2 className="text-2xl font-bold mt-12 mb-4">Planning your appointment</h2>
        <p className="leading-8 mb-4">Tell us which option you are interested in when you contact the salon. Ask the team about availability, appointment length, preparation and what is included before confirming your visit.</p>
        <p className="leading-8">Walk-ins are accepted, and appointments are recommended to secure your preferred time and stylist. Find our location and contact details on the <Link className="underline" to="/contact">booking and directions page</Link>.</p>
        <h2 className="text-2xl font-bold mt-12 mb-4">Explore more</h2>
        <ul className="space-y-3">
          {servicePages.filter((item) => item.path !== page.path).map((item) => <li key={item.path}><Link className="underline" to={item.path}>{item.label}</Link></li>)}
          <li><Link className="underline" to="/gallery">View the salon gallery</Link></li>
          <li><Link className="underline" to="/services">Full salon service menu</Link></li>
        </ul>
      </section>
    </>
  );
}
