import React, { useEffect, useMemo, useState } from "react";
import {
  Nav,
  Navbar,
  Offcanvas,
  Button,
  Dropdown,
  Image,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ModalLogin from "../../components/modal/ModalLogin";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { startLogout } from "../../redux/slices/thunks";
import {
  startGetProducts,
  startSetProductView,
} from "../../redux/productsSlice/thunk";
import { startShowModal } from "../../redux/modal/thunk";
import { ProductModal } from "../modal/ProductModal";
import { Link, useLocation } from "react-router-dom";
import { Cart } from "../ui/Cart";

export const Header = () => {
  const { status, email } = useSelector((state) => state.auth);
  const isAuthenticating = useMemo(() => status !== "auth", [status]);
  const { data } = useSelector((state) => state.products);
  const [scroll, setScroll] = useState(window.pageYOffset);
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: pageContent } = useSelector((state) => state.page);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleClose = () => setMenuOpen(false);
  const location = useLocation();

  const dispatch = useDispatch();

  const handleScroll = () => {
    setScroll(window.pageYOffset);
  };

  const openModal = (action) => {
    dispatch(startShowModal(action));
  };

  const openPetId = (item) => {
    handleClose();
    dispatch(startSetProductView({ data: item }));
    dispatch(startShowModal("product"));
  };

  const onLogout = () => {
    dispatch(startLogout());
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    dispatch(startGetProducts());
  }, []);

  return (
    <>
      <Navbar
        fixed="top"
        bg={scroll < 650 ? "menu-no-fixed" : "primary"}
        expand="xl"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <Navbar.Brand as={Link} to="/">
          <Image width={100} src={pageContent.logoPrincipal} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
        <Navbar.Offcanvas
          id="basic-navbar-nav"
          aria-labelledby={`offcanvasNavbarLabel-expand`}
          placement="start"
          show={menuOpen}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
              <Navbar.Brand as={Link} to="/">
                <Image width={100} src={pageContent.logoPrincipal} />
              </Navbar.Brand>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto">
              {location.pathname == "/" ? (
                <Nav.Link onClick={handleClose} href="#inicio">
                  Inicio
                </Nav.Link>
              ) : (
                <Nav.Link onClick={handleClose} as={Link} to="/">
                  Inicio
                </Nav.Link>
              )}
              <Nav.Link onClick={handleClose} href="#functions">
                ¿Como funciona?
              </Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Productos
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {data.map((item, key) => (
                    !!item.quantity &&
                    <Dropdown.Item key={key} onClick={() => openPetId(item)}>
                      {item.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link as={Link} onClick={handleClose} to="/planes">
                Planes
              </Nav.Link>
            </Nav>

            {isAuthenticating ? (
              <Nav className="ms-auto button-slide buttons-auth">
                <Button
                  className={"buttonLogin"}
                  onClick={() => openModal("login")}
                >
                  Inicia sesion
                </Button>
              </Nav>
            ) : (
              <div className="buttons-auth d-flex">
                <Nav.Link as={Link} to="/panel">
                  <FontAwesomeIcon icon={faUser} /> {email}
                </Nav.Link>
                <Button id="header-logout" onClick={() => onLogout()}>
                  Salir
                </Button>
              </div>
            )}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
      <ModalLogin />
      <ProductModal />
      <Cart />
    </>
  );
};
