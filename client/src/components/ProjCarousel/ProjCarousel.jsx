import { useEffect, useState } from 'react';
import Slider from 'react-slick'; // Убедись, что у тебя установлен react-slick
// import './ProjCarousel.scss'; // Создай стиль для карусели

const ProjCarousel = ({ projectName }) => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      const response = await fetch(`http://localhost:5000/projects`);
      const projects = await response.json();
      const project = projects.find(p => p.name === projectName);
      setProjectData(project);
    };

    fetchProjectData();
  }, [projectName]);

  if (!projectData) return <div>Загрузка...</div>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="proj-carousel">
      <Slider {...settings}>
        {projectData.images.map((image, index) => (
          <div key={index}>
            <img src={`http://localhost:5000/images/${projectData.name}/${image}`} alt={`Проект ${projectData.name}`} />
          </div>
        ))}
      </Slider>
      <div className="project-description">
        <h3>{projectData.description.type}</h3>
        <p>Стоимость: {projectData.description.cost}</p>
        <p>Срок: {projectData.description.duration}</p>
        <p>Площадь: {projectData.description.area}</p>
      </div>
    </div>
  );
};

export default ProjCarousel;
