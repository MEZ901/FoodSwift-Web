import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar,
  AvatarIcon,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/Auth/redux/authSelectors";
import { logOut } from "../../features/Auth/redux/authSlice";
import { useLogoutMutation } from "../../features/Auth/redux/authApiSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector(selectCurrentUser);

  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      dispatch(logOut());
      localStorage.removeItem("user");
    } catch (error) {
      console.log(error);
    }
  };

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <Nav onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="cursor-pointer" as={RouterLink} to="/">
          <img src={Logo} width={70} alt="Logo" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Testimonial
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {user ? (
          <NavbarItem className="hidden lg:flex cursor-pointer">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  icon={<AvatarIcon name="user" />}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{user.email}</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  onClick={handleLogout}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link color="foreground" as={RouterLink} to="/auth/login">
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                color="primary"
                variant="flat"
                as={RouterLink}
                to="/auth/register"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Nav>
  );
};

export default Navbar;
