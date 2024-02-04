
import React from "react";
import { NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import {ChevronDown} from "../main/Icons";




const MyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="">
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="w-2"
        />
        <NavbarBrand className="text-sm sm:text-md">
          <p className="font-bold text-inherit text-green-800">KUYANT <br /><em className="text-[10px]">PHARMA</em></p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="w-10 sm:flex gap-1" justify="center">
      <NavbarItem isActive className="hidden sm:flex">
          <Link href="/" aria-current="page" color="success">
            Home
          </Link>
        </NavbarItem>
         <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-green-400 hover:text-white"
                radius="sm"
                variant="light"
                endContent={icons.chevron}
              >
                Books
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px] text-center p-6"
          >
            <DropdownItem>
            <Link color="success" href="/" className="sm:hidden">
            Home
          </Link>
            </DropdownItem>
            <DropdownItem>
            <Link color="success" href="/category/Chemistry" className="p-2">
            Chemistry Books
          </Link>
            </DropdownItem>
            <DropdownItem>
            <Link color="success" href="/category/Herbal" className="p-2">
            Herbal Books
          </Link>
            </DropdownItem>
            <DropdownItem>
            <Link color="success" href="#" className="p-2">
            Features 3
          </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Blogs
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent className="w-2" justify="end">
        <NavbarItem className=" flex">
          <Link href="/about" color="success">About</Link>
        </NavbarItem>
        <NavbarItem className="">
          <Button as={Link} color="success" href="https://kuyiba-portfolio.netlify.app" variant="flat" className="">
            Portfolio 
          </Button>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarMenu className="w-1/3 bg-gray-300">
        {menuItems.map((item, index) => (
          <NavbarMenuItem  key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}
      <NavbarMenu className="w-1/3 bg-gray-300">
      {menuItems.map((item, index) => (
  <NavbarMenuItem key={`${item}-${index}`}>
    <Link
      color={
        index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
      }
      className="w-full"
      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`} // Example: Convert "My Settings" to "/my-settings"
      size="lg"
    >
      {item}
    </Link>
  </NavbarMenuItem>
))}

</NavbarMenu>

    </Navbar>
  );
}

export default MyNavbar;
