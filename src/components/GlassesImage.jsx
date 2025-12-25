import React from 'react'

const GlassesImage = ({ type }) => {
  const imageUrls = {
    sunglasses: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80',
    eyeglasses: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=500&q=80',
    sports: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&q=80'
  };
  
  return (
    <img 
      src={imageUrls[type]} 
      alt={`${type} glasses`}
      className=" w-[60%] h-full  object-cover rounded-[15px]"
      onError={(e) => {
        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23111" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" fill="%23991b1b" font-size="24" text-anchor="middle" dominant-baseline="middle"%3EGlasses Image%3C/text%3E%3C/svg%3E';
      }}
    />
  );
};

export default GlassesImage;