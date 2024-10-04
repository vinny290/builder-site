import './Header.css';

export const Header = () => {
  return (
    <div className="header-top">
      <div className="container-xxl">
        <div className="navigation">
          <a className="nav">
            <img src="../../../public/asset/header/Link.svg" alt="logo" />
            Ремонт
          </a>
          <a className=" nav">Наши работы </a>
          <a className="nav">Контакты </a>
          <a className="nav">888800000</a>
        </div>
      </div>
    </div>
  );
};
