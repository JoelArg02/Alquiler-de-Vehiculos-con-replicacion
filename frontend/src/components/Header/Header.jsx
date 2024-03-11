import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Inicio",
  },
  {
    path: "/about",
    display: "Sobre nosotros",
  },
  {
    path: "/cars",
    display: "Carros",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contacto",
  },
  // Opcionalmente, podrías incluir el link de administración aquí y controlar su visualización mediante una clase CSS basada en `isAdmin`
];

const Header = () => {
  const menuRef = useRef(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const logeado = localStorage.getItem("logeado") === "true";
    const token = localStorage.getItem("token");
    // Aquí debes definir la lógica específica para validar el token
    if (logeado && token) {
      setIsAdmin(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("logeado");
    localStorage.removeItem("token");
    setIsAdmin(false); // Aunque esto se establezca, la recarga de la página restablecerá el estado de cualquier manera.
    // Redirige a home y recarga la página
    window.location.href = "/home";
  };

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Necesitas Ayuda?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +593 998500498
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Ingresa
                </Link>

                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Registrate
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i class="ri-car-line"></i>
                    <span>
                      Servicio <br /> Renta de carros
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Ecuador</h4>
                  <h6>Quito, Ecuador</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Lunes a viernes</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className="d-flex align-items-center justify-content-end"
            >
              {isAdmin ? (
                // Muestra este botón si el usuario está logueado
                <button
                  className="header__btn btn"
                  style={{ color: "white" }}
                  onClick={handleLogout}
                >
                  Cerrar Sesión
                </button>
              ) : (
                <Link
                  to="/login"
                  className="header__btn btn"
                  style={{ color: "white" }}
                >
                  Iniciar Sesión
                </Link>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
                {isAdmin && (
                  <NavLink
                    to="/administracion"
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                  >
                    Administración
                  </NavLink>
                )}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Buscar" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
