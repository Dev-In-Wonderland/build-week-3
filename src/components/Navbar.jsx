import { Col, Row, Form } from "react-bootstrap";
import { AiFillLinkedin } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import{MdAccountCircle} from "react-icons/md"
import { MdHome, MdWork, MdNotifications } from "react-icons/md";
import { BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { Link } from "react-router-dom";
import {TbMessageCircle2Filled} from 'react-icons/tb'

const Navbar = () => {
  return (
    <Row className="w-100 navbar-navigation d-flex justify-content-center">
      <Col
        className="nav-col d-flex justify-content-center align-items-center"
        xs={10}
      >
        <div className="input-search d-flex align-items-center">
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

        <ul className="ul-nav ms-5">
          <li>
            <MdHome className="i-nav home" />
            <Link to="/">
              
              <span className="d-none d-lg-block">Home</span>
            </Link>
          </li>
          <li>
            <BsFillPeopleFill className="i-nav" />
            <span className="d-none d-lg-block">Rete</span>
          </li>
          <li>
            <MdWork className="i-nav" />
            <span className="d-none d-lg-block">Job</span>
          </li>
          <li>
            <TbMessageCircle2Filled className="i-nav" />
            <span className="d-none d-lg-block">Messaggistica</span>
          </li>
          <li>
            <MdNotifications className="i-nav" />
            <span className="d-none d-lg-block">Notifiche</span>
          </li>
          <li>
            <MdAccountCircle className="i-nav tu" />
            <Link className="" to="/Me/me">
              
              <span className="d-none d-lg-block">
                Tu <IoMdArrowDropdown className="freccia-dropdown" />
              </span>
            </Link>
          </li>
        </ul>
        <ul className="ul-nav ul-ul">
          <li>
            <CgMenuGridR className="i-nav" />
            <span className="d-none d-lg-block">
              Lavoro <IoMdArrowDropdown className="freccia-dropdown" />
            </span>
          </li>
          <li>
            <a className="premium" href="a">Prova Premium</a>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default Navbar;
