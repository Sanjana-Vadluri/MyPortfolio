import React, {useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import {CgGitFork} from 'react-icons/cg'
import { MdWork } from "react-icons/md";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai'
import {ImBlog} from 'react-icons/im'
import {CgFileDocument} from 'react-icons/cg'

function NavBar() {
  const [expand, updateExpanded] = useState(false)
  const [navColour, updateNavbar] = useState(false)

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true)
    } else {
      updateNavbar(false)
    }
  }

  window.addEventListener('scroll', scrollHandler)

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? 'sticky' : 'navbar'}
      style={{backgroundColor: "#482257"}}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <p
            style={{
              margin: 'auto',
              fontWeight: '700',
              letterSpacing: '1px',
              fontSize: '28px',
            }}
          >
            Sanjana Vadluri
          </p>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : 'expanded')
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{marginBottom: '2px'}} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                  as={Link}
                  to="/experience"
                  onClick={() => updateExpanded(false)}
              >
                <MdWork style={{ marginBottom: "2px" }} /> Experience
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{marginBottom: '2px'}} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen style={{marginBottom: '2px'}} />{' '}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{marginBottom: '2px'}} /> Resume
              </Nav.Link>
            </Nav.Item>



            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Sanjana-Vadluri/MyPortfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{fontSize: '1.2em'}} />{' '}
                <AiFillStar style={{fontSize: '1.1em'}} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
