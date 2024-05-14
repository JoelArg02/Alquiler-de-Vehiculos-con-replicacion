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
];

const Header = () => {
  const menuRef = useRef(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate(); // Se usa para redirigir al usuario

  useEffect(() => {
    // Aquí verificamos si el usuario está logueado mirando el localStorage
    const token = localStorage.getItem("token");
    setIsLogged(!!token);

    // Añade o remueve el enlace de administración basado en el estado isAdmin
    const adminLinkIndex = navLinks.findIndex(
      (link) => link.display === "Administración"
    );
    if (token === "1" && adminLinkIndex === -1) {
      navLinks.push({
        path: "/administracion",
        display: "Administración",
      });
    } else if (!token && adminLinkIndex !== -1) {
      navLinks.splice(adminLinkIndex, 1);
    }
  }, []);
  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  useEffect(() => {
    // Verifica si el usuario es admin
    const admin = localStorage.getItem("token");
    if (admin === "1") {
      setIsAdmin(true);
      navLinks.push({
        path: "/administracion",
        display: "Administracion",
      });
    } else {
      // Elimina el enlace "Añadir Vehículo" si no es admin o si el admin cambia
      const addCarIndex = navLinks.findIndex(
        (link) => link.display === "Añadir Vehículo"
      );
      if (addCarIndex > -1) {
        navLinks.splice(addCarIndex, 1);
      }
      setIsAdmin(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
    navigate("/home"); // Redirige al usuario a la página de inicio tras cerrar sesión
    // Actualiza navLinks si es necesario
    const adminLinkIndex = navLinks.findIndex(
      (link) => link.display === "Administración"
    );
    if (adminLinkIndex !== -1) {
      navLinks.splice(adminLinkIndex, 1);
    }
  };

  return (
    <header className="header">
      {/* ============ header top ============ */}
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

            {/* <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Ingresa
                </Link>

                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Registrate
                </Link>
              </div>
            </Col> */}
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
              className=" d-flex align-items-center justify-content-end "
            >
              {isLogged ? (
                <button className="header__btn btn" style={{color:"white"}} onClick={handleLogout}>
                  <i class="ri-logout-box-r-line"></i> Cerrar Sesión
                </button>
              ) : (
                <button className="header__btn btn ">
                  <Link to="/login">
                    <i class="ri-user-line"></i> Iniciar Sesión
                  </Link>
                </button>
              )}
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
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
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
