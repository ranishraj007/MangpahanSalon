import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const GalleryItem = ({
  image,
  title,
  category,
  alt,
  loading = "lazy",
  fetchPriority = "auto",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.figure
      className="surface-card relative overflow-hidden rounded-lg group"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <picture>
        {image?.webpSrcSet && (
          <source
            type="image/webp"
            srcSet={image.webpSrcSet}
            sizes={image.sizes}
          />
        )}
        {image?.jpgSrcSet && (
          <source
            type="image/jpeg"
            srcSet={image.jpgSrcSet}
            sizes={image.sizes}
          />
        )}
        <img
          src={image?.src || "/placeholder.svg"}
          alt={alt || title}
          width={image?.width || 768}
          height={image?.height || 512}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding="async"
          className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </picture>
      <motion.div
        className="absolute inset-x-0 top-0 bottom-16 bg-[#171412]/72 hidden flex-col items-center justify-center p-4 text-white backdrop-blur-[2px] sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="bg-[#d6b05b] text-[#171412] rounded-full p-3 mb-3"
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Search size={18} aria-hidden="true" />
        </motion.div>
        <motion.h3
          className="text-lg font-bold text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-sm text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {category}
        </motion.p>
      </motion.div>
      <figcaption className="flex min-h-16 items-center justify-between gap-4 px-4 py-3">
        <div>
          <h3 className="text-sm font-bold text-[#171412]">{title}</h3>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#8f681b]">
            {category}
          </p>
        </div>
      </figcaption>
    </motion.figure>
  );
};

export default GalleryItem;
