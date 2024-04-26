import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faDotCircle,
} from "@fortawesome/free-solid-svg-icons";

function CardHobbie() {
  const slides = [
    {
      image: "./images/moto.jpg",
      title: "Moto",
      description: "Circuit du Lus avec l'association Tortue Team",
    },
    {
      image: "./images/graphart.jpg",
      title: "Arts graphisues",
      description: "Dessin, peinture, illustration sur tablette",
    },
    {
      image: "./images/music.jpg",
      title: "Musique",
      description: "Batterie, djembé",
    },
    {
      image: "./images/climb.jpg",
      title: "Escalade",
      description: "Initiateur SAE - niveau 6a/6b",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
   setCurrentIndex(slideIndex);
  }

  return (
    <div
      className="max-w-[992px] h-[35vh] w-full 
        m-auto py-8 px-16 relative
        group"
    >
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        className="w-full h-full
        rounded-2xl 
        bg-center bg-cover 
        flex flex-col items-center justify-center
        duration-500"
      >
        <div className="flex flex-col items-center w-[70vw]">
          <h3 className="text-center bg-slate-900 bg-opacity-50 w-[250px] text-stone-100">
            {slides[currentIndex].title}
          </h3>
          <p className="bg-slate-900 bg-opacity-50 w-[250px] text-stone-100 mt-0 ">
            {slides[currentIndex].description}
          </p>
        </div>
      </div>
      {/* left arrow */}
      <div
        className="
         hidden group-hover:block
         absolute 
         top-[50%] -translate-x-0 translate-y-[-50%] 
         left-5 text-xl
         rounded-[50%] p-2 bg-black/50
         text-white cursor-pointer"
      >
        <FontAwesomeIcon onClick={prevSlide} icon={faChevronLeft} size="l" />
      </div>
      {/* right arrow */}
      <div
        className="
         hidden group-hover:block
         absolute 
         top-[50%] -translate-x-0 translate-y-[-50%] 
         right-5 text-xl
         rounded-[50%] p-2 bg-black/50
         text-white cursor-pointer"
      >
        <FontAwesomeIcon onClick={nextSlide} icon={faChevronRight} size="l" />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={()=>goToSlide(slideIndex)}
            className="px-0.5 mb-8 text-slate-200 cursor-pointer"
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
}
export default CardHobbie;
