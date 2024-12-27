import React, { useRef } from "react";
import "./Gallery.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06, images.gallery07, images.gallery08]

const Gallery = () => {
const scrollRef = useRef(null);
const scroll = (direction) => {
  const { current } = scrollRef;
  if (direction === 'left') {
   current.scrollLeft -= 300;
  } else {
    current.scrollLeft += 300;
   }
  }


  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="A glimpse into our delicious world." />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ marginTop: "1rem" }}>Explore our favorite coffee moments and culinary creations shared by our community. Follow us on Instagram for daily updates and inspirations!</p>
        <button type="button" className="custom__button">View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
           {galleryImages.map((image, index) => (
            <div className="app__gallery-image_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
            </div>
           ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')}/>
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')}/>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
