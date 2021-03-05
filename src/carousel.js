import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
      <div class="carousel-wrapper">
      <Carousel>
          <div>
              <img src="../public.assets/bus1.jpg" />
          </div>
          <div>
          <img src="../public.assets/bus2.jpg" />
          </div>
          <div>
          <img src="../public.assets/bus3.jpg" />
          </div>
          <div>
          <img src="../public.assets/bus4.jpg" />
          </div>
          <div>
          <img src="../public.assets/bus6.jpg" />
          </div>
          <div>
          <img src="../public.assets/bus7.jpg" />
          </div>
          <div>
          <img src="../public.assets/bus9.jpg" />
          </div>
      </Carousel>
  </div>
);
}