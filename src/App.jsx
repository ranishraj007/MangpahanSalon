import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import { servicePages } from "./data/routes";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Gallery = lazy(() => import("./pages/Gallery"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={null}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            {servicePages.map((page) => <Route key={page.path} caseSensitive path={page.path.slice(1)} element={<ServiceDetail page={page} />} />)}
            <Route index element={<Home />} />
            <Route caseSensitive path="services" element={<Services />} />
            <Route caseSensitive path="gallery" element={<Gallery />} />
            <Route caseSensitive path="about" element={<About />} />
            <Route caseSensitive path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
