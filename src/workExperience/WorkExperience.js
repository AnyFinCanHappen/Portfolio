import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import "./WorkExperience.css";
import "../App.css";

function WorkExperience() {
  return (
    <Row>
      <Col></Col>
      <Col md={6} xs={10}>
        <div>
          <p class="title">Work Experience</p>
        </div>
        <div style={{ textAlign: "left" }}>
          <div class="fabflix_title visible_container">
            Visible | Front-End Engineer
          </div>
          <div class="fabflix_description">
            <div class="visible_div">
              <b>Project: </b>Visible Website Component - Swap Program
            </div>
            <div class="visible_div">
              <b>When: </b>Jan 2020 - Present
            </div>
            <div class="visible_div">
              <b>Tools and Languages:</b>
            </div>
            <div>
              Angular, Node.js, HTML5, CSS3, TypeScript, JavaScript, Express,
              RESTful services, Git, Jasmine, Karma, Agile/Scrum
            </div>
            <div class="visible_div">
              <b>Responsibilities:</b>
            </div>
            <ul>
              <li>
                Developed a Single Page Application (SPA) by using Covalent
                open-source framework, which is built on Angular 8, Angular CLI,
                TypeScript, RxJS, NgRx, Angular-Material design, Karma, Jasmine, d3,
                NGX, SCSS.
              </li>
              <li>
                Created shared modules and components that could be shared
                across the component’s application.
              </li>
              <li>Built the view layer on Angular 8, Material UI.</li>
              <li>
                Developed testing cases and implemented unit-tests using testing
                tools such as Jasmine and Karma.
              </li>
            </ul>
          </div>
          <div class="fabflix_title visible_container">
            Emerson Ecologics | Angular Software Developer
          </div>
          <div class="fabflix_description">
            <div class="visible_div">
              <b>Project: </b>E-Commerce Platform
            </div>
            <div class="visible_div">
              <b>When: </b>Nov 2018 - Dec 2019
            </div>
            <div class="visible_div">
              <b>Tools and Languages:</b>
            </div>
            <div>
              Angular 6, HTML5, CSS3, TypeScript, Java 8, Spring Boot,
              RESTful services, Git, Jasmine, Karma, Agile/Scrum
            </div>
            <div class="visible_div">
              <b>Responsibilities:</b>
            </div>
            <ul>
              <li>
                Developed, designed, and modified websites with the use of
                HTML5, CSS3, TypeScript, Angular, Java, Spring Boot,
                and MySQL.
              </li>
              <li>
                Transformed design mock-ups into cross-browser compatible
                HTML5/CSS3 layouts and implemented dynamic elements and reusable
                libraries with TypeScript and Angular.
              </li>
              <li>
                Used angular modules like Angular-Animate, Angular-Cookies,
                Angular-Filter, Angular-Mocks, Angular-Resource, Angular-Route,
                Angular-Sanitize, Angular-Touch, UI-Bootstrap, etc.
              </li>
              <li>
                Wrote unit tests for the developed applications using testing
                tools such as Jasmine and Karma.
              </li>
            </ul>
          </div>
          <div class="fabflix_title visible_container">
            Cox Automotive | User Interface Engineer
          </div>
          <div class="fabflix_description">
            <div class="visible_div">
              <b>Project: </b> Kelly Blue Book – Instant Cash Offer (KBB-ICO)
            </div>
            <div class="visible_div">
              <b>When: </b>Sept 2017 - Oct 2018
            </div>
            <div class="visible_div">
              <b>Tools and Languages:</b>
            </div>
            <div>
              HTML5, CSS3, JavaScript, Angular 4, Node.js, SCSS, Angular
              Material UI, RESTful services, Jasmine, Karma, Git, Agile/Scrum
            </div>
            <div class="visible_div">
              <b>Responsibilities:</b>
            </div>
            <ul>
              <li>
                Developed various UIs for the front-end side using Angular 4 and
                used various components from the Angular Material UI for the
                application development.
              </li>
              <li>
                Worked with Angular 4 controllers, custom pipes, Services and
                Custom directives.
              </li>
              <li>
                Involved in writing application-level code to interact with
                APIs, RESTful Web Services using Angular HTTP modules.
              </li>
            </ul>
          </div>
        </div>
      </Col>
      <Col></Col>
    </Row>
  );
}
export default WorkExperience;
