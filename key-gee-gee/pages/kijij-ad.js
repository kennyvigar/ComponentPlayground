import React from "react";

export const KijijiAd = ({ title, description, images, ...adProps }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <div>
        {images.map((imageSrc) => (
          <img key={imageSrc} src={imageSrc} />
        ))}
      </div>
      <pre>{JSON.stringify(adProps, null, 4)}</pre>
    </div>
  );
};
