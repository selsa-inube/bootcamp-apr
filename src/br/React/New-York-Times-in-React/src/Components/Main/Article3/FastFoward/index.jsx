import React from "react";

export const FastNews = ({ title, imageSrc, imageAlt, paragraphText }) => {
  return (
    <div className="fast_news">
      <h2>{title}</h2>
      <img src={imageSrc} alt={imageAlt} />
      <p>{paragraphText}</p>
    </div>
  );
};
