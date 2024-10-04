import { Carousel } from 'nuka-carousel';
import React from 'react';
import './CarouselComponent.scss';

export const CarouselComponent = ({ data }) => {
  return (
    <div className="container-carousel">
      {data.map((item, index) => (
        <div className="wr" key={index}>
          <Carousel showArrows wrapMode="wrap" showDots className="carousel">
            {item.images.map((src, imgIndex) => (
              <img
                key={imgIndex}
                src={src}
                className="image"
                alt={`work ${imgIndex}`}
              />
            ))}
          </Carousel>
          <div className="info">
            <div className="description">
              <p className="type">Тип ремонта:</p>
              <p className="type-answer">{item.type}</p>
            </div>
            <div className="description">
              <p className="type">Стоимость:</p>
              <p className="type-answer">{item.cost}</p>
            </div>
            <div className="description">
              <p className="type">Срок:</p>
              <p className="type-answer">{item.duration}</p>
            </div>
            <div className="description">
              <p className="type">Площадь:</p>
              <p className="type-answer">{item.area}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
