type NavbarButtonProps = {
  Icon: React.ElementType;
  text: string;
  active: boolean;
  handleClick: () => void;
};

export const NavbarButton = ({ active, Icon, text, handleClick }: NavbarButtonProps) => {
  return (
    <div className={`navbar-button ${active ? 'active' : ''}`} onClick={handleClick}>
      <Icon className="icon" />
      <span>{text}</span>
    </div>
  );
};
