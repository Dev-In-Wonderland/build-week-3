import { Col, Row } from "react-bootstrap"
import { IoMdArrowDropdown, IoMdSettings } from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return(

        <>
            
            <Row className="footer w-100 ">
            <div className="d-flex align-items-center mt-2"><h3 className="footer-linkedIn">Linked</h3><span> <AiFillLinkedin className="linkedin-logo-footer" /> </span></div>
                <Col xs={6} className="footer-col">
                    <ul>
                        <Col xs={4}>
                            <li>Informazioni</li>
                            <li>Linee guida della comunity</li>
                            <li>Privacy e condizioni <IoMdArrowDropdown className="freccia-dropdown"/></li>
                            <li>Sales Solutions</li>
                            <li>Centro sicurezza</li>
                        </Col >
    
                        <Col xs={4}>
                            <li>Accessibilità</li>
                            <li>Carriera</li>
                            <li>Opzioni di annuncio</li>
                            <li>Mobile</li>
                        </Col>
    
                        <Col xs={4}>
                            <li>Talent Solutions</li>
                            <li>Soluzioni di marketing</li>
                            <li>Pubblicità</li>
                            <li>Piccole imprese</li>
                        </Col >
    
                    </ul>
                </Col>
                <Col xs={3}>
                    <Row >
                        <Col xs={2}>
                            <AiFillQuestionCircle className="i-footer"/>
                        </Col>
                        <Col xs={10}>
                            <h6>Domande?</h6>
                            <p>Visita il nostro Centro assistenza</p>
                        </Col>
                    </Row>
                    <Row >
                        <Col xs={2}>
                            <IoMdSettings className="i-footer"/>
                        </Col>
                        <Col xs={10}>
                            <h6>Gestisci il tuo account e la tua privacy</h6>
                            <p>Vai alle impostazioni</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={3}>
                    <label>Seleziona lingua</label>
                    <select name="language" id="" defaultValue={"Italiano - Italiano"} >
                        <option value="0" > Italiano - Italiano</option>
                        <option value="1">English - Inglese</option>
                        <option value="2">Français - Francese</option>
                    </select>
                </Col>
                <span className="footerCopiright mb-2">LinkedIn Corporation © 2023</span>
                
            </Row>
        </>
    )
}

export default Footer