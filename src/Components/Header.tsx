import logo from '../assets/images/emply.png';

export const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
    </div>
  );
};
