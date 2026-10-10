import React from "react";

export default function LazyImage({
  src,
  alt,
  className,
  style,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      {...props}
    />
  );
}