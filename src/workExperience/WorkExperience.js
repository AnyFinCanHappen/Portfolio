import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import './WorkExperience.css';
import '../App.css';

function WorkExperience() {
  return (
    <Row>
      <Col></Col>
      <Col md={6} xs={10}>
        <div>
          <p class="title">Work Experience</p>
        </div>
        <div style={{ textAlign: 'left' }}>
          <div class="fabflix_title visible_container">
            JB Hunt | Front-End Engineer
          </div>
          <div class="fabflix_description">
            <div class="visible_div">
              <b>Project: </b> Railway Manager, Landing Page, common components
            </div>
            <div class="visible_div">
              <b>When: </b>Jan 2020 - Present
            </div>
            <div class="visible_div">
              <b>Tools and Languages:</b>
            </div>
            <div>
              Angular 8, 9, 12, ,PrimeNg, NgRx, Node.js, HTML5, SCSS,
              TypeScript, RESTful services, Git, Jasmine, Karma, Agile/Scrum,
              Azure DevOps
            </div>
            <div class="visible_div">
              <b>Responsibilities:</b>
            </div>
            <ul>
              <li>
                Rendered collated data via drag and droppable PrimeNg Tables
                with server side pagination, filtering, sorting, developed
                template rows, headers, and binded custom events to generate
                queries, used Angular CDK directives to enable drag and drop,
                and implemented editable rows with validated auto completable
                form controls with reactive forms
              </li>
              <li>
                Upgraded landing page from Angular version 8 to 9 using the
                Angular command line interface to utilize the Ivy Compiler,
                TypeScript 3.7, and reduced project’s bundle size by 20%
              </li>
              <li>
                Managed application’s visual state with NgRx actions and
                reducers, retrieved and updated application’s visual state in a
                preference web service with NgRx effects to synchronize
                application’s visual state with the web service allowing for a
                seamless user experience from one device to another
              </li>
              <li>
                Designed and built npm package for searching users and teams
                with their tasks IDs developed with PrimeNg’s Overlay and
                Autocomplete modules, allowing consuming applications to supply
                custom list template by supplying a TemplateRef via input
                property, rendering TemplateRefs with ng-container elements and
                the ngTemplateOutlet directive, becoming the standard component
                for searching users and their tasks
              </li>
              <li>
                Pushed new features into development, testing, and production
                environments using continuous integration and deployment
                pipelines by automating and testing builds, enabling anytime
                releases
              </li>
              <li>
                Rebuilt header’s sidebar navigation component with PrimeNg’s
                ScrollPanel and Listbox modules, dynamically styled and
                positioned the component using the NgClass directive, injected
                HttpClient into services to retrieve links from a security web
                service, generated list elements with the MenuItem interface,
                and saved favorite links through a preference web service,
                eventually replacing the legacy sidebar component
              </li>
              <li>
                Maintained 100% unit test coverage using Jasmine and integrated
                e2e test with Cypress
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
