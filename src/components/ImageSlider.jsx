// import { useState } from "react";
// import { SliderData } from "./SliderData";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

// export default function ImageSlider(slides) {

//   // const [current, setCurrent] = useState(0);
//   // const length = slides.length;

//   // // if(!Array.isArray(slides) || slides.length <= 0){
//   // //   return null;
//   // // }

//   // const nextSlide = () => {
//   //   setCurrent(current === length -1 ? 0 : current + 1);
//   // }

//   // const prevSlide =() =>{
//   //   setCurrent(current === 0 ? length - 1 : current - 1);
//   // }

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   return (
//     // <section className="slider">
//     //   <h2> Image Slider</h2>
//     //   <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
//     //   <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
//     //   {SliderData.map((slide, index)=>{
//     //     return (
//     //       <div className={index === current ? 'slide active' : 'slide'} key={index}>
//     //         {index === current && (
//     //           <img src={slide.image} alt='demo image' className = 'sliderImage'/>
//     //         )} 
            
//     //       </div>
//     //     );
//     //   })}
//     // </section>

//   );
// }