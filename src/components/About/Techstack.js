import React from 'react';
import { Col, Row } from 'react-bootstrap';

// Languages
import { SiC } from 'react-icons/si';
import { DiJava, DiPython, DiJavascript1, DiDatabase } from 'react-icons/di';

// Frontend & Backend
import { DiReact, DiNodejs } from 'react-icons/di';
import { SiHtml5, SiCss3, SiSpring } from 'react-icons/si';

// Databases
import { SiMongodb, SiMysql } from 'react-icons/si';

// Tools
import { DiGit } from 'react-icons/di';
import { SiGithub, SiPostman } from 'react-icons/si';

// OS
import { SiWindows, SiLinux } from 'react-icons/si';

// IDEs
import {
    SiVisualstudiocode,
    SiEclipseide,
    SiIntellijidea,
} from 'react-icons/si';

function Techstack() {
    return (
        <>
            {/* ─────────── Languages ─────────── */}
            <h2 className="skill-category-title">Languages</h2>
            <Row style={{ justifyContent: 'center', paddingBottom: '20px' }}>
                <Col xs={4} md={2} className="tech-icons" title="C">
                    <SiC />
                    <div className="tech-label">C</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="Java">
                    <DiJava />
                    <div className="tech-label">Java</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="Python">
                    <DiPython />
                    <div className="tech-label">Python</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="JavaScript">
                    <DiJavascript1 />
                    <div className="tech-label">JavaScript</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="SQL">
                    <DiDatabase />
                    <div className="tech-label">SQL</div>
                </Col>
            </Row>

            {/* ─────────── Frontend & Backend ─────────── */}
            <h2 className="skill-category-title">Frontend & Backend</h2>
            <Row style={{ justifyContent: 'center', paddingBottom: '20px' }}>
                <Col xs={4} md={2} className="tech-icons" title="HTML5">
                    <SiHtml5 />
                    <div className="tech-label">HTML5</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="CSS3">
                    <SiCss3 />
                    <div className="tech-label">CSS3</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="React">
                    <DiReact />
                    <div className="tech-label">React</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="Node.js">
                    <DiNodejs />
                    <div className="tech-label">Node.js</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="Spring Boot">
                    <SiSpring />
                    <div className="tech-label">Spring Boot</div>
                </Col>
            </Row>

            {/* ─────────── Databases ─────────── */}
            <h2 className="skill-category-title">Databases</h2>
            <Row style={{ justifyContent: 'center', paddingBottom: '20px' }}>
                <Col xs={4} md={2} className="tech-icons" title="MongoDB">
                    <SiMongodb />
                    <div className="tech-label">MongoDB</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="MySQL">
                    <SiMysql />
                    <div className="tech-label">MySQL</div>
                </Col>
            </Row>

            {/* ─────────── Tools ─────────── */}
            <h2 className="skill-category-title">Tools</h2>
            <Row style={{ justifyContent: 'center', paddingBottom: '20px' }}>
                <Col xs={4} md={2} className="tech-icons" title="Git">
                    <DiGit />
                    <div className="tech-label">Git</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="GitHub">
                    <SiGithub />
                    <div className="tech-label">GitHub</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="Postman">
                    <SiPostman />
                    <div className="tech-label">Postman</div>
                </Col>
            </Row>

            {/* ─────────── Operating Systems ─────────── */}
            <h2 className="skill-category-title">Operating Systems</h2>
            <Row style={{ justifyContent: 'center', paddingBottom: '20px' }}>
                <Col xs={4} md={2} className="tech-icons" title="Windows">
                    <SiWindows />
                    <div className="tech-label">Windows</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons" title="Linux">
                    <SiLinux />
                    <div className="tech-label">Linux</div>
                </Col>
            </Row>
        </>
    );
}

export default Techstack;
