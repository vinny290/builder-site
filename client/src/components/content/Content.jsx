import { useState, useEffect } from 'react';
import './Content.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProjCarousel from '../ProjCarousel/ProjCarousel'

export const Content = () => {
  // const [filteredData, setFilteredData] = useState(data);
  const [filterType, setFilterType] = useState('Все');
  const [filterCost, setFilterCost] = useState('Все');
  

  // Функция для фильтрации данных
  // const filterData = () => {
  //   let filtered = data;

  //   if (filterType !== 'Все') {
  //     filtered = filtered.filter((item) => item.type === filterType);
  //   }

  //   if (filterCost !== 'Все') {
  //     if (filterCost === 'до 500 000') {
  //       filtered = filtered.filter(
  //         (item) => parseInt(item.cost.replace(/\s/g, '')) <= 500000,
  //       );
  //     } else if (filterCost === '500 000 - 1 000 000') {
  //       filtered = filtered.filter((item) => {
  //         const cost = parseInt(item.cost.replace(/\s/g, ''));
  //         return cost >= 500000 && cost <= 1000000;
  //       });
  //     } else if (filterCost === 'более 1 000 000') {
  //       filtered = filtered.filter(
  //         (item) => parseInt(item.cost.replace(/\s/g, '')) > 1000000,
  //       );
  //     }
  //   }

  //   setFilteredData(filtered);
  // };

  // Отслеживание изменения фильтров
  // useEffect(() => {
  //   filterData();
  // }, [filterType, filterCost]); // Запуск фильтрации при изменении типа или стоимости



  return (
    <section>
      <div className="section1">
        <div className="content1 container-base">
          <div className="text">
            <h3>Ремонт квартир и домов под ключ в Москве и области</h3>
            <div className="container-desc">
              <div className="desc">
                <img
                  src="../../../public/asset/content/section1/visit.svg"
                  alt=""
                />
                <p className="info-text">Бесплатный выезд на замер</p>
              </div>
              <div className="desc">
                <img
                  src="../../../public/asset/content/section1/estimate.svg"
                  alt=""
                />
                <p className="info-text">Смета по каждому объекту</p>
              </div>
              <div className="desc">
                <img
                  src="../../../public/asset/content/section1/expirions.svg"
                  alt=""
                />
                <p className="info-text">Бригада с опытом 20+ лет</p>
              </div>
            </div>
          </div>
          <div className="modal1">
            <div className="top">
              <p className="title">Получите точный расчет ремонта</p>
              <div className="first">
                <p className="n1">1.</p>
                <p className="subtitle">
                  Оставьте номер телефона и наш специалист свяжется с вами в
                  течении 40 минут
                </p>
              </div>
              <form action="" className="form-modal">
                <input
                  className="input-phone"
                  type="text"
                  placeholder="Введите телефон"
                />
                <button className="getPrice">ПОЛУЧИТЬ РАСЧЕТ</button>
              </form>
            </div>
            <div className="down">
              <div className="second">
                <p className="n2">2.</p>
                <p className="info">
                  <strong>Бесплатно</strong> приедем на замер и проконсультируем
                </p>
              </div>
              <div class="third">
                <p class="n3">3.</p>
                <p class="info">
                  <strong>Бесплатно</strong> сделаем расчет стоимости вашего
                  ремонта
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2 container-base">
        <div className="title">
          <p className="example">Примеры работ:</p>
          <div className="filter">
            <label>
              Тип ремонта:
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="Все">Все</option>
                <option value="Косметический">Косметический</option>
                <option value="Капитальный">Капитальный</option>
              </select>
            </label>
            <label>
              Стоимость:
              <select
                value={filterCost}
                onChange={(e) => setFilterCost(e.target.value)}
              >
                <option value="Все">Все</option>
                <option value="до 500 000">до 500 000</option>
                <option value="500 000 - 1 000 000">500 000 - 1 000 000</option>
                <option value="более 1 000 000">более 1 000 000</option>
              </select>
            </label>
          </div>
        </div>
        
      </div>
      <div>
            <h1>Мои проекты</h1>
            <ProjCarousel projectName="project1" />
            <ProjCarousel projectName="project2" />
        </div>

    </section>
  );
};
