import { NavbarButton } from './NavbarButton';
import { GroupsOutlined, DashboardCustomizeOutlined } from '@mui/icons-material';

export const Navbar = () => {
  const routeUrl = window.location.pathname;
  const handleClick = (route: string) => {
    window.location.href = route;
  };

  return (
    <div className="navbar-container">
      <NavbarButton active={routeUrl === '/' ? true : false} Icon={GroupsOutlined} text="Employees" handleClick={() => handleClick('/')} />
      <NavbarButton
        active={routeUrl === '/departments' ? true : false}
        Icon={DashboardCustomizeOutlined}
        text="Deparments"
        handleClick={() => handleClick('/departments')}
      />
    </div>
  );
};
