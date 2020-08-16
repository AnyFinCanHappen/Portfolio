import React, {Component} from 'react';
import Image from "react-bootstrap/Image"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';

function importAll(file){
    let images = {};
    file.keys().forEach((item) =>{
        let itemReplace = item.replace('./', '');
        let key = itemReplace.slice(0, itemReplace.length - 4);
        if(key === "React" || key === "node" || key === "Express"){
            key += ".js";
        }
        images[key] = file(item);
    });
    return images;
        
}

const images = importAll(require.context('./css/language', false, /\.(png|jpg|svg)$/));

class Skills extends Component{
    state = {
    }

    displaySkills = () =>{
        return(
            <Row sm = {3} xs = {2} md = {5} lg = {6}>
            {Object.keys(images).map((key) =>{
                return(
                    <Col className = "px-0" key = {key}>
                    <Card border = "success" style = {{backgroundColor :"transparent"}}>
                            <Card.Body>
                                <Image src = {images[key]} fluid = "true" style = {{height:"80px", background:"transparent"}}></Image>
                            </Card.Body>
                            <Card.Footer>
                                <div style = {{fontSize: "medium"}}>
                                    {key}
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>

                );
            })}
                <Col>
                    <Card style = {{backgroundColor:"transparent"}}>
                        <Card.Body></Card.Body>
                        <Card.Footer>
                                <div style = {{fontSize:"large"}}>
                                    And many more!
                                </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        );
    }
    render(){
        return(
            <div>
                <this.displaySkills></this.displaySkills>
            </div>
        );
    }
}
export default Skills;