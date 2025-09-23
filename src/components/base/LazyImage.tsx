import React from "react";
import useIntersectionObserver from "../../hooks/use-intersection-observer";

// Extend all regular <img> attributes but require src & alt
type LazyImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, ...props }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div ref={ref}>
      {isVisible ? (
        <img src={src} alt={alt} {...props} />
      ) : (
        <div
          style={{
            height: props.height ?? "200px",
            background: "#eee",
          }}
        />
      )}
    </div>
  );
};

export default LazyImage;
