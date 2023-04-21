import { Navbar, Link, Button } from "@nextui-org/react";
import { Layout } from "./Layout";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/img/logos/logo-black.webp";
import "../nav/navBar.css";

export const NavBar = () => {
  const collapseItems = [
    { label: "Cartelera", link: "/" },
    { label: "Aboud Us", link: "/aboudUs" },
    { label: "Login", link: "/login" },
  ];

  return (
    <Layout>
      <Navbar isBordered shouldHideOnScroll variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <NavLink to={"/"}>
            <picture className="logo">
              <img src={Logo} alt="logotipo" />
            </picture>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="highlight"
          css={{
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <NavLink to={"/"}>
            <Navbar.Link>Cartelera</Navbar.Link>
          </NavLink>
          <NavLink to={"/aboudUs"}>
            <Navbar.Link>Aboud Us</Navbar.Link>
          </NavLink>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Navbar.Item>
            <NavLink to={"/login"}>
              <Button auto flat as={Link}>
                Login
              </Button>
            </NavLink>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map(({ label, link }, index) => (
            <Navbar.CollapseItem
              key={index}
              activeColor="warning"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <NavLink to={link}>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                >
                  {label}
                </Link>
              </NavLink>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
};
