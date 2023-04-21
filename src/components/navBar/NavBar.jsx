import { useRef, useState } from "react";
import { Navbar, Button } from "@nextui-org/react";
import { Layout } from "./Layout";
import { Link } from "react-router-dom";

import Logo from "../../../public/img/logos/logo-black.webp";
import "../nav/navBar.css";

export const NavBar = () => {
  const navbarToggleRef = useRef();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(
    window.location.href.split(`${window.location.origin}`)[1]
  );

  const collapseItems = [
    { label: "Cartelera", link: "/" },
    { label: "Aboud Us", link: "/aboudUs" },
    { label: "Login", link: "/login" },
  ];

  const HandleSideMenu = (link) => {
    setActiveMenu(link);
    isSideMenuOpen && navbarToggleRef.current.click();
  };
  console.log("activeMenu", activeMenu);

  return (
    <Layout>
      <Navbar
        isBordered
        shouldHideOnScroll
        variant="sticky"
        css={{
          padding: "0 1rem",
        }}
      >
        <Navbar.Toggle
          showIn="xs"
          ref={navbarToggleRef}
          onChange={(isSelected) => setIsSideMenuOpen(isSelected)}
        />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Link to={"/"}>
            <picture className="logo">
              <img src={Logo} alt="logotipo" />
            </picture>
          </Link>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="highlight"
          css={{
            width: "100%",
            justifyContent: "flex-end",
            gap: "1rem",
          }}
        >
          <Link to={"/"}>Cartelera</Link>
          <Link to={"/aboudUs"}>Aboud Us</Link>
          <Link to={"/login"}>Login</Link>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map(({ label, link }, index) => (
            <Navbar.CollapseItem
              key={label}
              activeColor="warning"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={link === activeMenu}
            >
              <Link to={link} onClick={() => HandleSideMenu(link)}>
                {label}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
};
