import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
  AiOutlinePhone,
} from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

function Footer() {
  const year = new Date().getFullYear()
  return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>
              <AiOutlineMail style={{ marginRight: '8px' }} />
              sanjanavrs23@gmail.com
            </h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>
              <AiOutlinePhone style={{ marginRight: '8px' }} />
              +91 9381268205
            </h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                    href="https://github.com/Sanjana-Vadluri"
                    style={{ color: 'white' }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <AiFillGithub size = {25}/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.linkedin.com/in/sanjana-vadluri-b79256259/"
                    style={{ color: 'white' }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <FaLinkedinIn size = {25} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        {/* Optional: add a copyright notice */}
        {/* <Row><Col className="text-center mt-2">© {year}</Col></Row> */}
      </Container>
  )
}

export default Footer
