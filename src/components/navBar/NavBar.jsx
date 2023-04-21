import { Navbar, Button } from "@nextui-org/react";
import { Layout } from "./Layout";
import { Link } from "react-router-dom";
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
          }}
        >
          <Link to={"/"}>Cartelera</Link>
          <Link to={"/aboudUs"}>Aboud Us</Link>
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
            <Button auto flat as={Link}>
              <Link to={"/login"}>Login</Link>
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map(({ label, link }, index) => (
            <Navbar.CollapseItem
              key={label}
              activeColor="warning"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link to={link}>
                {/* <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={link}
              > */}
                {label}
                {/* </Link> */}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
};
