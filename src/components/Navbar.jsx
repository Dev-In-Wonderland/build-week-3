import { Col, Row, Form } from "react-bootstrap";
import { AiFillLinkedin, AiFillMessage } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdHome, MdWork, MdNotifications } from "react-icons/md";
import { BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <Row className="w-100 navbar-navigation d-flex justify-content-center">
      <Col
        className="nav-col d-flex justify-content-center align-items-center"
        xs={10}
      >
        <div className="input-search">
          <AiFillLinkedin className="linkedin-logo" />
          <Form className="d-flex form d-none d-lg-block">
            <Form.Control
              type="search"
              placeholder="Cerca"
              className="me-2 form-ricerca"
              aria-label="Search"
            />
          </Form>
        </div>

        <ul className="ul-nav">
          <li>
            <MdHome className="i-nav" />
            <span className="d-none d-lg-block">Home</span>
          </li>
          <li>
            <BsFillPeopleFill className="i-nav" />
            <span className="d-none d-lg-block">Rete</span>
          </li>
          <li>
            <MdWork className="i-nav" />
            <span className="d-none d-lg-block">Lavoro</span>
          </li>
          <li>
            <AiFillMessage className="i-nav" />
            <span className="d-none d-lg-block">Messaggistica</span>
          </li>
          <li>
            <MdNotifications className="i-nav" />
            <span className="d-none d-lg-block">Notifiche</span>
          </li>
          <li>
            <BsFillPersonFill className="i-nav" />
            <Link to="/Me">
              {" "}
              <span className="d-none d-lg-block">
                Tu <IoMdArrowDropdown className="freccia-dropdown" />
              </span>
            </Link>
          </li>
        </ul>
        <ul className="ul-nav">
          <li>
            <CgMenuGridR className="i-nav" />
            <span className="d-none d-lg-block">
              Lavoro <IoMdArrowDropdown className="freccia-dropdown" />
            </span>
          </li>
          <li>
            <a href="a">Prova Premium</a>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default Navbar;
