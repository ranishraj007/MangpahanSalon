import { Link, useLocation } from "react-router-dom";
import { publicRoutes } from "../data/routes";

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const route = publicRoutes.find((page) => page.path === pathname);
  if (!route || pathname === "/") return null;
  return (
    <nav aria-label="Breadcrumb" className="bg-[#fffaf3] text-[#746b61]">
      <ol className="container-custom flex flex-wrap gap-2 py-4 text-sm">
        <li><Link to="/" className="underline">Home</Link></li>
        {pathname.startsWith("/services/") && <li><span aria-hidden="true"> / </span><Link to="/services" className="underline">Services</Link></li>}
        <li><span aria-hidden="true"> / </span><span aria-current="page">{route.label}</span></li>
      </ol>
    </nav>
  );
}
